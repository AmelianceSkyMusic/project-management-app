import {
	Menu,
	MenuItem, MenuProps,
} from '@mui/material';

interface IMenuProps extends MenuProps {
	menuItems: [string, () => void][];
	onClose: () => void;
	open: boolean;
}

export function PopoverMenu({
	menuItems, onClose, anchorEl, open, ...props
}: IMenuProps) {
	return (
		<Menu
			{...props}
			anchorEl={anchorEl}
			open={open}
			onClose={onClose}
			sx={{
				'& .MuiPaper-root': { borderRadius: '12px' },
			}}
		>
			{menuItems.map((item) => <MenuItem key={item[0]} onClick={item[1]}>{item[0]}</MenuItem>)}
		</Menu>
	);
}
