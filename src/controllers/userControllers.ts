import { LogOutAPI } from './../api/authAPI';
import store from '../utils/Store/store';
import { UserAPI } from "../api/authAPI"
import { router } from "../utils/Router/Router"
import { routesPaths } from '../utils/Router/routesEnum';
import { AvatarAPI, ChangeUserInfoAPI, ChangeUserPassAPI } from '../api/userAPI';


export class UserController {
  static getUser() {
    UserAPI.request()
      .then((data: any) => {
        try {
          store.set('user', JSON.parse(data.responseText));
        } catch {
          console.log('Data extraction error');
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Server response error');
      });
  }

  static logoutUser() {
    LogOutAPI.request()
      .then(() => {
        router.go('/');
      })
      .catch((error: any) => {
        console.log(error.reason || 'Server response error');
      });
  }

  static changeUserAvatar(data: any) {
    AvatarAPI.change(data)
      .then((response: any) => {
        if (response.status === 200) {
          this.getUser();
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Server response error');
      });
  }

  static changeUserProfileData(data: any) {
    ChangeUserInfoAPI.change(data)
      .then((response: any) => {
        if (response.status === 200) {
          this.getUser();
          router.go(routesPaths.profile);
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Server response error');
      });
  }

  static changeUserPassword(data: any) {
    ChangeUserPassAPI.change(data)
      .then((response: any) => {
        if (response.status === 200) {
          router.go(routesPaths.profile);
        }
      })
      .catch((error: any) => {
        console.log(error.reason || 'Server response error');
      });
  }
}
