import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken";
import baseUrl from "../../utils/baseUrl";
import { handleLogin } from "../../utils/auth";

const INITIAL_USER = {
	identifier: "",
	password: "",
};

const LoginForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `${baseUrl}/auth/local`;
			const payload = {
				identifier: user.identifier,
				password: user.password,
			};
			const response = await axios.post(url, payload);
			const token = jwt.sign(
				{ user: response.data },
				process.env.JWT_SECRET,
				{}
			);

			setUser(INITIAL_USER);

			handleLogin(token);
		} catch (error) {
			const { data } = error.response.data;
			// console.log(error);
			if (data) {
				toast.error(data[0].messages[0].message);
			}
		}
	};

	return (
		<div>
			<form id="contactForm" onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-lg-12 ">
						<div className="form-group">
							<label>Email</label>
							<input
								type="text"
								className="form-control"
								name="identifier"
								type="email"
								value={user.identifier}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="col-12">
						<div className="form-group">
							<label>Password</label>
							<input
								className="form-control"
								name="password"
								type="password"
								value={user.password}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="col-lg-12 form-condition">
						<div className="agree-label">
							<input type="checkbox" id="chb1" />
							<label htmlFor="chb1">
								Remember Me
								<a
									className="forget"
									href="forgot-password.html"
								>
									Forgot My Password?
								</a>
							</label>
						</div>
					</div>

					<div className="col-lg-12 col-md-12 text-center">
						<button type="submit" className="default-btn">
							Log In Now
						</button>
					</div>

					<div className="col-12">
						<div className="sub-title">
							<span>Or</span>
						</div>
					</div>

					<div className="login-with-account">
						<ul>
							<li>
								<a
									href="https://www.facebook.com/"
									target="_blank"
								>
									<i className="ri-facebook-line"></i>
									Login with Facebook
								</a>
							</li>

							<li>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i className="ri-google-line"></i>
									Login with Google
								</a>
							</li>
						</ul>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
