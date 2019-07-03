const passageApi = {
  key: "passages",
  save(passage) {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      return fetch(`http://localhost:3000/passages/`, {
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

    return fetch(`http://localhost:3000/passages/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }).then(resp => resp.json());
  },
  getAll() {
    const token = window.sessionStorage.getItem("token");
    return fetch(`http://localhost:3000/passages/`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }).then(resp => resp.json());
  }
};

export default passageApi;
