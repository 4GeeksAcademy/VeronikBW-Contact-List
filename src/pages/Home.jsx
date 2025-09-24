import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-9 mx-auto">
						<div className="d-flex justify-content-end my-3">
							<button type="button" className="btn btn-success">Add new contact</button>
						</div>
						<div className="contactCard border border-secondary">
							<div className="row">
								<div className="col">
									<img src={rigoImageUrl} className="img-fluid rounded-circle" alt="Rigo" />
								</div>
								<div className="col-6">
									<div className="fullName">
										Rigo Botsito
									</div>
									<div className="adress">
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
								<div className="col">
									<i class="fa-solid fa-pen-fancy"></i>
									<i class="fa-solid fa-trash-can"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}; 