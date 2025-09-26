import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const ContactCard = () => {
    const [contact, setContact] = useState([]);

    const getContact = () => {
        fetch("https://playground.4geeks.com/contact/agendas/veronica")
            .then((response) => response.json())
            .then((data) => setContact(data.contacts))
    }

    useEffect(() => {
        getContact();
    }, [])
    return (
        <>
            {contact.map((item) => {
                return (
                <div key={item.id} className="contactCard border border-tertiary">
                    <div className="row my-2">
                        <div className="col mx-3 my-auto">
                            <img src={rigoImageUrl} className="img-fluid rounded-circle" alt="Rigo" />
                        </div>
                        <div className="col-6">
                            <div className="fullName">
                                {`${item.name}`}
                            </div>
                            <div className="address">
                                <i class="fa-solid fa-location-dot"></i>
                                {`${item.address}`}
                            </div>
                            <div className="phoneNumber">
                                <i class="fa-solid fa-phone-flip"></i>
                                {`${item.phone}`}
                            </div>
                            <div className="email">
                                <i class="fa-solid fa-envelope"></i>
                                {`${item.email}`}
                            </div>
                        </div>
                        <div className="col d-flex justify-content-evenly mx-3 mt-2">
                            <button className="botoncito"><i class="fa-solid fa-pen-fancy"></i></button>
                            <button className="botoncito"><i class="fa-solid fa-trash-can"></i></button>

                        </div>
                    </div>
                </div>
            )})}

        </>
    );
};