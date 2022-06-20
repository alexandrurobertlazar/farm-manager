import Table from "arrayjs-table";

export class UserService {
    static userData = null;
    static users = new Table([
        { id: 1, name: 'Fernando', email: 'fernando@gmail.com', password: 'fernando123', farms: [1, 3] },
        { id: 2, name: 'Alberto', email: 'alberto@gmail.com', password: 'alberto123', farms: [2] },
        { id: 3, name: 'Roberto', email: 'roberto@gmail.com', password: 'roberto123', farms: [1] },
        { id: 4, name: 'Mariano', email: 'mariano@gmail.com', password: 'mariano123', farms: [3] },
        { id: 5, name: 'Antonio', email: 'antonio@gmail.com', password: 'antonio123', farms: [1, 2, 3] },
    ]);

    login(email, password) {
        let userMatch;
        if ((userMatch = this.users.whereEquals("email", email).whereEquals("password", password).first().length) > 0) {
            UserService.userData = userMatch;
            return userMatch;
        } else {
            UserService.userData = null;
            return false;
        }
    }
}