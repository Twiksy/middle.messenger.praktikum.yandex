
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { InputBlock } from "../../components/input/inputBlock";
import { ProfileItem } from "../../components/profileItem/ProfileItem";
import { registerComponent, renderDOM } from "../../utils";
import { ChangePassword } from "./ChangePassword";


registerComponent(Button);
registerComponent(ProfileItem);
registerComponent(Input)
registerComponent(InputBlock)



document.addEventListener("DOMContentLoaded", function () {
  const page = new ChangePassword();

  renderDOM('app', page);
});
