const onSubmitLogin = (user) => {
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
            }
        });
};

const saveAuthToken = token => {
    window.sessionStorage.setItem('token', token);
};

export { onSubmitLogin };