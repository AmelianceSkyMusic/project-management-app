export const arrToStr = (arr: string[]) => arr.join(',');

export const queryGenerator = (list: string[], userId: string, search?: string) => {
	const result = [];
	if (list[0]) result.push(`ids${arrToStr(list)}`);
	if (userId) result.push(`userId=${userId}`);
	if (search) result.push(`search=${userId}`);
	return result.join('&');
};
