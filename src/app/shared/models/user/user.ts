export class LoginUser {
    username: string;
    password: string;
}

export class CreateUser {
    id?: number;
    username: string;
    prenom: string;
    nom: string;
    password: string;
    email: string;

}
export class User {
    id: number;
    username: string;
    nom: string;
    prenom: string;
    password: string;
    email: string;

}