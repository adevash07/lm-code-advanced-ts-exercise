export const states = {
	MENU: "MENU",

	SEND_MESSAGE: "SEND_MESSAGE",

	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",

	ADD_USER: "ADD_USER",

	UNKNOWN: "UNKNOWN",
	CABBAGE: "CABBAGE",
} as const;

export type StateType = typeof states[keyof typeof states];