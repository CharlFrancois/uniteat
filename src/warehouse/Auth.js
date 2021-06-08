import axios from "axios";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  asso: {},
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
    if (resUser.data.success) {
      const token = resUser.data.token;
      const user = resUser.data.user;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_user_success", token, user);
      return resUser
    } 
  },

  async loginAccountAsso({commit}, asso) {
    commit("auth_request");
    let resAsso = await axios.post("http://localhost:5000/api/assos/login", asso)
    if (resAsso.data.success) {
      const token = resAsso.data.token;
      const asso = resAsso.data.asso;

      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_asso_success", token, asso);
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

  async editUserEmail({commit}, userUpdate) {
    commit("register_request")
    let res = await axios.post("http://localhost:5000/api/users/edit-user-email", userUpdate)
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  async editUserPassword({commit}, userUpdate) {
    commit("register_request")
    let res = await axios.post("http://localhost:5000/api/users/edit-user-password", userUpdate)
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  async forgetPassword({commit}, userUpdate) {
    commit("register_request")
    let res = await axios.post("http://localhost:5000/api/users/forget-password", userUpdate)
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  async getAsso({commit}) {
    commit('profile_request')
    let res = await axios.get('http://localhost:5000/api/assos/profile')
    commit('asso_profile', res.data.asso)
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
  auth_user_success(state, token, user) {
    (state.token = token), (state.user = user), (state.status = "sucess");
  },
  auth_asso_success(state, token, asso) {
    (state.token = token), (state.asso = asso), (state.status = "sucess");
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
  },
  asso_profile(state, asso) {
    state.asso = asso
  }
};

export default {
  state,
  actions,
  getters,
  mutations,
};
