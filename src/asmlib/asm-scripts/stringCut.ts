export function stringCut(string: string, limit: number, ending = '...'): string {
	if (string.length > limit) {
		return `${string.substring(0, limit)}${ending}`;
	}
	return string;

}
