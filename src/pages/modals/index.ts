import { Modals } from './Modals';
import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';



registerComponent(Title);
registerComponent(Input);
registerComponent(Button);



document.addEventListener("DOMContentLoaded", function () {
  const page = new Modals();

  renderDOM('app', page);
});
