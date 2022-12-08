import { Box, Typography } from '@mui/material';

interface ICardProps {
	heading: string;
	description: string;
	img: string;
	alt: string;
}

export function Card({
	heading, description, img, alt,
}: ICardProps) {
	return (
		<Box sx={{
			padding: '32px',
			background: 'rgb(255, 255, 255, 0.2)',
			borderRadius: '32px',
			boxShadow: '0 2px 16px rgba(0, 0, 0, 0.2)',
			backdropFilter: 'blur(5px)',
			display: 'flex',
			flexDirection: 'column',
			gap: 2,
		}}
		>
			<Box
				component="img"
				sx={{
					height: 88, width: '100%', objectFit: 'cover', borderRadius: '12px',
				}}
				src={img}
				alt={alt}
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
				<Typography variant="h4">
					{heading}
				</Typography>
				<Typography variant="body1">
					{description}
				</Typography>
			</Box>
		</Box>
	);
}
