import Vue from 'vue'
import Vuex from 'vuex'
import instance from "./myconfig"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: ""
    },
    main: [],
    osfCount: 0,
    osf: [],
    column:"",
    dataProduct: [],
    invoiceCount: 0,
    isLogin: false,
    invoice: [],
    sorting: []
  },
  mutations: {
    SEARCHING(state, payload) {
      state.newSearching = payload
      console.log(this.state.newSearching)
    },
    LOGIN(state) {
      state.isLogin = true

    },
    SET_COLUMN(state, payload) {
      // console.log(payload, "disiniii ni")
      state.column = payload
      console.log(this.state.column,"sorting")
    },
    SET_SORT(state,payload) {
      state.sorting = payload
    },
    SET_MAIN(state, payload) {
      state.main = payload
    },
    SET_DATA_PRODUCT(state, payload) {
      state.dataProduct = payload
      console.log(this.state.dataProduct, "payloadnya")
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
            counting += data[i].count
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
            counting += data[i].count
          }
          context.commit("SET_OSF_COUNT", counting)
          // console.log(counting)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    GET_DATA(context, payload) {
      console.log(payload.split(" ")[0], "data coba split")
      let data1 = payload.split(" ")[0]
      let data2 = payload.split(" ")[1]
      console.log(data2, "data dua")
      if (data2 !== undefined) {
        data1 = data1 + data2
        console.log(data1, "Setelah ditambah")
      }
      if (data1 == "ConventionalOSF" || data1 == "ShariaOSF" || data1 == "ShariaInvoice" || data1 == "ConventionalInvoice") {
        context.commit("SET_SORT", ["A","B+","B"])
        context.commit("SET_COLUMN", "grade")
      }
      else if(data1 == "SBN"){
        context.commit("SET_SORT", ["SBR","ST"])
        context.commit("SET_COLUMN", "type")
      }
      instance
        .get(`/${data1}`, {})
        .then(({ data }) => {
          console.log(data, "disini");
          // context.questions = data;
          context.commit("SET_DATA_PRODUCT", data)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    GET_MAIN(context) {
      instance
        .get("/main", {})
        .then(({ data }) => {
          console.log(data, "disini main data");
          // context.questions = data;
          context.commit("SET_MAIN", data)
          // console.log(context.questions);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
})
