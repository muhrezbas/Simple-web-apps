<template>
  <div style="text-align: left;">
    <h1>{{ msg }}</h1>
      <CardProduct
        v-for="prods in this.$store.state.main"
        :key="prods.sub"
        :title="prods.name"
        :count="prods.count"
      />
  
  </div>
</template>

<script>
import CardProduct from "./CardProduct";
import CardBold from "./CardBold";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0,
      cond: false,
      condOsf: false,
      link
    };
  },
  components: {
    CardProduct,
    CardBold
  },
  created() {
    this.$store.dispatch("GET_INVOICE");
    this.$store.dispatch("GET_OSF");
    this.$store.dispatch("GET_MAIN");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-img-left {
  margin: 10px;
  width: 100px;
  height: 120px;
}
.card.mb-3.flex-row {
  height: 150px;
}
.card-title {
  color: #73d933;
  font-weight: bold;
}
</style>
