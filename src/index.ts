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


	const sign = new SignIn();

	renderDOM(sign);

});


