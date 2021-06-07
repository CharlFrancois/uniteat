import axios from "axios";

const state = {
  products: {},
  status: "",
};

const getters = {
  autheState: (state) => state.status,
  products: (state) => state.products
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
    commit('products_list', res.data)
    return res
  },

  async updateProduct({commit}, bookedUpdate) {
    commit("update_product_request")
    let res = await axios.post("http://localhost:5000/api/products/book-product", bookedUpdate)
    if (res.data.success !== undefined) {
      commit("update_product_success");
    }
    return res;
  }
};

const mutations = {
  add_product_request(state) {
    state.status = "loading";
  },
  add_product_success(state) {
    state.status = "success";
  },
  update_product_request(state) {
    state.status = "loading";
  },
  update_product_success(state) {
    state.status = "success";
  },
  product_request(state) {
    state.status = 'loading'
  },
  products_list(state, product) {
    state.products = product
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
