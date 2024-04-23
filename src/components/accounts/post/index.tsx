import axios from "axios";
import { useState } from "react";
import '../../../pages/home/index.css';
import { CustomerType } from "../../customers/type";
import { AddAccountType } from "../type";

const initialAccountState: AddAccountType = {
    balance: null,
    customerId: null,
    username: ''

};


export const AddAccount: React.FC = () => {
    const [account, setAccount] = useState<AddAccountType>(initialAccountState);

    const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAccount({ ...account, [name]: value })
    }

    const findCustomer = async () => {
        try {
            const customer = await axios.get<CustomerType>('http://localhost:8080/customer/getCustomerByUsername',
                {
                    params:
                        { username: account.username }
                });
            console.log("Customer id", customer.data.id.toString);
            return customer.data.id;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const customerId = await findCustomer();
        try {
            const response = await axios.post<AddAccountType>('http://localhost:8080/account/create', {
                ...account, customerId: customerId
            });
            console.log(response);
            setAccount(initialAccountState);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form style={{ display: 'block', height: '150px', width: '200px', margin: '100px 500px 500px 500px', backgroundColor: 'crimson', border: '5px solid black', padding: '50px' }} onSubmit={handleSubmit}>
                <label style={{ color: 'whitesmoke' }}>
                    Balance
                    <input
                        type="balance"
                        name="balance"
                        value={account.balance ?? ''}
                        onChange={handleChangeEvent}
                    />
                </label>
                <label style={{ color: 'whitesmoke' }}>
                    Username
                    <input
                        type="username"
                        name="username"
                        value={account.username}
                        onChange={handleChangeEvent}
                    />
                </label>
                <button className="add-account-submit-button" type="submit">Add</button>
            </form>
        </>
    )
}
