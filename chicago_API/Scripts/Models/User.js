export default class User {
    constructor(id = 0, name = '', password = '') {
        this.id = id;
        this.name = name;
        this.password = password;
    }

    static getDefaultUser() {
        return new User();
    }
}