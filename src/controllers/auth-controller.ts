import { pathNames, routesPaths } from './../utils/Router/routesEnum';
import API, { AuthAPI, SignupData } from "../api/auth-api"
import { fieldType } from '../types/validateTypes';
import store from "../utils/Store/store"
import router from "../utils/Router/Router"
// import { checkLogin, checkPassword, checkEmail, checkName, checkPhone} from "../utils/checkUtilsInput/checkInputs"

export class AuthController {
  private readonly api: AuthAPI

  constructor() {
    this.api = API;
  }

  async signin(data: fieldType) {
    try {
      const response = await this.api.signin(data)
      console.log(data);

      if (response !== 200) {
        router.go("/")
        return
      }
      await this.fetchUser()
      router.go(routesPaths.chats)
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupData) {


    try {
      const response = await this.api.signup(data)
      if (response !== 200) {
        router.go("/")
        return
      }
      await this.fetchUser()
      router.go(routesPaths.chats)
    } catch (e: any) {
      console.error(e.message)
    }
  }

  async fetchUser() {
    const user = await this.api.read()
    store.set("user.data", user)
  }

  async logout() {
    try {
      await this.api.logout()
      router.go("/")
    } catch (e: any) {
      console.error(e.message)
    }
  }
}

export default new AuthController()
