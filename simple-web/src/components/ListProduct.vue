<template>
  <div style="text-align: left;">
    <h1>{{ msg }}</h1>
    <b-input-group size="m" style="margin:25px; width:80%" v-if="sort.length>0">
      <b-input-group-prepend>
        <span class="input-group-text">
          <i class="fa fa-search"></i>
        </span>
      </b-input-group-prepend>
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Search"></b-form-input>
    
      <template v-slot:append v-if="this.$route.params.id=='Reksadana'">
        <b-dropdown v-model="searchOperator" text="SORT">
          <b-dropdown-item v-on:click.prevent="restart()">ALL</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchOperator('>=')">Positive</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchOperator('<')">Negative</b-dropdown-item>
        </b-dropdown>
      </template>
        <template v-slot:append v-else>
        <b-dropdown v-model="filter" text="SORT">
          <b-dropdown-item v-on:click.prevent="sortings('all')">ALL</b-dropdown-item>
          <b-dropdown-item
            v-on:click.prevent="sortings(condi)"
            v-for="condi in sort"
            :key="condi"
          >{{condi}}</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-input-group>
    <b-table
      sticky-header
      :filter="filter"
      :busy="isBusy"
      :items="filteredPersons"
      :filterIncludedFields="filterOn"
    >
      <template v-slot:cell(amount)="data">
        <b>{{ currency(data.item.amount) }}</b>
      </template>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
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
      searchOperator: 0,
      listItem: [],
      stickyHeader: true,
      cond: false,
      condOsf: false,
      filter: null,
      filterOn: [],
      sort: []
    };
  },
  components: {
    CardProduct,
    CardBold
  },
  methods: {
    changeSearchOperator(search) {
      this.searchOperator = search;
    },
    restart(){
      this.searchOperator = 0
    },
    filterByReturn: function(user) {
      console.log(user, "huah");
      // no operator selected or no age typed, don't filter :
      if (this.searchOperator === 0) {
        return true;
      }

      if (this.searchOperator === ">=") {
        return user.return >= 0;
      } else if (this.searchOperator === "<") {
        return user.return < 0;
      }
    },
    currency(payload) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(payload);
    },
    sortings(payload) {
      console.log(payload);
      if (payload === "all") {
        this.filter = "";
        this.filterOn = [];
      } else {
        this.filter = payload;
        this.filterOn = this.$store.state.column;
      }
    }
  },
  created() {
    console.log(this.$route.params.id);
    this.data = [];
    this.listItem = [];
    this.filter = "";
    this.filterOn = [];
    this.$store.dispatch("GET_DATA", this.$route.params.id);
    this.listItem = this.$store.state.dataProduct;
    console.log(this.$store.state.sorting, "dihtml");
    this.sort = this.$store.state.sorting;
  },
  mounted() {
    console.log(this.data.length, "length");
  },
  computed: {
    isBusy: function() {
      console.log(this.$store.state.dataProduct.length, "computed");
      if (this.$store.state.dataProduct.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    filteredPersons: function() {
      return this.$store.state.dataProduct.filter(this.filterByReturn);
    }
    // sortOptions() {
    //   // Create an options list from our fields
    //   return this.fields
    //     .filter(f => f.sortable)
    //     .map(f => {
    //       return { text: f.label, value: f.key };
    //     });
    // }
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
