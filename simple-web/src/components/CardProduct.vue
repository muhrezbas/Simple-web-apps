<template>
  <b-card img-src="../assets/doc.png" height="10px" img-alt="Card image" img-left class="mb-3">
    <div style="display: flex;  justify-content: space-between">
      <b-card-title>Card Title</b-card-title>
      <b-card-text style="color: #73d933;font-weight: bold;">35</b-card-text>
    </div>
    <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "CardProduct"
};
</script>

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
    