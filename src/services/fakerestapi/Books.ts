// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/Books */
export async function getBooks(options?: { [key: string]: any }) {
  return request<API.Book[]>(`https://fakerestapi.azurewebsites.net/api/v1/Books`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/Books */
export async function postBooks(body: API.Book, options?: { [key: string]: any }) {
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/Books/${param0} */
export async function getBooksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBooksIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Book>(`https://fakerestapi.azurewebsites.net/api/v1/Books/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/Books/${param0} */
export async function putBooksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBooksIdParams,
  body: API.Book,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Books/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/v1/Books/${param0} */
export async function deleteBooksId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBooksIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Books/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
