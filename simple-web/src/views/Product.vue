<template>
  <div class="home">
    <Header />
    <ListProduct style="margin-top : 100px;" msg="PRODUCT" cond="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListProduct from "@/components/ListProduct.vue"
import Header from "./Header";

export default {
  name: "home",
  components: {
    ListProduct,
    Header
  }
};
</script>
