import { BASE_URL, BaseApi } from './baseAPI';
import HTTPTransport from '../utils/HTTPTransport';

const userInfoAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);


export class AvatarAPI extends BaseApi {
  static change(data: unknown) {
    return userInfoAPIInstance
      .put('profile/avatar', {
        credentials: 'include',
        mode: 'cors',
        body: data,
      })
      .then((response) => response);
  }
}

export class ChangeUserInfoAPI extends BaseApi {
  static change(data: any) {
    return userInfoAPIInstance
      .put('profile', {
        credentials: 'include',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response);
  }
}

export class ChangeUserPassAPI extends BaseApi {
  static change(data: unknown) {
    return userInfoAPIInstance
      .put('password', {
        credentials: 'include',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response);
  }
}
