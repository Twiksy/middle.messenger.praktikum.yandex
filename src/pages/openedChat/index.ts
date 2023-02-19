import { registerComponent, renderDOM } from "../../utils";
import { LayoutChat } from "../../layouts/chat/Chat";
import { Messageheader } from "../../blocks/messageHeader/messageHeader";
import { Aside } from "./../../blocks/aside/Aside";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { AsideItem } from "../../components/asideItem/AsideItem";
import { InputBlock } from "../../components/input/inputBlock";
import { ProfileItem } from "../../components/profileItem/ProfileItem";
import { Search } from "../../components/search/Search";
import { MessageSettingItem } from "../../components/messageSettingItem/MessageSettingItem";
import { Messagehandle } from "../../blocks/messageHandle/messageHandle";
import { ChatItem } from "../../components/chatItem/chatItem";
import { LayoutAside } from "../../layouts/AsideLayout/Chat";
import { ButtonImg } from "../../components/button/ButtonImg";
import { OpenedChat } from "./OpenedChat";

registerComponent(Button);
registerComponent(Aside);
registerComponent(AsideItem);
registerComponent(Input);
registerComponent(ProfileItem);
registerComponent(Search);
registerComponent(MessageSettingItem);
registerComponent(Messagehandle);
registerComponent(Messageheader);
registerComponent(ChatItem);
registerComponent(LayoutChat);
registerComponent(LayoutAside);
registerComponent(InputBlock);
registerComponent(ButtonImg);


document.addEventListener("DOMContentLoaded", function () {
  const page = new OpenedChat();

  renderDOM('app', page);
});
