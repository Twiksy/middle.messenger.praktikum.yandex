import { pathNames } from './../../utils/Router/routesEnum';
import { Block } from "../../utils";
import router from "../../utils/Router/Router"
import { routesPaths } from '../../utils/Router/routesEnum';
export class Profile extends Block {
	static componentName = 'Profile';
	protected getStateFromProps() {
		this.state = {
			onSetting: (e: Event) => {
				e.preventDefault()
				router.go(routesPaths.setting)
			},
			onPassChange: (e: Event) => {
				e.preventDefault()
				router.go(routesPaths.passChange)
			},
			onSign: (e: Event) => {
				e.preventDefault()
				router.go(routesPaths.sign)
			}
		};
	}


	protected render(): string {
		return `
    {{#LayoutAside}}
<div class="messendger__profile profile">
	<div class="profile__content">
		<form action="">
			<div class="profile__top">
				<div class="profile__avatar">
					<input type="file" name="avatar" class="profile__avatar-input" />
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z" fill="#CDCDCD"/></svg>
				</div>
				<div class="profile__name">Иван</div>
			</div>
			<div class="profile__body">
			<div class="profile__fields">
			<div class="profile__row">
				{{{ProfileItem label="Email" readonly="true" ref="Email" type="text" value="pochta@yandex.ru" name="email" onBlur=onValidate onInput=onValidate }}}
			</div>
			<div class="profile__row">
				{{{ProfileItem label="Login" readonly="true" ref="Login" type="text" value="ivanivanov" name="login" onBlur=onValidate onInput=onValidate }}}
			</div>
			<div class="profile__row">
				{{{ProfileItem label="Name" readonly="true" ref="Name" type="text" value="Ivan" name="first_name" onBlur=onValidate onInput=onValidate }}}
			</div>
			<div class="profile__row">
				{{{ProfileItem label="Surname" readonly="true" ref="Surname" type="text" value="Ivanov" name="second_name" onBlur=onValidate onInput=onValidate }}}
			</div>
			<div class="profile__row">
				{{{ProfileItem label="Nickname" readonly="true" ref="Nickname" type="text" value="Ivanches" name="display_name" onBlur=onValidate onInput=onValidate }}}
			</div>
			<div class="profile__row">
				{{{ProfileItem label="Phone" readonly="true" ref="Phone" type="text" value="+79099673030" name="phone" onBlur=onValidate onInput=onValidate }}}
			</div>
		</div>
				<div class="profile__handle">
					<div class="profile__row">
						{{{MainLink className="profile-item__label" onClick=onSetting innerLink="Change profile" }}}
					</div>
					<div class="profile__row">
						{{{MainLink className="profile-item__label" onClick=onPassChange innerLink="Change password" }}}
						<a class="profile-item__label" href="#"></a>
					</div>
					<div class="profile__row">
						{{{MainLink className="profile-item__label" onClick=onSign innerLink="Change password" }}}
						<a class="profile-item__label" href="#">Logout</a>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
{{/LayoutAside}}
    `;
	}
}
