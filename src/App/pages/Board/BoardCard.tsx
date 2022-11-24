import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

interface IBoardCardProps {
  title: string;
  description: string;
}
export function BoardCard({ title, description }: IBoardCardProps) {
	return (
		<Card sx={{
			width: '300px', height: '150px', background: 'transparent', borderRadius: '32px', border: '1px solid black', padding: '4px 8px',
		}}
		>
			<CardHeader
				action={(
					<IconButton aria-label="settings" className="material-symbols-rounded">
						{/* <span className="material-symbols-rounded"> */}
						more_vert
						{/* </span> */}
					</IconButton>
				)}
				title={title}
			/>
			<CardContent sx={{ padding: '8px', height: '100px' }}>
				<Typography variant="body2">{description}</Typography>
			</CardContent>
		</Card>
	);
}
