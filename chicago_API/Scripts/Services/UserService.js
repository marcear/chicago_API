import RequestService from './RequestService';
import Config from '../Config/Config';

export default class UserService {
    static getUser(user) {
        return RequestService.DoRequest('POST', Config.getBaseUrl() + 'User/GetUser', JSON.stringify(user));
    }

}