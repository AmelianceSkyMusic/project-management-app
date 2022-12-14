import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

const resources = {
	en: {
		translation: {
			mainTitle: 'Project Management App',
			heroText: 'The best TOP app. Better than trello and others, and others',
			lang: 'EN',
			login: 'Log in',
			signup: 'Sign up',
			signupQuestion: 'Already have an account?',
			signupAdd: 'Create an account',
			loginQuestion: 'Don\'t have an account?',
			enter: 'Enter',
			email: 'E-mail address',
			required: 'The field is so empty! Enter more characters!',
			emailPattern: 'Incorrect e-mail address entered!',
			password: 'Password',
			passwordPattern: 'Please use numbers only!',
			passwordMinLength: 'The minimum password length is 12 characters.',
			name: 'Name',
			namePattern: 'Please use latin letters only!',
			nameMinLength: 'The minimum field length is 2 characters.',
			registration: 'Registration',
			boards: 'Boards',
			boardAdd: 'Create board',
			change: 'Change',
			delete: 'Delete',
			titleMinLength: 'The minimum field length is 3 characters.',
			boardName: 'Board name',
			create: 'Create',
			board: 'Board',
			columnAdd: 'Create column',
			columnName: 'Column name',
			descriptionMinLength: 'The minimum field length is 10 characters.',
			taskName: 'Task name',
			taskDescription: 'Task description',
			school: {
				title: 'is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013.',
				p1: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence.',
				p2: 'The mentors and trainers of our school are front-end and javascript developers from different companies and countries.',
			},
			dev1: {
				name: 'Nataly',
				description: 'Created boards and tasks, drag and drop, and translation',
			},
			dev2: {
				name: 'Igor',
				description: 'Fully described the operation of all API functions',
			},
			dev3: {
				name: 'Rajab',
				description: 'Team lead. Created the design and described the general state',
			},
		},
	},
	ua: {
		translation: {
			mainTitle: 'Програма керування проектами',
			heroText: 'Супер топовий додаток. Кращий від будь яких трелло і т. д. і т. п.',
			lang: 'УКР',
			login: 'Увійти',
			signup: 'Створити аккаунт',
			signupQuestion: 'Вже є аккаунт?',
			signupAdd: 'Створити аккаунт',
			loginQuestion: 'Немає аккаунту?',
			enter: 'Вхід',
			email: 'Адреса електронної пошти',
			required: 'Поле таке пусте! Введіть більше символів!',
			emailPattern: 'Невірно введена адреса електронної пошти!',
			password: 'Пароль',
			passwordPattern: 'Будь ласка, використовуйте тільки цифри!',
			passwordMinLength: 'Мінімальна довжина пароля 12 символів.',
			name: 'Ім\'я:',
			namePattern: 'Будь ласка, використовуйте тільки латинські літери!',
			nameMinLength: 'Мінімальна довжина поля 2 символи.',
			registration: 'Реєстрація',
			boards: 'Дошки',
			boardAdd: 'Створити дошку',
			change: 'Змінити',
			delete: 'Видалити',
			titleMinLength: 'Мінімальна довжина поля 3 символи',
			boardName: 'Назва дошки',
			create: 'Створити',
			board: 'Дошка',
			columnAdd: 'Створити колонку',
			columnName: 'Назва колонки',
			descriptionMinLength: 'Мінімальна довжина 10 символів',
			taskName: 'Назва задачі',
			taskDescription: 'Опис задачі',
			school: {
				title: 'це безкоштовна навчальна програма для спільноти, яка проводиться спільнотою розробників The Rolling Scopes з 2013 року.',
				p1: 'Навчатися в RS School може кожен, незалежно від віку, професійної діяльності та місця проживання.',
				p2: 'Ментори та тренери нашої школи – front-end та javascript розробники з різних компаній та країн.',
			},
			dev1: {
				name: 'Наталя',
				description: 'Створила дошки і таски, перетягування і переклад',
			},
			dev2: {
				name: 'Ігор',
				description: 'Повністю описав роботу всіх АПІ функцій',
			},
			dev3: {
				name: 'Раджаб',
				description: 'Тім-лід. Створив дизайн і описав загальний стейт',
			},
		},
	},
};
i18n
	.use(initReactI18next)
	.init({
		debug: false,
		resources,
		lng: 'ua',
		interpolation: {
			escapeValue: false,
		},
	});
export default i18n;
