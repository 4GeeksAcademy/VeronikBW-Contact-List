import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import "./addContact.css"
import { useState } from "react";


export const AddContact = () => {
    const { dispatch, store } = useGlobalReducer();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();

    const addNewContact = async (event) => {
        event.preventDefault();
        if (form.name && form.email && form.phone && form.address) {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/veronica/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'SET_CONTACTS',
                    payload: [...store.contacts, data]
                });
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    address: ""
                });
                navigate("/");
            } else {
                console.log(data);
            }
        } else {
            console.log("Faltan datos");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mx-auto mt-3">
                        <form onSubmit={addNewContact}>
                            <legend className="formLegend d-flex justify-content-center">Add a new contact</legend>
                            <div class="mb-3">
                                <label for="inputName" type="text" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="John Snow"
                                    id="inputName" />
                            </div>
                            <div class="mb-3">
                                <label for="InputEmail" type="text" className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="johnsnow@winterfell.com"
                                    id="InputEmail" />
                            </div>
                            <div class="mb-3">
                                <label for="inputPhone" type="text" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="777-777-777"
                                    id="inputPhone" />
                            </div>
                            <div class="mb-3">
                                <label for="inputAddress" type="text" className="form-label">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Winterfell Main Castle 2nd Floor N.4"
                                    id="inputAddress" />
                            </div>
                            <div class="d-grid gap-2">
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
};