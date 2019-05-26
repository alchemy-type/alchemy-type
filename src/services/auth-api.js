const authApi = {
    checkAuth(onLoadUser) {
        const token = window.sessionStorage.getItem('token');
        if(token) {
            fetch('http://localhost:3000/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    onLoadUser(data);
                })
                .catch('Error checking authorization');
        }
    },
    saveAuthToken(token) {
        window.sessionStorage.setItem('token', token);
        window.location = './index.html';
    },
    logout() {
        sessionStorage.removeItem('token');
    }
};

export default authApi;