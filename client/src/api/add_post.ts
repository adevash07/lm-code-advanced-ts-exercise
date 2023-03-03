import { baseUrl } from "./base_url";

export async function addPost(title: string, content: string, author: string) {
	try {
		const result = await fetch(baseUrl + "/api/posts/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ title: title, content: content, author: author }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
