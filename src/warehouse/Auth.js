import axios from "axios";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
  asso: (state) => state.asso,
};

const actions = {
  async loginAccountUser({ commit }, user) {
    commit("auth_request");
    let resUser = await axios.post("http://localhost:5000/api/users/login", user);
    // let resAsso = await axios.post("http://localhost:5000/api/assos/login", asso)
    if (resUser.data.success) {
      const token = resUser.data.token;
      const user = resUser.data.user;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
      return resUser
    } 
    // if (resAsso.data.success) {
    //   const token = resAsso.data.token;
    //   const user = resAsso.data.asso;

    //   localStorage.setItem("token", token);
    //   axios.defaults.headers.common["Authorization"] = token;
    //   commit("auth_success", token, user);
    //   return resAsso;
    // }
  },

  async loginAccountAsso({commit}, asso) {
    commit("auth_request");
    let resAsso = await axios.post("http://localhost:5000/api/assos/login", asso)
    if (resAsso.data.success) {
      const token = resAsso.data.token;
      const user = resAsso.data.asso;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
      return resAsso;
    }
  },

  async registerUserParticular({ commit }, userData) {
    commit("register_request");
    let res = await axios.post(
      "http://localhost:5000/api/users/register",
      userData
    );
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  async registerAsso({ commit }, assoData) {
    commit("register_request");
    let res = await axios.post(
      "http://localhost:5000/api/assos/register",
      assoData
    );
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  async getUser({commit}) {
    commit('profile_request')
    let res = await axios.get('http://localhost:5000/api/users/profile')
    commit('user_profile', res.data.user)
    return res
  },

  async logout({ commit }) {
    await localStorage.removeItem("token");
    commit("logout");
    delete axios.defaults.headers.common["Authorization"];
    return;
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    (state.token = token), (state.user = user), (state.status = "sucess");
  },
  register_request(state) {
    state.status = "loading";
  },
  register_success(state) {
    state.status = "success";
  },
  logout(state) {
    state.status = '',
    state.token = '',
    state.user = ''
  },
  profile_request(state) {
    state.status = 'loading'
  },
  user_profile(state, user) {
    state.user = user
  }
};

export default {
  state,
  actions,
  getters,
  mutations,
};
