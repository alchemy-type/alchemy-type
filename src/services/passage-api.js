const passageApi = {
  key: "passages",
  save(passage) {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch(`https://alchemy-type-api.herokuapp.com/passages/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({
          passage
        })
      }).then(resp => resp.json());
    }
  },
  get(id) {
    const token = window.sessionStorage.getItem("token");

    return fetch(`https://alchemy-type-api.herokuapp.com/passages/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }).then(resp => resp.json());
  },
  getAll() {
    const token = window.sessionStorage.getItem("token");
    return fetch(`https://alchemy-type-api.herokuapp.com/passages/`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }).then(resp => resp.json());
  }
};

export default passageApi;
