import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { ErrorPage } from "./ErrorPage";

registerComponent(Title);



document.addEventListener("DOMContentLoaded", function () {
  const page = new ErrorPage();

  renderDOM('app', page);
});
