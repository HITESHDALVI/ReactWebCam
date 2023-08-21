import React, { useState } from "react";
import Webcam from "react-webcam";
import ModalPopup from "./ModalPopup";
import styled from "@emotion/styled";
import verifyMatch from "./VerifyMatch.svg";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
	width: 400,
	height: 400,
	facingMode: "user",
};
const StyledContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	overflow: hidden;
	background: #282c3a9c;
	${"" /* width: 700px; */}
	backdrop-filter: blur(10px);
	border: 1px solid #ffffff80;
`;

const Profile = ({ picture = "", setPicture, modal = false, setModal }) => {
	const webcamRef = React.useRef(null);
	const capture = React.useCallback(() => {
		const pictureSrc = webcamRef.current.getScreenshot();

		setPicture(pictureSrc);
	});
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h2 className="mb-5 text-center">
				React Photo Capture using Webcam Examle
			</h2>
			<div>
				{picture == "" ? (
					<Webcam
						audio={false}
						height={450}
						ref={webcamRef}
						width={450}
						screenshotFormat="image/jpeg"
						videoConstraints={videoConstraints}
					/>
				) : (
					<img src={picture} style={{ width: "350px", height: "450px" }} />
				)}
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
				}}
			>
				{picture != "" ? (
					<>
						<button
							onClick={(e) => {
								e.preventDefault();
								setPicture("");
							}}
							className="btn btn-primary"
							style={{
								display: "flex",
								borderRadius: "37px",
								border: "1px solid #2865F6",
								cursor: "pointer",
								padding: "18px 143px",
								width: "175px",
								padding: "16px 40px",
								justifyContent: "center",
								alignItems: "center",
								gap: "10px",
								background: "transparent",
								outline: "none",
								color: "#2865F6",
								textAlign: "center",
								fontSize: "16px",
								fontStyle: "normal",
								fontWeight: "400",
								lineHeight: "normal",
							}}
						>
							Retake
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								// capture();
								setModal(true);
							}}
							className="btn btn-danger"
							style={{
								display: "flex",
								borderRadius: "37px",
								background: "#2865F6",
								width: picture ? "400px" : "380px",
								padding: "18px 143px",
								width: picture ? "175px" : "380px",
								padding: "16px 40px",
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
								gap: "10px",
								border: "none",
								outline: "none",
								color: "#FFF",
								textAlign: "center",
								fontSize: "16px",
								fontStyle: "normal",
								fontWeight: "400",
								lineHeight: "normal",
							}}
						>
							Continue
						</button>
					</>
				) : (
					<button
						onClick={(e) => {
							e.preventDefault();
							capture();
						}}
						className="btn btn-danger"
						style={{
							display: "flex",
							borderRadius: "37px",
							background: "#2865F6",
							width: picture ? "400px" : "380px",
							padding: "18px 143px",
							width: picture ? "175px" : "380px",
							padding: "16px 40px",
							justifyContent: "center",
							alignItems: "center",
							gap: "10px",
							border: "none",
							outline: "none",
							color: "#FFF",
							cursor: "pointer",
							textAlign: "center",
							fontSize: "16px",
							fontStyle: "normal",
							fontWeight: "400",
							lineHeight: "normal",
						}}
					>
						Capture
					</button>
				)}
				{modal && (
					<ModalPopup open={modal} close={() => setModal(false)}>
						<StyledContainer>
							<div
								style={{
									color: "#242938",
									height: "400px",
									width: "400px",
									// borderRadius: "20px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
									background: "#242938",
									padding: "25px 15px",
								}}
							>
								<button
									onClick={() => setModal(false)}
									style={{
										display: "flex",
										alignItems: "flex-end",
										justifyContent: "flex-end",
										position: "absolute",
										top: "15px",
										right: "25px",
									}}
								>
									X
								</button>
								<img src={verifyMatch} height="275px" />
								<div
									style={{
										marginTop: "-40px",
									}}
								>
									<h2
										style={{
											marginBlockStart: "0",
											marginBlockEnd: "0",
											textAlign: "center",
											color: "white",
											margin: "10px",
										}}
									>
										Photo doesn’t match
									</h2>
									<p
										style={{
											marginBlockStart: "0",
											marginBlockEnd: "0",
											textAlign: "center",
											color: "white",
										}}
									>
										We regret to inform that the photo you clicked doesn’t match
										with your official documents
									</p>
								</div>
							</div>{" "}
						</StyledContainer>
					</ModalPopup>
				)}
			</div>
		</div>
	);
};
export default Profile;
