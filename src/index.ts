import { Profile } from './pages/profile/Profile';
import { SignInPage } from './pages/SingIn/SingIn';
import { Aside } from './blocks/aside/Aside';
import { Messagehandle } from './blocks/messageHandle/messageHandle';
import { Messageheader } from './blocks/messageHeader/messageHeader';
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
import { Register } from './pages/register/Register';
import { EmptyChat } from './pages/emptyChat/EmptyChat';
import { OpenedChat } from './pages/openedChat/OpenedChat';
import { ProfileChange } from './pages/profileChange/ProfileChange';
import { ErrorPage } from './pages/404/ErrorPage';
import { Error500 } from './pages/500/Error500';
import { Modals } from './pages/modals/Modals';


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


	const sign = new SignInPage();

	renderDOM(sign);

});


