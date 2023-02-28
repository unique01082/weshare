declare namespace API {
  type Activity = {
    id?: number;
    title?: string;
    dueDate?: string;
    completed?: boolean;
  };

  type Author = {
    id?: number;
    idBook?: number;
    firstName?: string;
    lastName?: string;
  };

  type Book = {
    id?: number;
    title?: string;
    description?: string;
    pageCount?: number;
    excerpt?: string;
    publishDate?: string;
  };

  type CoverPhoto = {
    id?: number;
    idBook?: number;
    url?: string;
  };

  type deleteActivitiesIdParams = {
    id: number;
  };

  type deleteAuthorsIdParams = {
    id: number;
  };

  type deleteBooksIdParams = {
    id: number;
  };

  type deleteCoverPhotosIdParams = {
    id: number;
  };

  type deleteUsersIdParams = {
    id: number;
  };

  type getActivitiesIdParams = {
    id: number;
  };

  type getAuthorsAuthorsBooksIdBookParams = {
    idBook: number;
  };

  type getAuthorsIdParams = {
    id: number;
  };

  type getBooksIdParams = {
    id: number;
  };

  type getCoverPhotosBooksCoversIdBookParams = {
    idBook: number;
  };

  type getCoverPhotosIdParams = {
    id: number;
  };

  type getUsersIdParams = {
    id: number;
  };

  type putActivitiesIdParams = {
    id: number;
  };

  type putAuthorsIdParams = {
    id: number;
  };

  type putBooksIdParams = {
    id: number;
  };

  type putCoverPhotosIdParams = {
    id: number;
  };

  type putUsersIdParams = {
    id: number;
  };

  type User = {
    id?: number;
    userName?: string;
    password?: string;
  };
}
