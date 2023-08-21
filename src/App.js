import { useEffect, useState } from "react";
import "./App.css";
import OtpVerification from "./OtpVerification";
import Profile from "./Profile";
export default function App() {
	const [otp, setOtp] = useState("");
	const [reSend, setReSend] = useState(true);
	const [seconds, setSeconds] = useState(60);
	const [picture, setPicture] = useState("");
	const [modal, setModal] = useState(false);
	const handleOtpChange = (e) => {
		console.log({ e });
		setOtp({ e });
		console.log({ otp });
	};

	useEffect(() => {
		if (seconds > 0) {
			const timerId = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds - 1);
			}, 1000);

			return () => {
				clearInterval(timerId);
			};
		}
	}, [seconds]);
	const handleResend = (e) => {
		e.preventDefault();
		setReSend(false);
	};
	console.log({ otp });
	return (
		<div
			className="container mt-5"
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{otp.length < 4 && (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						width: "50%",
					}}
				>
					<div>
						<h3>{`<`} Aadhaar Verification</h3>
						<p
							style={{
								color: "#505050",
								fontSize: "14px",
								fontStyle: "normal",
								fontWeight: "400",
								lineHeight: "28px",
							}}
						>
							For Authentification, you will receive an OTP on your Aadhaar
							linked mobile number. Please enter the OTP here.
						</p>
					</div>

					<OtpVerification otp={otp} handleOtpChange={setOtp} />
					<di style={{ fontSize: "14px" }}>
						{reSend && `Didn’t receive? ${" "}`}
						{seconds == 0 ? (
							<>
								{reSend && (
									<button
										style={{
											background: "transparent",
											outline: "none",
											border: "none",
											color: "#2865F6",
											textAlign: "center",
											fontSize: "14px",
											fontStyle: "normal",
											fontWeight: "600",
											lineHeight: "normal",
											cursor: "pointer",
										}}
										onClick={handleResend}
									>
										Resend
									</button>
								)}
							</>
						) : (
							`Resend in 00.${seconds}`
						)}
					</di>
				</div>
			)}
			{otp.length == 4 && (
				<Profile
					picture={picture}
					setPicture={setPicture}
					modal={modal}
					setModal={setModal}
				/>
			)}
		</div>
	);
}
