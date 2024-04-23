export type AccountType = {
    id: number | null,
    balance: number,
    customerId: number | null,
    username?: string
}


export type AddAccountType = {
    balance: number | null,
    customerId: number | null,
    firstName?: string,
    lastName?: string,
    username?: string,
}