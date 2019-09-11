<template>
  <b-card img-src="../assets/doc.png" img-alt="Card image" img-left class="mb-3">
    <div v-if="count > 0" style="display: flex;  justify-content: space-between">
      <b-card-title>{{title}}</b-card-title>

      <b-card-text style="color: white;font-weight: bold;">{{count}}</b-card-text>
    </div>
    <div v-else>
      <b-card-title>{{title}}</b-card-title>
    </div>
    <b-card-text style="color: white">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. . All the Lorem Ipsum generators on the Internet tend to repeat predefined.</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    title: String,
    count: String,
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
.card-img-left {
  margin: 10px;
  height: 120px;
}
.card.mb-3.flex-row {
  height: 150px;
}
.card-title {
  color: white;
  font-weight: bold;
}
</style>
    