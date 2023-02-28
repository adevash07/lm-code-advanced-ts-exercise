import * as readline from "node:readline/promises";
import { EOL } from "os";

export function printNewLine(): void {
	console.log(EOL);
}

export function print(str: string, newLine: boolean = true): void {
	console.log(str);
	if (newLine === true) {
		printNewLine();
	}
}

export function clear(addTopBorder: string): void {
	console.clear();
	if (addTopBorder === "yes") {
		print("------------------------------------");
	}
}

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export async function prompt(prompt: string): Promise<string> {
	const answer = await reader.question(`${prompt}  > `);
	return answer;
}
