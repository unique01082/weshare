declare namespace API {
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type LoginParams = {
    username: string;
    password: string;
    mobile: string;
    code: string;
  };
}
