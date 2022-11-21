export function joinClasses<TT>(...args: TT[]): string {
	return args.join(' ').trim();
}
