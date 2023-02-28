import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message, notification } from 'antd';

enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

export const httpSetting: RequestConfig = {
  errorConfig: {
    // error thrown
    errorThrower: (res) => {
      const { success, data, errorCode, errorMessage, showType } =
        res as unknown as ResponseStructure;
      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // Throw self-made errors
      }
    },
    // Error reception and processing
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // The error thrown by our errorThrower.
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios errors
        // The request was sent successfully and the server responded with a status code, but the status code is out of the range of 2xx
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // The request was made successfully, but no response was received
        // \`error.request\` is an instance of XMLHttpRequest in the browser,
        // In node.js it is an instance of http.ClientRequest
        message.error('None response! Please retry.');
      } else {
        // Something went wrong while sending the request
        message.error('Request error, please retry.');
      }
    },
  },

  requestInterceptors: [
    (config: RequestOptions) => {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers.Authorization = localStorage.getItem('token')!;

      return { ...config };
    },
  ],

  responseInterceptors: [
    (response) => {
      const { data } = response as unknown as ResponseStructure;

      if (data?.success === false) {
        message.error('The request failed!');
      }
      return response;
    },
  ],
};
