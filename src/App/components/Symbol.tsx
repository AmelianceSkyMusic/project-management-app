import { SvgIcon, SvgIconProps } from '@mui/material';

export function Symbol({ children, ...props }: SvgIconProps) {
	return (
		<SvgIcon {...props} viewBox="0 0 48 48" sx={{ width: '24px', height: '24px' }}>
			{children}
		</SvgIcon>
	);
}
