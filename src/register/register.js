const form = document.getElementById('register-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const user = {
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('name')
    };

    console.log(user);

    onSubmitRegister(user);
});

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
                console.log(user);
            }
        });
};