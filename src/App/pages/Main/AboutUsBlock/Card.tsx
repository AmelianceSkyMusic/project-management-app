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
		<>
			<Box
				component="img"
				sx={{ height: 128, width: 128, borderRadius: 10000 }}
				src={img}
				alt={alt}
			/>
			<Typography variant="h4">
				{heading}
			</Typography>
			<Typography variant="body1">
				{description}
			</Typography>
		</>
	);
}
