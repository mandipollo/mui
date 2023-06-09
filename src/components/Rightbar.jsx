import React from "react";
import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
	},
	{
		img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
	},
];

const Rightbar = () => {
	return (
		<Box
			sx={{ display: { xs: "none", sm: "block" } }}
			padding={2}
			flex={2}
			alignItems="center"
		>
			<Box position="fixed" width={300}>
				<Typography variant="h6" fontWeight={100}>
					Online friends
				</Typography>
				<AvatarGroup max={5}>
					<Avatar
						alt="Remy Sharp"
						src="data:image/jpeg;base64,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"
					/>
					<Avatar
						alt="Travis Howard"
						src="data:image/jpeg;base64,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"
					/>
					<Avatar
						alt="Cindy Baker"
						src="data:image/jpeg;base64,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"
					/>
					<Avatar
						alt="Agnes Walker"
						src="data:image/jpeg;base64,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"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
					/>
				</AvatarGroup>

				<Typography variant="h6" fontWeight={100}>
					Latest photos
				</Typography>
				<ImageList cols={3} rowHeight={100} gap={5}>
					{itemData.map(item => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant="h6" fontWeight={100}>
					Recent conversations
				</Typography>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Rightbar;
