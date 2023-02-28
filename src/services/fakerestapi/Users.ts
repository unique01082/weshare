// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/Users */
export async function getUsers(options?: { [key: string]: any }) {
  return request<API.User[]>(`https://fakerestapi.azurewebsites.net/api/v1/Users`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/Users */
export async function postUsers(body: API.User, options?: { [key: string]: any }) {
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/Users/${param0} */
export async function getUsersId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Users/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/Users/${param0} */
export async function putUsersId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putUsersIdParams,
  body: API.User,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Users/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/v1/Users/${param0} */
export async function deleteUsersId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsersIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/Users/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
