import { baseUrl } from "./base_url";

export async function addUser(username: string): Promise<boolean> {
	try {
		const result = await fetch(baseUrl + "/api/users/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(username),
		});
		const status: unknown = await result.json();

		if (typeof status === "boolean") {
			return status;
		}

		return false;
	} catch (e) {
		console.error(e);
		return false;
	}
}