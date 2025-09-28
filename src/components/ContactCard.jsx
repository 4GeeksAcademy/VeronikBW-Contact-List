import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const ContactCard = () => {
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/veronica/contacts/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error("No se puede eliminar el contacto");
            }
            const updatedContacts = store.contacts.filter((item) => item.id !== id);
            dispatch({ type: 'SET_CONTACTS', payload: updatedContacts });
        } catch (error) {
            alert(error.message);
        }
    };
    const { store, dispatch } = useGlobalReducer();

    const getContact = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/veronica");
            const data = await response.json();
            if (!data.contacts) {
                await fetch("https://playground.4geeks.com/contact/agendas/veronica", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        agenda_slug: "veronica"
                    })
                });
                return getContact();
            }
            dispatch({type: 'SET_CONTACTS', payload:data.contacts})
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getContact();
    }, []);
    
    return (
        <>
            {store.contacts.map((item) => {
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
                                    <i className="fa-solid fa-location-dot"></i>
                                    {`${item.address}`}
                                </div>
                                <div className="phoneNumber">
                                    <i className="fa-solid fa-phone-flip"></i>
                                    {`${item.phone}`}
                                </div>
                                <div className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    {`${item.email}`}
                                </div>
                            </div>
                            <div className="col d-flex justify-content-evenly mx-3 mt-2">
                                <Link className="botoncito" to={`/edit-contact/${item.id}`}><i className="fa-solid fa-pen-fancy"></i></Link>
                                <button className="botoncito" onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};