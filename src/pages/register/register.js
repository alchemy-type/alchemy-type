const onSubmitRegister = (user) => {
    fetch('https://alchemy-type-api.herokuapp.com/register', {
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
                console.log(user);
            }
        });
};

export { onSubmitRegister };