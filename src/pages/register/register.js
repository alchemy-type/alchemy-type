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
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                window.location = './login.html';
            }
        });
};

export { onSubmitRegister };