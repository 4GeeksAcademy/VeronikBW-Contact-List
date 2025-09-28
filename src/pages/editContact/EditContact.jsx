 import { useNavigate, useParams } from "react-router-dom"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useGlobalReducer from "../../hooks/useGlobalReducer"

export const EditContact = () => {

    const { store, dispatch } = useGlobalReducer();
    const [currentContact, setCurrentContact] = useState({});
    const { id } = useParams();

   
    const searchContact = () => {
        const contact = store.contacts.find((item) => item.id == id)
        setCurrentContact(contact)
    }

    useEffect(() => {
        searchContact()
    }, [store.contacts, id])

    const handleChange = (event) => {
        setCurrentContact({
            ...currentContact,
            [event.target.name]: event.target.value
        });
    };


    const navigate = useNavigate();

    const handleEditContact = async (event) => {
        event.preventDefault();
        try {

            const response = await fetch(`https://playground.4geeks.com/contact/agendas/veronica/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentContact)
            });
            if (!response.ok) {
                throw new Error("No se pudo actualizar el contacto en la API");
            }
            const updatedContacts = store.contacts.map((item) =>
                item.id == id ? { ...item, ...currentContact } : item
            );
            dispatch({ type: 'SET_CONTACTS', payload: updatedContacts });
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mx-auto mt-3">
                        <form onSubmit={handleEditContact}>
                            <legend className="formLegend d-flex justify-content-center">Edit your contact</legend>
                            <div class="mb-3">
                                <label for="inputName" type="text" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={currentContact.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="inputName" />
                            </div>
                            <div class="mb-3">
                                <label for="InputEmail" type="text" className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={currentContact.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="InputEmail" />
                            </div>
                            <div class="mb-3">
                                <label for="inputPhone" type="text" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={currentContact.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="inputPhone" />
                            </div>
                            <div class="mb-3">
                                <label for="inputAddress" type="text" className="form-label">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={currentContact.address}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="inputAddress" />
                            </div>
                            <div className="d-grid gap-2">
                                <button
                                    class="btn btn-primary"
                                    type="submit"
                                >save</button>
                            </div>
                            <Link to="/">or get back to contacts</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}