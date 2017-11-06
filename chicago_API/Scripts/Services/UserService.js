import RequestService from './RequestService';
import Config from '../Config/Config';

export default class UserService {
    static getUser(user) {
        return RequestService.DoRequest('POST', Config.getBaseUrl() + 'User/GetUser', JSON.stringify(user));
    }

    static isUserValid() {
        //Implementar logica para determinar si el usuario es valido--> es admin
        return true;
    }

}