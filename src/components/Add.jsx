import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ApprovalIcon from "@mui/icons-material/Approval";

const StyledModal = styled(Modal)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "10px",
});
const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				onClick={e => setOpen(true)}
				title="Add"
				sx={{
					position: "fixed",
					bottom: "20px",
					left: { xs: "calc(50% - 25px)", md: 30 },
				}}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				onClose={e => setOpen(false)}
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					bgcolor={"background.default"}
					color={"text.primary"}
					sx={{
						width: "400px",
						height: "280px",
						borderRadius: 5,
						textAlign: "center",
						padding: 3,
					}}
				>
					<Typography variant="h6" color="gray" fontWeight={300}>
						Create post
					</Typography>
					<UserBox>
						<Avatar
							sx={{ width: 30, height: 30 }}
							src="data:image/jpeg;base64,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"
						/>
						<Typography fontWeight={500} variant="span">
							Jonathan dee
						</Typography>
					</UserBox>
					<TextField
						fullWidth
						id="standard-multiline-static"
						multiline
						rows={4}
						placeholder="whats on your mind?"
						variant="standard"
					/>
					<Stack direction="row" m={1} gap={3}>
						<EmojiEmotionsIcon color="primary" />
						<InsertPhotoIcon color="error" />
						<VideoCameraBackIcon color="secondary" />
						<PersonAddIcon color="success" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<ApprovalIcon />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
