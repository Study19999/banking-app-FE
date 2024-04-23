import axios from 'axios';
import { useEffect, useState } from 'react';
import { AccountType } from '../../../accounts/type';
import { Table } from '../../../table';
import { CustomerType } from '../../type';


export function Customer() {
    const [customerData, setCustomerData] = useState<CustomerType[] & AccountType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllCustomers = async () => {
            try {
                const response = await axios.get<CustomerType[] & AccountType[]>('http://localhost:8080/customer/all');
                setCustomerData(response.data);
            } catch (error) {
                console.error('Error fetching the data: ', error);

            } finally {
                setLoading(false);
            }
        };
        fetchAllCustomers();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    const tableHead = Object.keys(customerData[0]).slice(1, 4)
        .concat(Object.keys(customerData[0]).slice(5, 6))
        .map(head => {
            return head.includes("first") ?
                "First Name" : (
                    head.includes("last") ?
                        "Last Name"
                        :
                        head.charAt(0).toUpperCase() + head.slice(1)
                )
        });

    const tableData = customerData.map(customer => [
        customer.firstName,
        customer.lastName,
        customer.username,
        String(customer ? customer.accounts?.length : '')
    ]);

    return (
        <>
            <h1 style={{ display: 'inline-list-item' }}> All Customers </h1>
            {customerData && customerData.length > 0 ? (
                <Table headers={tableHead} data={tableData} />
            ) : (
                <p> No Data</p>
            )}
        </>
    )
};
