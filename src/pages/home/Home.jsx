import rigoImageUrl from "../../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import "./home.css"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9 mx-auto">
						<div className="d-flex justify-content-end my-3">
							<button type="button" className="btn btn-success btn-icon-size">Add new contact</button>
						</div>
						<div className="contactCard border border-tertiary">
							<div className="row my-2">
								<div className="col mx-3 my-auto">
									<img src={rigoImageUrl} className="img-fluid rounded-circle" alt="Rigo" />
								</div>
								<div className="col-6">
									<div className="fullName">
										Rigo Botsito
									</div>
									<div className="address">
										<i class="fa-solid fa-location-dot"></i>
										Por aquí
									</div>
									<div className="phoneNumber">
										<i class="fa-solid fa-phone-flip"></i>
										777
									</div>
									<div className="email">
										<i class="fa-solid fa-envelope"></i>
										rigotcito@gmail.com
									</div>
								</div>
								<div className="col d-flex justify-content-between mx-3 mt-2">
									<button className="botoncito"><i class="fa-solid fa-pen-fancy"></i></button>
									<button className="botoncito"><i class="fa-solid fa-trash-can"></i></button>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}; 