import findById from './find-by-id.js';

const passageApi = {
    key: 'passages',
    save(passage) {
        let passages = passageApi.getAll();
        passages.push(passage);
        const passageData = JSON.stringify(passages);
        localStorage.setItem(passageApi.key, passageData);

        const token = window.sessionStorage.getItem('token');
        if(token) {
            fetch(`http://localhost:3000/passages/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                },
                body: JSON.stringify({
                    passage
                })
            })
                .then(resp => resp.json());
        }
    },
    get(id) {
        const passages = passageApi.getAll();
        return findById(passages, id);
    },
    getAll() {
        const passageData = localStorage.getItem(passageApi.key);
        let passages = JSON.parse(passageData);
        if(!passages) {
            passages = [];
        }
        return passages;
        // const token = window.sessionStorage.getItem('token');
        // fetch(`http://localhost:3000/passages/`, {
        //     method: 'get',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: token
        //     }
        // })
        //     .then(resp => resp.json())
        //     .then(passages => {
        //         console.log(passages);
        //     });


    }
};

export default passageApi;