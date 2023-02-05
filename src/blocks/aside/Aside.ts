import { Block } from "../../utils";
import "./aside.css";
import logo from "../../../static/logo.svg";
import profileIcon from "../../../static/icons/profile.svg";
import chatsIcon from "../../../static/icons/chats.svg";
import settingIcon from "../../../static/icons/setting.svg";
import exitIcon from "../../../static/icons/exit.svg";

interface IItem {
  hoverText: string;
  svgText: string;
}

type ItemsType = Array<IItem>;
const items: ItemsType = [
  { hoverText: "Profile", svgText: profileIcon },
  { hoverText: "Chats", svgText: chatsIcon },
  { hoverText: "Settings", svgText: settingIcon },
  { hoverText: "Exit", svgText: exitIcon }
];

export class Aside extends Block {
  protected render(): string {
    const itemsLi = items.map(
      (i) => {
        return `<li class="messendger__aside-elem">
        {{{AsideItem hoverText="${i.hoverText}" svgText="${i.svgText}"}}}
        </li>`
      }
    );
    return `<aside class="messendger__aside">
    <div class="messendger__aside-top">
      <a href="/" class="messendger__aside-logo">
        <img src="${logo}" alt="logo" />
      </a>
      <nav class="messendger__aside-nav">
        <ul class="messendger__aside-list">
          ${itemsLi.join('')}
        </ul>
      </nav>
    </div>
    <div class="messendger__aside-bottom">
      <div class="btn-reset add-chat__btn" data-text="Add chat">
        <button>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="11" cy="11" r="10.25" stroke="inherit" stroke-width="1.5" ></circle> <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="inherit" stroke-width="1. 5" ></line> <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="inherit" stroke-width="1.5" ></line> </svg>
        </button>
      </div>
    </div>
  </aside>
  `;
  }
}
