import { addPost } from "../../../api/add_post";
import { fetchAllPosts } from "../../../api/fetch_all_posts";

import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function addPostMenu() {
	clear("yes");

	printNewLine();

	const title = await prompt("Enter title");
	const content = await prompt("Enter content");
	const username = await prompt("Enter username");

	console.log(title, content, username);
	print("📨 Adding post...");

	const status = await addPost(title, content, username);

	console.log(status);

	status && print(`🥳 ${title} added!`);

	const posts = await fetchAllPosts();

	print(`🥳 Received ${posts.length} posts. Here they are:`);

	printNewLine();

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return title;
}
