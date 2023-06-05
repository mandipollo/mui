import {
	Box,
	ListItem,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from "@mui/material";

import { Home } from "@mui/icons-material";
import PagesIcon from "@mui/icons-material/Pages";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import React from "react";

const Sidebar = () => {
	return (
		<Box sx={{ display: { xs: "none", sm: "block" } }} padding={2} flex={1}>
			<Box position="fixed">
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary="Homepage"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#pages">
							<ListItemIcon>
								<PagesIcon />
							</ListItemIcon>
							<ListItemText primary="Pages"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#groups">
							<ListItemIcon>
								<GroupsIcon />
							</ListItemIcon>
							<ListItemText primary="Groups"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#marketplace">
							<ListItemIcon>
								<StorefrontIcon />
							</ListItemIcon>
							<ListItemText primary="Marketplace"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#friends">
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="Friends"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#settings">
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="Settings"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#profile">
							<ListItemIcon>
								<AccountBoxIcon />
							</ListItemIcon>
							<ListItemText primary="Profile"></ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#mode">
							<ListItemIcon>
								<ModeNightIcon />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
