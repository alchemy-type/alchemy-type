const onSubmitRegister = user => {
  fetch("https://alchemy-type-api.herokuapp.com/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name
    })
  }).then(res => {
    res.status === 200 ? (window.location = "./login.html") : null;
  });
};

export { onSubmitRegister };
