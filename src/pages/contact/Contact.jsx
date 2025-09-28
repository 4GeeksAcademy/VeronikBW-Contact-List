
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import "./contact.css"
import { useNavigate } from "react-router-dom";
import { ContactCard } from "../../components/ContactCard.jsx";

export const Contact = () => {

	const { store, dispatch } = useGlobalReducer()

	const navigate = useNavigate()

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9 mx-auto">
						<div className="d-flex justify-content-end my-3">
							<button 
							type="button" 
							className="btn btn-success btn-icon-size"
							onClick={() => navigate("/add")}
							>Add new contact</button>
						</div>
						<ContactCard />
					</div>
				</div>
			</div>
		</>
	);
}; 