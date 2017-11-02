import RequestService from './RequestService';
import Config from '../Config/Config';

export default class UserService {
    static getUser(user) {
        return RequestService.DoRequest('GET', Config.getBaseUrl() + 'User/GetUser',user);
    }

}