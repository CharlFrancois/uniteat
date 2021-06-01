import axios from "axios";

const state = {
  product: {},
  status: "",
};

const getters = {
  autheState: (state) => state.status,
  product: (state) => state.product
};

const actions = {
  async addProduct({ commit }, productData) {
    commit("add_product_request");
    let res = await axios.post(
      "http://localhost:5000/api/products/add-product",
      productData
    );
    if (res.data.success !== undefined) {
      commit("add_product_success");
    }
    return res;
  },
  async getProduct({commit}) {
    commit('product_request')
    let res = await axios.get('http://localhost:5000/api/products/get-products')
    commit('product_profile', res.data.product)
    return res
  }
};

const mutations = {
  add_product_request(state) {
    state.status = "loading";
  },
  add_product_success(state) {
    state.status = "success";
  },
  product_request(state) {
    state.status = 'loading'
  },
  user_profile(state, product) {
    state.product = product
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
