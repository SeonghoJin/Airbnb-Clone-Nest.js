import axios from 'axios';
var SERVER_PRE = 'http://localhost:3000';
export var vaildId = function (id) {
    if (id.trim() === '')
        return false;
    return true;
};
export var vaildPassword = function (password, repassword) {
    if (password.trim() === '')
        return false;
    if (password.trim() !== repassword.trim())
        return false;
    return true;
};
export var vaildSignUp = function (id, password, repassword) {
    return vaildId(id) && vaildPassword(password, repassword);
};
export var requestSignUp = function (id, password, repassword) {
    axios({
        method: 'post',
        url: SERVER_PRE + '/auth/sign-up',
        data: {
            id: id,
            password: password,
            repassword: repassword,
        },
    });
};
export var requestSignIn = function (id, password) {
    axios.post(SERVER_PRE + "/auth/sign-in", {
        id: id,
        password: password,
    });
};
