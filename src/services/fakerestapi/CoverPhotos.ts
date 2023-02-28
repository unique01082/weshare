// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/CoverPhotos */
export async function getCoverPhotos(options?: { [key: string]: any }) {
  return request<API.CoverPhoto[]>(`https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/CoverPhotos */
export async function postCoverPhotos(body: API.CoverPhoto, options?: { [key: string]: any }) {
  return request<API.CoverPhoto>(`https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; v=1.0',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/CoverPhotos/${param0} */
export async function getCoverPhotosId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoverPhotosIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CoverPhoto>(
    `https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PUT /api/v1/CoverPhotos/${param0} */
export async function putCoverPhotosId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putCoverPhotosIdParams,
  body: API.CoverPhoto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CoverPhoto>(
    `https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/${param0}`,
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

/** 此处后端没有提供注释 DELETE /api/v1/CoverPhotos/${param0} */
export async function deleteCoverPhotosId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCoverPhotosIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/CoverPhotos/books/covers/${param0} */
export async function getCoverPhotosBooksCoversIdBook(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCoverPhotosBooksCoversIdBookParams,
  options?: { [key: string]: any },
) {
  const { idBook: param0, ...queryParams } = params;
  return request<API.CoverPhoto[]>(
    `https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/books/covers/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}
