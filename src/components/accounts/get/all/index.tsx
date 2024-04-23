import axios from "axios";
import { useEffect, useState } from "react";
import { CustomerType } from "../../../customers/type";
import { Table } from "../../../table";
import { AccountType } from "../../type";


export function Account() {
    const [accountData, setAccountData] = useState<AccountType[]>([]);
    const [customerData, setCustomerData] = useState<CustomerType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAllAccounts = async () => {
            try {
                const response = await axios.get<AccountType[]>('http://localhost:8080/account/all');
                setAccountData(response.data);
            } catch (error) {
                console.error('Error fetching the data: ', error);

            } finally {
                setLoading(false);
            }
        };

        const fetchAllCustomers = async () => {
            try {
                const response = await axios.get<CustomerType[]>('http://localhost:8080/customer/all');
                setCustomerData(response.data);
            } catch (error) {
                console.error('Error fetching the data: ', error);

            } finally {
                setLoading(false);
            }
        };

        const fetchData = async () => {
            Promise.all([fetchAllAccounts(), fetchAllCustomers()]);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    const tableHead = accountData.length > 0 ? [
        "Total ".concat(...Object.keys(accountData[0]).slice(1, 2).map(head => head.charAt(0).toUpperCase() + head.slice(1))),
        "Customer Name",
        "Customer Username",
        "Accounts"
    ] :
        [];

    const tableData = accountData.map(account => {
        const customer = customerData.find(customer => customer.id === account.customerId);
        const totalBalance = customer?.accounts?.reduce((acc, curr) => acc + curr.balance, 0) ?? 0;
        const customerAccounts = customer?.accounts?.length ?? 0;
        const name = customer ? `${customer.firstName} ${customer.lastName}` : ' ';
        const username = customer?.username ?? ' ';

        return [
            String(totalBalance),
            name,
            username,
            String(customerAccounts)
        ];
    });

    return (
        <>
            <h1 style={{ display: 'list-item' }}> All Accounts </h1>
            {accountData && accountData.length > 0 ? (
                <Table headers={tableHead} data={tableData} />

            ) : (
                <p> No Data</p>
            )}
        </>
    )
};
