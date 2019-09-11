<template>
  <div style="text-align: left;">
    <h1>{{ msg }}</h1>
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
  </div>
</template>

<script>
import CardProduct from "./CardProduct";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    CardProduct
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
