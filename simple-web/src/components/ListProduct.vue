<template>
  <div style="text-align: left;">
    <h1>{{ msg }}</h1>
    <b-input-group size="m" style="margin:25px; width:80%">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-search"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Search"></b-form-input>
      <template v-slot:append>
        <b-dropdown text="SORT">
          <b-dropdown-item>Action A</b-dropdown-item>
          <b-dropdown-item>Action B</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-input-group>
    <b-table
      sticky-header
      :filter="filter"
      :filterIncludedFields="filterOn"
      @filtered="onFiltered"
      :items="this.$store.state.dataProduct"
    >
      <template v-slot:cell(amount)="data">
        <b>{{ currency(data.item.amount) }}</b>
      </template>
    </b-table>
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
      data: [],
      stickyHeader: true,
      cond: false,
      condOsf: false,
      filter: null,
      filterOn: []
    };
  },
  components: {
    CardProduct,
    CardBold
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    currency(payload) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(payload);
    }
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("GET_DATA", this.$route.params.id);
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
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
