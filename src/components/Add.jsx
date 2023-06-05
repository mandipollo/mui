import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
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
					sx={{
						backgroundColor: "white",
						width: "400px",
						height: "280px",
						borderRadius: 5,
						textAlign: "center",
						padding: 3,
					}}
				>
					<Typography variant="h6" fontWeight={100}>
						Create post
					</Typography>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
