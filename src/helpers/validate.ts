type RuleType = {
	rule: RegExp,
	message: string
}
interface IRules {
	loginRules: RuleType,
	passwordRules: RuleType,
	nameRules: RuleType,
	emailRules: RuleType,
	phoneRules: RuleType,
	displayNameRules: RuleType,
	emptyRules: RuleType,
}
const rules: IRules = {
	loginRules: {
		rule: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/,
		message: "Only latin letters and symbols _ - , 3-20 letters"
	},
	passwordRules: {
		rule: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,40}$/,
		message: "Password must contain one capital letter or number"
	},
	nameRules: {
		rule: /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z]+$/,
		message: "Letters and symbols _ - , start with uppercase"
	},
	emailRules: {
		rule: /.+@.+\..+/i,
		message: "Email must has @, not valid Email"
	},
	phoneRules: {
		rule: /^[+]?[0-9]{10,15}$/,
		message: "Start width a +, 10-15 numbers"
	},
	displayNameRules: {
		rule: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/,
		message: "Only latin letters and symbols _ - , 3-20 letters"
	},
	emptyRules: {
		rule: /^$/,
		message: "Can't be empty"
	},
}

function validateField(val: string, exp: RegExp) {
	return exp.test(val);
}
export const validate = (input: HTMLInputElement): string => {
	let errorText = "";
	switch (input.name) {
		case 'email':
			if (!validateField(input.value, rules.emailRules.rule)) {
				errorText = rules.emailRules.message
			}
			break;
		case "login":
			if (!validateField(input.value, rules.loginRules.rule)) {
				errorText = rules.loginRules.message
			}
			break;
		case "first_name":
			if (!validateField(input.value, rules.nameRules.rule)) {
				errorText = rules.nameRules.message
			}
			break;

		case "second_name":
			if (!validateField(input.value, rules.nameRules.rule)) {
				errorText = rules.nameRules.message
			}
			break;
		case "display_name":
			if (!validateField(input.value, rules.displayNameRules.rule)) {
				errorText = rules.displayNameRules.message
			}
			break;
		case "password":
			if (!validateField(input.value, rules.passwordRules.rule)) {
				errorText = rules.passwordRules.message
			}
			break;
		case "password_confirm":
			if (!validateField(input.value, rules.passwordRules.rule)) {
				errorText = rules.passwordRules.message
			}
			break;
		case "phone":
			if (!validateField(input.value, rules.phoneRules.rule)) {
				errorText = rules.phoneRules.message
			}
			break;
		case "message":
			if (validateField(input.value, rules.emptyRules.rule)) {
				errorText = rules.emptyRules.message
			}
			break;
		default:
			errorText = "";

	}
	return errorText;
};


