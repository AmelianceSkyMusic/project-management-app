import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import { ITasksList } from '~types/boardInterfaces';

export function Item({ id, title, description }: ITasksList) {
	return (
		<Card
			key={id}
			sx={{
				background: 'rgba(255, 255, 255, 0.3)', borderRadius: '32px', border: '1px solid #FFFFFF', padding: '4px 8px',
			}}
		>
			<CardHeader title={title} />
			<CardContent>{description}</CardContent>
		</Card>
	);
}
