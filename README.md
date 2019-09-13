# Simple-web-apps

#### SERVER SIDE

#### Simple Web Apps built in JSONWEBSERVER.

### ALL API

| Routes                                    | HTTP | Body | Description              |
|-------------------------------------------|------|------|--------------------------|
| http://localhost:3000/main                | GET  | none | get all data home        |
| http://localhost:3000/invoice             | GET  | none | get invoice data         |
| http://localhost:3000/osf                 | GET  | none | get osf data             |
| http://localhost:3000/conventionalosf     | GET  | none | get conventional osf     |
| http://localhost:3000/conventionalinvoice | GET  | none | get conventional invoice |
| http://localhost:3000/shariaosf           | GET  | none | get sharia osf           |
| http://localhost:3000/shariainvoice       | GET  | none | get sharia invoice       |
| http://localhost:3000/reksadana           | GET  | none | get reksadana            |
| http://localhost:3000/sbn                 | GET  | none | get sbn                  |

## Usage

 Make sure you have Node.js and npm installed in your computer, and then run these commands:
 

``` 
 $ npm install -g json-server
 $ json-server --watch db.json
 ```

 Access the Web via http://localhost:3000

#### CLIENT SIDE

## Project setup

``` 
npm install
```

### Compiles and hot-reloads for development

``` 
npm run serve
```

### Compiles and minifies for production

``` 
npm run build
```

### Run your tests

``` 
npm run test
```

### Lints and fixes files

``` 
npm run lint
```

## CODE EXPLAIN

### 1. How to call main.json 

the template

``` javascript
< template >
    <
    div style = "text-align: left;" >
    <
    h1 > {
        {
            msg
        }
    } < /h1> <
    CardProduct
v -
    for = "prods in this.$store.state.main": key = "prods.sub": title = "prods.name": count = "prods.count" /
    >

    <
    /div> <
    /template>
```

using vuex to catch all data

``` javascript
created() {
    this.$store.dispatch("GET_INVOICE");
    this.$store.dispatch("GET_OSF");
    this.$store.dispatch("GET_MAIN");
    this.$store.commit('EMPTY_DATA');
}
```

store to catch data main.json from server 
``` javascript 
  GET_MAIN(context) {

      instance
        .get("/main", {})
        .then(({ data }) => {
          //console.log(data, "disini main data");
          // context.questions = data;
          context.commit("SET_MAIN", data)
          // //console.log(context.questions);
        })
        .catch(function (error) {
          //console.log(error);
        });
    },

```

### 2. How to call sub sharia and conventional

    with click this code you can get card bold and sharia and conventional 
``` html 
    <div v-else v-on:click.prevent="cond=true" style="cursor: pointer; ">
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
```
card bold and sharia&conventional sub
```html
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
  ```  

  ### 3. How to call ending sub 

  using route to get history route and route params
```html
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
 ```
 router code
 ``` javascript
 import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      component: Product,
      children: [
        //UserInfo component is rendered when /user/:id is matched
        { path: ':id', component: Product, props: true }
      ]
    },
  ],
});
```

  ### 4. ending sub and all filter

  template ending sub using v-if to get differnt filter then each other
  ``` html
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
      <template
        v-slot:append
        v-else-if="this.$route.params.id=='Conventional Invoice' || this.$route.params.id=='Conventional OSF' || this.$route.params.id=='Sharia Invoice' || this.$route.params.id=='Sharia OSF'"
      >
        <b-dropdown text="SORT">
          <b-dropdown-item v-on:click.prevent="restart()">ALL</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchGrade('A')">A</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchGrade('B+')">B+</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchGrade('B')">B</b-dropdown-item>
        </b-dropdown>
      </template>
      <template v-slot:append v-else-if="this.$route.params.id=='SBN'">
        <b-dropdown  text="SORT">
          <b-dropdown-item v-on:click.prevent="restart()">ALL</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchType('SBR')">SBR</b-dropdown-item>
          <b-dropdown-item v-on:click.prevent="changeSearchType('ST')">ST</b-dropdown-item>
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
``` 

all methods to get filter and currency 

```javascript 
methods: {
    changeSearchOperator(search) {
      this.searchOperator = search;
    },
    changeSearchGrade(grade) {
      this.searchGrade = grade;
    },
    changeSearchType(type) {
      this.searchType = type;
    },
    restart() {
        console.log('masuk ga')
      this.searchOperator = 0;
      this.searchGrade = 0;
      this.searchType = 0;
      console.log(this.searchOperator,this.searchGrade,this.searchType)
      console.log(this.filteredPersons,"afaf")
    },
    filterByReturn: function(user) {
    //   console.log(user, "huah");
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
    filterByGrade: function(user) {
    //   console.log(user, "huah");
      // no operator selected or no age typed, don't filter :
      if (this.searchGrade === 0) {
          console.log('disni kah?')
        return true;
      }

      if (this.searchGrade === "A") {
        return (user.grade == "A");
      } else if (this.searchGrade === "B") {
        return (user.grade == "B");
      } else if (this.searchGrade === "B+") {
        return (user.grade == "B+");
      }
    },
    filterByType: function(user) {
    //   console.log(user, "huah");
      // no operator selected or no age typed, don't filter :
      if (this.searchType === 0) {
        console.log('disni kah?')
        return true;
      }
      if (this.searchType === "SBR") {
          console.log('true')
        return (user.type == "SBR");
      } else if (this.searchType === "ST") {
        return (user.type == "ST");
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
  ```
  using computed to get real time filter and real time loading

  ``` javascript 
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
      return this.$store.state.dataProduct
        .filter(this.filterByReturn)
        .filter(this.filterByType)
        .filter(this.filterByGrade);
    }
  }
};
```