import { LoginController } from './controllers/signUpControl';
import { ErrorPage } from './pages/404/ErrorPage';
import { EmptyChat } from './pages/emptyChat/EmptyChat';
import { Aside } from './blocks/aside/Aside';
import { Messagehandle } from './blocks/messageHandle/messageHandle';
import { Messageheader } from './blocks/messageHeader/messageHeader';
import { AsideItem } from './components/asideItem/AsideItem';
import { Button } from "./components/button/Button";
import { ButtonImg } from './components/button/ButtonImg';
import { ChatItem } from './components/chatItem/chatItem';
import { Input } from './components/input/Input';
import { InputBlock } from './components/input/inputBlock';
import { MessageSettingItem } from './components/messageSettingItem/MessageSettingItem';
import { ProfileItem } from './components/profileItem/ProfileItem';
import { Search } from './components/search/Search';
import { Title } from './components/title/Title';
import { LayoutAside } from './layouts/AsideLayout/Chat';
import { LayoutChat } from './layouts/chat/Chat';
import { SignIn } from './pages/SingIn/SingIn';
import { Register } from './pages/register/Register';
import { registerComponent } from './utils';
import { MainLink } from './components/link/Link';
import { routesPaths } from './utils/Router/routesEnum';
import { router } from "./utils/Router/Router"
import { Profile } from './pages/profile/Profile';
import { ProfileChange } from './pages/profileChange/ProfileChange';
import { ChangePassword } from './pages/changePassword/ChangePassword';
import Store from './utils/Store/store';

registerComponent(Button);
registerComponent(Aside);
registerComponent(AsideItem);
registerComponent(Input);
registerComponent(ProfileItem);
registerComponent(Search);
registerComponent(Title);
registerComponent(MessageSettingItem);
registerComponent(Messagehandle);
registerComponent(Messageheader);
registerComponent(ChatItem);
registerComponent(LayoutChat);
registerComponent(LayoutAside);
registerComponent(InputBlock);
registerComponent(ButtonImg);
registerComponent(MainLink);

declare global {
	interface Window {
		store;
	}
}


window.addEventListener("DOMContentLoaded", async () => {
	const store = Store;
	window.store = store;
	router
		.setUnprotectedPaths(['/', '/signup'])
		.onRoute(LoginController.checkAuth)
		.onNotRoute(LoginController.checkNotAuth)
		.use("/", new SignIn())
		.use(routesPaths.sign, new SignIn())
		.use(routesPaths.reg, new Register())
		.use(routesPaths.chats, new EmptyChat({ chats: store.getState().chatsItems }))
		.use(routesPaths.profile, new Profile())
		.use(routesPaths.setting, new ProfileChange())
		.use(routesPaths.passChange, new ChangePassword())
		.use('*', new ErrorPage())
		.start()
})
