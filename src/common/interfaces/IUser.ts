export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthday: Date;
    political: boolean;
    political_party: string;
    admin: boolean;
    password: string;
    hash: string;
    created_at: Date;
    updated_at: Date;
}