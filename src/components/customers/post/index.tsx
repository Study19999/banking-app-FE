import axios from "axios";
import { useState } from "react";
import '../../../pages/home/index.css';
import { CreateCustomerType } from "../type";

const initialCustomerState: CreateCustomerType = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
};

export const CreateCustomer: React.FC = () => {
    const [customer, setCustomer] = useState<CreateCustomerType>(initialCustomerState);

    const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post<CreateCustomerType>('http://localhost:8080/customer/create', { ...customer })
            .then(function (response) {
                console.log(response);

            }).catch(function (error) {
                console.error(error);

            });

        setCustomer(initialCustomerState);
    }

    return (
        <>
            <form style={{ display: 'block', height: '250px', width: '200px', margin: '100px 500px 700px 800px', backgroundColor: 'crimson', border: '5px solid black', padding: '50px' }} onSubmit={handleSubmit}>

                <label style={{ color: 'whitesmoke' }}>
                    First Name
                    <input
                        type="firstName"
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleChangeEvent}
                    />
                </label>
                <label style={{ color: 'whitesmoke' }}>
                    Last Name
                    <input
                        type="lastName"
                        name="lastName"
                        value={customer.lastName}
                        onChange={handleChangeEvent}
                    />
                </label>
                <label style={{ color: 'whitesmoke' }} >
                    Username
                    <input
                        type="username"
                        name="username"
                        value={customer.username}
                        onChange={handleChangeEvent}
                    />
                </label>
                <label style={{ color: 'whitesmoke' }}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={customer.password}
                        onChange={handleChangeEvent}
                    />
                </label>
                <button className="create-customer-submit-button" type="submit">Create</button>
            </form>
        </>
    )
}
