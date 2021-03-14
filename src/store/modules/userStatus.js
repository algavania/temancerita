const state = {
    hasLogin: false,
    username: '',
};


const getters = {
    getStatus: (state) => state
};

const actions = {
    setUser({ commit }, username) {
        let state = { hasLogin: true, username: username };
        localStorage.setItem('hasLogin', state.hasLogin);
        localStorage.setItem('username', state.username);
        commit('setStatus', state);
    },
    clearUser({ commit }) {
        let state = { hasLogin: false, username: '' };
        localStorage.removeItem('hasLogin');
        localStorage.removeItem('username');
        commit('setStatus', state);
    },
    checkStatus({ commit }) {
        let state;
        if (localStorage.getItem('hasLogin') == 'true') {
            state = { hasLogin: true, username: localStorage.getItem('username') };
        } else {
            state = { hasLogin: false, username: '' };
        }
        commit('setStatus', state);
    }
};

const mutations = {
    setStatus: (state, status) => {
        state.hasLogin = status.hasLogin;
        state.username = status.username;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}