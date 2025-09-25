import { Form } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import "./addContact.css"

export const AddContact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mx-auto mt-3 border border-danger">
                        <form>
                            <legend className="formLegend d-flex justify-content-center">Add a new contact</legend>
                            <div class="mb-3">
                                <label for="inputName" type= "text" className="form-label">Full Name</label>
                                <input 
                                type="email" 
                                className="form-control"
                                placeholder="John Snow" 
                                id="inputName"/>
                            </div>
                            <div class="mb-3">
                                <label for="InputEmail" type= "text" className="form-label">Email</label>
                                <input 
                                type="email" 
                                className="form-control"
                                placeholder="johnsnow@winterfell.com" 
                                id="InputEmail"/>
                            </div>
                            <div class="mb-3">
                                <label for="inputPhone" type= "text" className="form-label">Phone</label>
                                <input 
                                type="email" 
                                className="form-control"
                                placeholder="777-777-777" 
                                id="inputPhone"/>
                            </div>
                            <div class="mb-3">
                                <label for="inputAddress" type= "text" className="form-label">Address</label>
                                <input 
                                type="email" 
                                className="form-control"
                                placeholder="Winterfell Main Castle 2nd Floor N.4" 
                                id="inputAddress"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};