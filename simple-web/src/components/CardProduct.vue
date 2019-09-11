<template>
  <b-card img-src="../assets/doc.png" height="10px" img-alt="Card image" img-left class="mb-3">
    <div style="display: flex;  justify-content: space-between">
      <b-card-title>{{title}}</b-card-title>
      <b-card-text style="color: #73d933;font-weight: bold;">{{count}}</b-card-text>
    </div>
    <b-card-text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. . All the Lorem Ipsum generators on the Internet tend to repeat predefined.</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    title: String,
    count: String
  }
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
    