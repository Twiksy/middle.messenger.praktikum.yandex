import { Title } from "../../components/title/Title";
import { registerComponent, renderDOM } from "../../utils";
import { Error500 } from "./Error500";

registerComponent(Title);



document.addEventListener("DOMContentLoaded", function () {
  const page = new Error500();

  renderDOM(page);
});
