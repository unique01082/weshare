// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/Activities */
export async function getActivities(options?: { [key: string]: any }) {
  return request<API.Activity[]>(`https://fakerestapi.azurewebsites.net/api/v1/Activities`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/Activities */
export async function postActivities(body: API.Activity, options?: { [key: string]: any }) {
  return request<API.Activity>(`https://fakerestapi.azurewebsites.net/api/v1/Activities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/Activities/${param0} */
export async function getActivitiesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getActivitiesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Activity[]>(
    `https://fakerestapi.azurewebsites.net/api/v1/Activities/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PUT /api/v1/Activities/${param0} */
export async function putActivitiesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putActivitiesIdParams,
  body: API.Activity,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Activity>(
    `https://fakerestapi.azurewebsites.net/api/v1/Activities/${param0}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; v=1.0',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 DELETE /api/v1/Activities/${param0} */
export async function deleteActivitiesId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteActivitiesIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Activities/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
