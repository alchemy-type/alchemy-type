import authApi from '../../services/auth-api.js';

const onSubmitLogin = (user, onProcessLogin) => {
    event.preventDefault();
    fetch('https://alchemy-type-api.herokuapp.com/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
        .then(response => response.json())
        .then(data => {
            if(data.userId && data.success === 'true') {
                authApi.saveAuthToken(data.token);
                onProcessLogin(true);
            } else {
                onProcessLogin(false);
            }
        });
};

export default onSubmitLogin;