const statsApi = {
  key: "stats",
  get() {
    const token = window.sessionStorage.getItem("token");
    return fetch(`http://localhost:3000/stats`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }).then(resp => resp.json());
  },
  save(stats) {
    const token = window.sessionStorage.getItem("token");
    fetch(`http://localhost:3000/stats`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        stats
      })
    }).then(resp => resp.json());
  }
};

export default statsApi;
