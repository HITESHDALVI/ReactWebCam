import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const ModalPopup = ({ open, close, children }) => {
	return (
		<>
			<Modal
				open={open}
				onClose={close}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<>{children}</>
			</Modal>
		</>
	);
};

export default ModalPopup;
