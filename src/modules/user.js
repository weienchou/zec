import Controller from '../libs/controller';

export default class User extends Controller {
    constructor() {
        super();
    }

    bind() {
        zec.hook('user/show', this.show);
    }

    show() {
        zec.log('.................................................')
    }

    auth() {
        return true;
    }
};