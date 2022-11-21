function wrapper() {
	let oldScroll: number;
	return () => {
		const scrollDirection = oldScroll > window.scrollY ? 'UP' : 'DOWN';
		oldScroll = window.scrollY;
		return scrollDirection;
	};
}

export const getScrollDirection = wrapper();
