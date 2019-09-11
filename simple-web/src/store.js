import Vue from 'vue'
import Vuex from 'vuex'
import instance from "./myconfig"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: ""
    },
    answers: [],
    detailsNow: "",
    osfCount: 0,
    osf: [],
    joined: false,
    invoiceCount: 0,
    isLogin: false,
    invoice: [],
    newSearching: ""
  },
  mutations: {
    SEARCHING(state, payload) {
      state.newSearching = payload
      console.log(this.state.newSearching)
    },
    LOGIN(state) {
      state.isLogin = true

    },
    SET_DETAIL(state, payload) {
      // console.log(payload, "disiniii ni")
      state.detailsNow = payload
    },
    LOGOUT(state) {
      state.user.username = ""
      state.isLogin = false
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_QUESTION(state, payload) {
      state.questions = payload
      // console.log(this.state.questions, "payloadnya")
    },
    SET_OSF(state, payload) {
      state.osf = payload
      console.log(this.state.osf, "ini osf")
    },
    SET_OSF_COUNT(state, payload) {
      state.osfCount = payload
    },
    SET_INVOICE(state, payload) {
      state.invoice = payload
      console.log(this.state.invoice, "ini invoice")
    },
    SET_INVOICE_COUNT(state, payload) {
      state.invoiceCount = payload
    }
  },
  actions: {
    GET_INVOICE(context) {
      instance
        .get("/invoice", {})
        .then(({ data }) => {
          console.log(data, "disini");
          // context.questions = data;
          context.commit("SET_INVOICE", data)
          let counting = 0
          for (let i = 0; i < data.length; i++) {
            counting+=data[i].count
          }
          context.commit("SET_INVOICE_COUNT", counting)
          // console.log(counting)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    GET_OSF(context) {
      instance
        .get("/osf", {})
        .then(({ data }) => {
          console.log(data, "disini");
          // context.questions = data;
          context.commit("SET_OSF", data)
          let counting = 0
          for (let i = 0; i < data.length; i++) {
            counting+=data[i].count
          }
          context.commit("SET_OSF_COUNT", counting)
          // console.log(counting)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    GET_ANSWERS(context, payload) {
      console.log(payload, "answer")
      instance
        .get(`/answers/${payload}`, {})
        .then(({ data }) => {
          console.log(data, "disini");
          // context.questions = data;
          context.commit("SET_ANSWERS", data)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    GET_QUESTION(context) {
      instance
        .get("/questions", {})
        .then(({ data }) => {
          console.log(data, "disini");
          // context.questions = data;
          context.commit("SET_QUESTION", data)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
})
