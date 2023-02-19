import { Aside } from "./../../blocks/aside/Aside";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { AsideItem } from "../../components/asideItem/AsideItem";
import { ProfileItem } from "../../components/profileItem/ProfileItem";
import { Search } from "../../components/search/Search";
import { MessageSettingItem } from "../../components/messageSettingItem/MessageSettingItem";
import { Messagehandle } from "../../blocks/messageHandle/messageHandle";
import { Messageheader } from "../../blocks/messageHeader/messageHeader";
import { ChatItem } from "../../components/chatItem/chatItem";
import { LayoutChat } from "../../layouts/chat/Chat";
import { LayoutAside } from "../../layouts/AsideLayout/Chat";
import { InputBlock } from "../../components/input/inputBlock";

import { ButtonImg } from "../../components/button/ButtonImg";
import { Profile } from "./Profile";

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


document.addEventListener("DOMContentLoaded", function () {
  const page = new Profile();

  renderDOM('app', page);
});
