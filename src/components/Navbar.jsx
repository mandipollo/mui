import React from "react";
import { useState } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	InputBase,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";

import { Mail, Pets, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const IconHolder = styled("div")(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled("div")(({ theme }) => ({
	display: "none",
	gap: "10pxs",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		display: "flex",
	},
}));
const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Mandip dev
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />

				<Search>
					<InputBase placeholder="Search..." />
				</Search>
				<IconHolder>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar
						onClick={e => setOpen(true)}
						sx={{ width: "30", height: "30" }}
						src="https://images.theconversation.com/files/500899/original/file-20221214-461-22jr1l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
					></Avatar>
				</IconHolder>

				<UserBox>
					<Avatar
						onClick={e => setOpen(true)}
						sx={{ width: "30", height: "30" }}
						src="https://images.theconversation.com/files/500899/original/file-20221214-461-22jr1l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
					></Avatar>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				onClose={e => setOpen(false)}
				open={open}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
