import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
				<div className="container d-flex justify-content-center">
					<Link to="/AddContact">
						<button
							className="btn btn-primary"
							style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
						>
							Add New Contact
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};