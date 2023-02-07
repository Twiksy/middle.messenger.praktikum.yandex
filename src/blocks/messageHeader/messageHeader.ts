import { Block } from "../../utils";
import "./messageHeader.css";
import addIcon from "../../../static/icons/addIcon.svg";
import deleteIcon from "../../../static/icons/deleteIcon.svg";

interface IMessageheader {
	userName: string;
	src?: string;
}

export class Messageheader extends Block<IMessageheader> {
	static componentName = 'Messageheader';
	constructor({ userName, src }: IMessageheader) {
		super({ userName, src });
	}
	protected render(): string {
		return `
    <div class="messages-header">
	<div class="messages-header__wrapper">
		<div class="messages-header__user">
			<div class="messages-header__user-photo">
				{{#if src}}
					<img src="{{src}}" alt="user photo" />
				{{else}}
					<span class="messages-header__photo-fake"></span>
				{{/if}}
			</div>
      
			<div class="messages-header__user-name">{{userName}}</div>
		</div>
		<div class="messages-header__settings">
			<div class="btn-reset messages-header__settings-btn active">
				<button>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<div class="messages-header__settings-content cloud-window">
				<ul class="cloud-window__list">
					<li class="cloud-window__elem">
						{{{MessageSettingItem
							src="${addIcon}"
							alt="add-icon"
							settingName="Добавить пользователя"
						}}}
					</li>
					<li class="cloud-window__elem">
						{{{MessageSettingItem
							src="${deleteIcon}"
							alt="delete-icon"
							settingName="Удалить пользователя"
						}}}
					</li>
					<li class="cloud-window__elem">
						{{{MessageSettingItem
              src="${deleteIcon}"
							alt="delete-icon"
							settingName="Удалить чат"
						}}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;
	}
}
