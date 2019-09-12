<template>
  <div>
    <router-link
      v-if="title=='SBN' || title=='Reksadana' || title=='Conventional Invoice'|| title=='Sharia Invoice' || title=='Conventional OSF'|| title=='Sharia OSF' "
      :to="title"
    >
      <div>
        <b-card img-src="../assets/doc.png" img-alt="Card image" img-left class="mb-3">
          <div v-if="count > 0" style="display: flex;  justify-content: space-between">
            <b-card-title>{{title}}</b-card-title>

            <b-card-text style="color: #73d933;font-weight: bold;">{{count}}</b-card-text>
          </div>
          <div v-else>
            <b-card-title>{{title}}</b-card-title>
          </div>
          <b-card-text
            style="color: #817E92"
          >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. . All the Lorem Ipsum generators on the Internet tend to repeat predefined.</b-card-text>
        </b-card>
      </div>
    </router-link>
    <div v-else v-on:click.prevent="cond=true" style="cursor: pointer;">
      <div v-if="cond==false">
        <b-card img-src="../assets/doc.png" img-alt="Card image" img-left class="mb-3">
          <div v-if="count > 0" style="display: flex;  justify-content: space-between">
            <b-card-title>{{title}}</b-card-title>

            <b-card-text style="color: #73d933;font-weight: bold;">{{count}}</b-card-text>
          </div>
          <div v-else>
            <b-card-title>{{title}}</b-card-title>
          </div>
          <b-card-text
            style="color: #817E92"
          >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. . All the Lorem Ipsum generators on the Internet tend to repeat predefined.</b-card-text>
        </b-card>
      </div>
    </div>
    <div style="cursor: pointer;">
      <div v-on:click.prevent="cond=false">
        <CardBold style="background-color:green;" v-if="cond==true" :title="title" :count="count" />
      </div>
      <div v-if="title=='Invoice Financing'" style="display: flex; cursor: pointer;">
        <CardProduct
          v-for="condi in this.$store.state.invoice"
          :key="condi.sub"
          v-show="cond==true"
          :title="condi.name"
          :count="condi.count"
        />
        <!-- <CardProduct v-if="cond==true" title="Invoice" :count="this.$store.state.invoiceCount" /> -->
      </div>
      <div v-if="title=='OSF Financing'" style="display: flex; cursor: pointer;">
        <CardProduct
          v-for="condi in this.$store.state.osf"
          :key="condi.sub"
          v-show="cond==true"
          :title="condi.name"
          :count="condi.count"
        />
        <!-- <CardProduct v-if="cond==true" title="Invoice" :count="this.$store.state.invoiceCount" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import CardBold from "./CardBold";
export default {
  data() {
    return {
      counter: 0,
      cond: false
    };
  },
  components: {
    CardBold
  },
  methods :{

  },
  name: "CardProduct",
  props: {
    title: String,
    count: String
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
  color: #73d933;
  font-weight: bold;
}
</style>
    