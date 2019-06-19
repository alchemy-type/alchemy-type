const onSubmitRegister = (user) => {
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            name: user.name
        })
    })
        .then(res => {
            res.status === 200 ? window.location = './login.html' : null;
        });
};

export { onSubmitRegister };