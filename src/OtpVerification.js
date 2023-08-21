import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OtpVerification = ({ otp = "", handleOtpChange }) => {
	return (
		<OtpInput
			value={otp}
			onChange={handleOtpChange}
			numInputs={4}
			renderSeparator={<span style={{ width: "10px" }}></span>}
			containerStyle={{
				justifyContent: "space-evenly",
				width: "100%",
				padding: "35px 10px",
			}}
			renderInput={(props) => (
				<input
					{...props}
					style={{
						textAlign: "center",
						fontSize: "16px",
						width: "45px",
						height: "45px",
						borderRadius: "33px",
						border: "1px solid #C2E4FC",
						background:
							"linear-gradient(180deg, #F4F8FF 0%, rgba(255, 255, 255, 0.00) 100%)",
						boxShadow:
							"0px 72.05278778076172px 52.08387756347656px 0px rgba(229, 229, 245, 0.19), 0px 111.16716766357422px 88.93373107910156px 0px rgba(229, 229, 245, 0.25)",
					}}
				/>
			)}
		/>
	);
};

export default OtpVerification;
