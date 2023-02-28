import { addUser } from "../../../api/add_user";
import { fetchAllUsers } from "../../../api/fetch_all_users";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function addUserMenu() {
	clear("yes");

	printNewLine();

	const username = await prompt("Enter username");

	print("📨 Adding user...");

	const status = await addUser(username);

	status && print(`🥳 ${username} added!`);

	const users = await fetchAllUsers();

	print(`🥳 Received ${users.length} users. Here they are:`);

	console.log(users);

	printNewLine();

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return username;
}
