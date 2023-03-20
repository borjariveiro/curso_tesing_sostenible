function capitalizeWord(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export const transformToCamelCase = (text: string): string => {
	const regExp = /[\s_-]/;
	const words = text.split(regExp);
	return words.map((word) => capitalizeWord(word)).join('');
};
