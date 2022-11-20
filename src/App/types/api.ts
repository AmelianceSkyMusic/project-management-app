export interface IUser {
	name?: string;
	login: string;
	password: string;
}

export interface IUserSignInResponse {
	token?: string;
	statusCode?: string;
	message?: string;
}
