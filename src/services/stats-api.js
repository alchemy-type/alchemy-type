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

    // const statsData = localStorage.getItem(statsApi.key);
    // return JSON.parse(statsData);
  },
  save(stats) {
    const token = window.sessionStorage.getItem("token");
    console.log(stats);
    fetch(`http://localhost:3000/stats`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        stats
      })
    })
      .then(resp => resp.json())
      .then(console.log);
    let statsGet = statsApi.get();
    if (!statsGet) {
      statsApi.init();
    }
    statsGet.passages += 1;
    statsGet.avgWPM =
      (statsGet.avgWPM * (statsGet.passages - 1) + stats.wpm) /
      statsGet.passages;
    statsGet.avgErrors =
      (statsGet.avgErrors * (statsGet.passages - 1) + stats.errorChars.length) /
      statsGet.passages;
    statsGet = JSON.stringify(statsGet);
    localStorage.setItem(statsApi.key, statsGet);
  },
  init() {
    const stats = statsApi.get();
    if (!stats) {
      const obj = {
        passages: 0,
        avgWPM: 0,
        avgErrors: 0
      };
      const jsonObj = JSON.stringify(obj);
      localStorage.setItem(statsApi.key, jsonObj);
    }
  }
};

export default statsApi;
