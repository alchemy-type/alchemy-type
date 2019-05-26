const onSubmitLogin = (user, onProcessLogin) => {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
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
                saveAuthToken(data.token);
                onProcessLogin(true);
            } else {
                onProcessLogin(false);
            }
        });
};

const checkAuth = (onLoadUser) => {
    const token = window.sessionStorage.getItem('token');
    if(token) {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                onLoadUser(data);
            })
            .catch('Error checking authorization');
    }
};

const saveAuthToken = token => {
    window.sessionStorage.setItem('token', token);
    window.location = './index.html';
};

export { onSubmitLogin, checkAuth };