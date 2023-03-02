import { BASE_URL, BaseApi } from './baseAPI';
import HTTPTransport from '../utils/HTTPTransport';

const authAPIInstanse = new HTTPTransport(`${BASE_URL}/auth/`);

export class SignUpAPI extends BaseApi {
  static create(data: unknown) {
    return authAPIInstanse.post('signup', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
export class LoginAPI extends BaseApi {
  static request(data: unknown) {
    return authAPIInstanse.post('signin', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
export class UserAPI extends BaseApi {
  static request() {
    return authAPIInstanse.get('user', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
export class LogOutAPI extends BaseApi {
  static request() {
    return authAPIInstanse.post('logout', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}
