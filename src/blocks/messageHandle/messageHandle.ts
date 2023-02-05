import { Block } from "../../utils";
import arrow from "../../../static/icons/arrow.svg";
import addMedia from "../../../static/icons/addMedia.svg";
import faile from "../../../static/icons/faile.svg";
import location from "../../../static/icons/location.svg";
import { validate } from "../../helpers/validate";
import './messageHandle.css'
import { fieldType, fieldsType } from "../../types/validateTypes";
export class Messagehandle extends Block {
	static componentName = 'Messagehandle';
	protected getStateFromProps() {
		this.state = {
			onValidate: (e: Event) => {
				e.preventDefault();
				const target = e.target as HTMLInputElement;
				const errorText = validate(target);
				const parent = target.parentElement as HTMLElement
				parent.dataset.error = errorText;
			},
			onSubmit: (e: Event) => {
				e.preventDefault();
				const inputs = Object.entries(this.refs)
				let errors = 0;
				const fields: Array<fieldType> = []
				inputs.forEach((inp) => {
					const input = inp[1]
					console.log(input);

					const errorText = validate(input)
					inp[1].parentNode.dataset.error = errorText;
					if (errorText !== '') {
						errors += 1
					}
					const inpObj: fieldType = {
						name: input.name,
						value: input.value,
					}
					fields.push(inpObj)
				})
				if (errors === 0) {
					console.log(fields);
				}
			}
		};
	}
	protected render(): string {
		return `
    <div class="messages-handle">
			<div class="messages-handle__wrapper">
		<div class="messages-handle__media">
			<div class="messages-handle__media-add btn-reset">
				<button class="">
					<svg width="28" height="30" viewBox="0 0 28 30" fill="inherit" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66058 12.5L12.6822 4.92389L13.556 5.8667L6.53438 13.4428L5.66058 12.5Z" fill="inherit" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99059 15.0141L15.0122 7.43793L15.886 8.38074L8.86439 15.9569L7.99059 15.0141Z" fill="inherit" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9422 20.3567L19.9638 12.7806L20.8376 13.7234L13.816 21.2995L12.9422 20.3567Z" fill="inherit" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2722 22.8708L22.2938 15.2946L23.1676 16.2374L16.146 23.8136L15.2722 22.8708Z" fill="inherit" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2722 22.8709C12.8485 25.486 8.92768 25.4954 6.51476 22.8919C4.10183 20.2884 4.11056 16.0579 6.53426 13.4428L5.66046 12.5C2.75202 15.6381 2.74154 20.7148 5.63706 23.839C8.53257 26.9632 13.2376 26.9518 16.146 23.8137L15.2722 22.8709Z" fill="inherit" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9638 12.7806L20.8376 13.7234C23.0997 11.2826 23.1079 7.3341 20.8558 4.90417C18.6037 2.47424 14.9443 2.48303 12.6821 4.92381L13.5559 5.86662C15.3333 3.94887 18.2086 3.94196 19.9781 5.85119C21.7476 7.76042 21.7412 10.8628 19.9638 12.7806Z" fill="inherit" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99084 15.0144C6.37505 16.7578 6.36922 19.5782 7.97784 21.3138C9.58646 23.0495 12.2004 23.0432 13.8162 21.2998L12.9424 20.357C11.8113 21.5774 9.98157 21.5818 8.85554 20.3668C7.72951 19.1518 7.73358 17.1776 8.86464 15.9572L7.99084 15.0144Z" fill="inherit" ></path> </svg>
				</button>
			</div>
			<div class="messages-handle__media-content cloud-window">
	
					<ul class="cloud-window__list">
          	<li class="cloud-window__elem">
						{{{MessageSettingItem
							src="${addMedia}"
							alt="add-icon"
							settingName="Фото или Видео"
						}}}
            </li>
			  		<li class="cloud-window__elem">
							{{{MessageSettingItem
							src="${faile}"
							alt="add-icon"
							settingName="File"
						}}}
             
            </li>
			  		<li class="cloud-window__elem">
							{{{MessageSettingItem
							src="${location}"
							alt="add-icon"
							settingName="Location"
						}}}
              
            </li>
			  	</ul>
					
			</div>
		</div>
		<div class="messages-handle__input" data-error>
			{{{Input addClass="messages-handle__input-text" ref="message" type="text" placeholder="Enter message" name="message" onBlur=onValidate onInput=onValidate onFocus=onValidate}}}
			{{{ButtonImg addClass="btn-reset messages-handle__input-btn" src="${arrow}" onClick=onSubmit}}}
			</div>
		</div>
	</div>
</div>
`;
	}
}
