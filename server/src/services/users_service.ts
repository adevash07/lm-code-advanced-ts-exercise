import { User, UserArray } from "../types/posts.types";

const UserDatabase: UserArray = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return UserDatabase;
}

export function getUserById(id: string): User | undefined {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return UserDatabase.find((user) => user.id === id);
}

export function addUser(user: string): boolean {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	const newUser = {
		name: user,
		id: (UserDatabase.length + 1).toString(),
		creationDate: new Date(),
	};

	UserDatabase.push({ ...newUser });

	if (UserDatabase.find((u) => u.id === newUser.id) === undefined) {
		return false;
	}

	return true;
}
