<template>
  <div class="home">
    <Header />
    <Product style="margin-top : 100px;" msg="PRODUCT" cond="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue"
import Header from "./Header";

export default {
  name: "home",
  components: {
    Product,
    Header
  }
};
</script>
