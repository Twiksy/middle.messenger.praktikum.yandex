

import store from '../utils/Store/store';
import { ISignUp, ILoginForm } from '../types/Interfaces';
import { routesPaths } from '../utils/Router/routesEnum';
import { SignUpAPI, LoginAPI } from '../api/authAPI';
import { UserAPI } from '../api/authAPI';

import { UserChatController } from './chatController';
import { } from '../types/Interfaces';
import { BaseApi } from '../api/baseAPI';
import { router } from '../utils/Router/Router';



export class SignUpController extends BaseApi {
    static parseError = 'Data error';

    static tryCatch(response: string, errorMessage: string) {
        try {
            return JSON.parse(response);
        } catch {
            console.log(errorMessage);
            return {};
        }
    }

    static signUp(data: ISignUp) {
        SignUpAPI.create(data)
            .then((response: any) => {
                if (response.status === 200) {
                    UserAPI.request()
                        .then((responseData: any) => {
                            if (responseData.status === 200) {
                                try {
                                    store.set('user', JSON.parse(responseData.responseText));
                                } catch {
                                    console.log('Data error');
                                }
                                router.go(routesPaths.chats);
                            } else {
                                console.log(this.tryCatch(response.response, this.parseError).reason);
                            }
                        })
                        .catch((error: any) => {
                            console.log(error.reason || 'Server error');
                        });
                } else {
                    console.log(this.tryCatch(response.response, this.parseError).reason);
                }
            })
            .catch((error: any) => {
                console.log(error.reason || 'Server error');
            });
    }
}

export class LoginController {
    static parseError = 'Ошибка извлечения данных';

    static errorMessage = 'User already in system';

    static tryCatchParse(response: string, errorMessage: string) {
        try {
            return JSON.parse(response);
        } catch {
            window.alert(errorMessage);
            return {};
        }
    }

    static login(data: ILoginFormModel) {
        LoginAPI.request(data)
            .then(async (response: any) => {
                if (response.status === 200) {
                    UserAPI.request()
                        .then((responseData: any) => {
                            if (responseData.status === 200) {
                                store.set('user', this.tryCatchParse(responseData.responseText, this.parseError));
                                UserChatController.getAllChats();
                                router.go(routesPaths.chats);
                            } else {
                                window.alert(this.tryCatchParse(response.response, this.parseError).reason);
                            }
                        })
                        .catch((error: any) => {
                            window.alert(error.reason || 'Ошибка ответа от сервера');
                        });
                } else {
                    const { reason } = this.tryCatchParse(response.response, this.parseError);
                    if (reason === this.errorMessage) {
                        router.go(routesPaths.chats);
                    } else {
                        window.alert(reason);
                    }
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }

    static checkAuth() {
        UserAPI.request()
            .then((responseData: any) => {
                if (responseData.status === 200) {
                    try {
                        store.set('user', JSON.parse(responseData.responseText));
                    } catch {
                        window.alert('Ошибка извлечения данных');
                    }
                } else {
                    router.go('/');
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }

    static checkNotAuth() {
        UserAPI.request()
            .then((responseData: any) => {
                if (responseData.status === 200) {
                    router.go(routesPaths.chats);
                }
            })
            .catch((error: any) => {
                window.alert(error.reason || 'Ошибка ответа от сервера');
            });
    }
}

