<template>
  <div style="text-align: left;">
    <h1>{{ msg }}</h1>
    <div v-on:click.prevent="cond=true">
      <CardProduct v-if="cond==false" title="Invoice" :count="this.$store.state.invoiceCount" />
    </div>
    <div>
      <div v-on:click.prevent="cond=false">
        <CardBold
          style="background-color:green;"
          v-if="cond==true"
          title="Invoice"
          :count="this.$store.state.invoiceCount"
        />
      </div>
      <div style="display: flex;">
        <CardProduct
          v-for="condi in this.$store.state.invoice"
          :key="condi.sub"
          v-if="cond==true"
          :title="condi.name"
          :count="condi.count"
        />
        <!-- <CardProduct v-if="cond==true" title="Invoice" :count="this.$store.state.invoiceCount" /> -->
      </div>
    </div>
    <div v-on:click.prevent="condOsf=true">
      <CardProduct v-if="condOsf==false" title="OSF" :count="this.$store.state.osfCount" />
    </div>
    <div>
      <div v-on:click.prevent="condOsf=false">
        <CardBold
          style="background-color:green;"
          v-if="condOsf==true"
          title="OSF"
          :count="this.$store.state.osfCount"
        />
      </div>
      <div style="display: flex;">
        <CardProduct
          v-for="condi in this.$store.state.osf"
          :key="condi.sub"
          v-if="condOsf==true"
          :title="condi.name"
          :count="condi.count"
        />
        <!-- <CardProduct v-if="cond==true" title="Invoice" :count="this.$store.state.invoiceCount" /> -->
      </div>
    </div>
    <CardProduct title="Reksadana" :count="0" />
    <CardProduct title="SBN" :count="0" />
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
      condOsf: false
    };
  },
  components: {
    CardProduct,
    CardBold
  },
  created() {
    this.$store.dispatch("GET_INVOICE");
    this.$store.dispatch("GET_OSF");
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
