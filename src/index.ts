import { Aside } from './blocks/aside/Aside';
import { Messagehandle } from './blocks/messageHandle/messageHandle';
import { Messageheader } from './blocks/messageHeader/messageHeader';
import { StartPageComponent } from './blocks/startPage/StartPageComponent';
import { AsideItem } from './components/asideItem/AsideItem';
import { Button } from "./components/button/Button";
import { ButtonImg } from './components/button/ButtonImg';
import { ChatItem } from './components/chatItem/chatItem';
import { Input } from './components/input/Input';
import { InputBlock } from './components/input/inputBlock';
import { MainLink } from './components/mainLink/MainLink';
import { MessageSettingItem } from './components/messageSettingItem/MessageSettingItem';
import { ProfileItem } from './components/profileItem/ProfileItem';
import { Search } from './components/search/Search';
import { Title } from './components/title/Title';
import { LayoutAside } from './layouts/AsideLayout/Chat';
import { LayoutChat } from './layouts/chat/Chat';
import { registerComponent, renderDOM } from './utils';


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
registerComponent(MainLink);
registerComponent(ButtonImg);

document.addEventListener("DOMContentLoaded", function () {


	const startPage = new StartPageComponent({
		links: [
			{ linkText: "Sign In Page", href: "./pages/singIn.html" },
			{ linkText: "Registration Page", href: "./pages/register.html" },
			{ linkText: "Empty Chat", href: "./pages/emptyChat.html" },
			{ linkText: "Opened Chat", href: "./pages/openedChat.html" },
			{ linkText: "Profile", href: "./pages/profile.html" },
			{ linkText: "Change Profile", href: "./pages/profileChange.html" },
			{ linkText: "Change Password", href: "./pages/changePassword.html" },
			{ linkText: "404", href: "./pages/404.html" },
			{ linkText: "500", href: "./pages/500.html" },
			{ linkText: "Modal", href: "./pages/modals.html" },
		],
	});

	renderDOM('app', startPage);

});


