import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AddAccount } from "../../components/accounts/post";
import { CreateCustomer } from "../../components/customers/post";
import '../home/index.css';

function HomePage() {
    const [showForm, setShowForm] = useState<Boolean>(false);
    const [showCreateCustomerBtn, setShowCreateCustomerBtn] = useState<boolean>(false);
    const [showAddAccountBtn, setShowAddAccountBtn] = useState<boolean>(false);
    const navigate = useNavigate();


    const toggleCreateCustomerForm = () => {
        setShowCreateCustomerBtn(!showCreateCustomerBtn);
        setShowAddAccountBtn(false);
        setShowForm(!showForm);
        navigate("/customers/create")
    }

    const toggleAddAccountForm = () => {
        setShowAddAccountBtn(!showAddAccountBtn);
        setShowCreateCustomerBtn(false);
        setShowForm(!showForm);
        navigate("/accounts/create")
    }


    return (
        <>
            {!showForm &&
                <>
                    <br />
                    <br />
                    <button className="home-page-create-customer-button" onClick={toggleCreateCustomerForm}>
                        <strong>Add Customer</strong>
                    </button>
                    <br />
                    <br />
                    <button className="home-page-add-account-button" onClick={toggleAddAccountForm}>
                        <strong>Add Account</strong>
                    </button>
                </>
            }
            {showForm && <CreateCustomer />}
            {showForm && <AddAccount />}

        </>
    )
};
export default HomePage;
