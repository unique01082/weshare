// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/Authors */
export async function getAuthors(options?: { [key: string]: any }) {
  return request<API.Author[]>(`https://fakerestapi.azurewebsites.net/api/v1/Authors`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/Authors */
export async function postAuthors(body: API.Author, options?: { [key: string]: any }) {
  return request<API.Author>(`https://fakerestapi.azurewebsites.net/api/v1/Authors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/Authors/${param0} */
export async function getAuthorsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthorsIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Author>(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/Authors/${param0} */
export async function putAuthorsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putAuthorsIdParams,
  body: API.Author,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Author>(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/v1/Authors/${param0} */
export async function deleteAuthorsId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteAuthorsIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/Authors/authors/books/${param0} */
export async function getAuthorsAuthorsBooksIdBook(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthorsAuthorsBooksIdBookParams,
  options?: { [key: string]: any },
) {
  const { idBook: param0, ...queryParams } = params;
  return request<API.Author[]>(
    `https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}
