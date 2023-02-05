import { Block } from "../../utils";
export class Profile extends Block {
	protected render(): string {
		return `
    {{#LayoutAside}}
<div class="messendger__profile profile">
	<div class="profile__content">
		<form action="">
			<div class="profile__top">
				<div class="profile__avatar">
					<input type="file" name="avatar" class="profile__avatar-input" />
					<img
						class="fake-img"
						src="../../../static/fakeImg.png"
						alt="fake-img"
					/>
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
						<a class="profile-item__label" href="#">Change profile</a>
					</div>
					<div class="profile__row">
						<a class="profile-item__label" href="#">Change password</a>
					</div>
					<div class="profile__row">
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
