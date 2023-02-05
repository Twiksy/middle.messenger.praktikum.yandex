import { Aside } from "./../../blocks/aside/Aside";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { AsideItem } from "../../components/asideItem/AsideItem";
import { ProfileItem } from "../../components/profileItem/ProfileItem";
import { LayoutAside } from "../../layouts/AsideLayout/Chat";
import { InputBlock } from "../../components/input/inputBlock";
import { ProfileChange } from "./ProfileChange";

registerComponent(Button);
registerComponent(Aside);
registerComponent(AsideItem);
registerComponent(Input);
registerComponent(ProfileItem);
registerComponent(Title);
registerComponent(LayoutAside);
registerComponent(InputBlock);

document.addEventListener("DOMContentLoaded", function () {
  const page = new ProfileChange();

  renderDOM(page);
});
