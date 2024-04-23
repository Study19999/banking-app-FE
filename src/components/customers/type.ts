import { AccountType } from "../accounts/type"

export type CustomerType = {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    accounts?: AccountType[]
}

export type CreateCustomerType = {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}