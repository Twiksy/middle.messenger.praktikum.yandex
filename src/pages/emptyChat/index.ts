import { Aside } from "./../../blocks/aside/Aside";
import { registerComponent, renderDOM } from "../../utils";
import { AsideItem } from "../../components/asideItem/AsideItem";
import { Search } from "../../components/search/Search";
import { ChatItem } from "../../components/chatItem/chatItem";
import { LayoutAside } from "../../layouts/AsideLayout/Chat";
import { EmptyChat } from "./EmptyChat";
import { Title } from "../../components/title/Title";
import { LayoutChat } from "../../layouts/chat/Chat";

registerComponent(Aside);
registerComponent(ChatItem);
registerComponent(LayoutChat);
registerComponent(LayoutAside);
registerComponent(Search);
registerComponent(AsideItem);
registerComponent(Title);



document.addEventListener("DOMContentLoaded", function () {
  const page = new EmptyChat();

  renderDOM('app', page);
});
