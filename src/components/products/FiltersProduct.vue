<template>
  <div v-if="loading">
    <PageLoader />
  </div>
  <div class="container services">
    <!-- text -->
    <div class="container pt-lg-5">
      <div class="row d-flex justify-content-center">
        <!-- text -->
        <div class="col-md-10">
          <h1
            class="text-end text-lg-center background backgroundcenter fw-bold"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="700"
            data-aos-once="false"
          >
            <strong> اجدد منتجاتنا </strong>
          </h1>
          <div style="width: 100%">
            <p class="fw-bold text-center">
              نساعدك في تحقيق أهدافك والمساهمة في جعل فكرتك حية على أرض الواقع،
              بتقديم خدمات تقنية وتسويقية احترافية.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- FILTER BUTTONS -->
    <div class="filters text-center mb-3">
      <!-- SHOW ALL BUTTON -->
      <!-- FILTER BUTTONS -->
      <div class="p-3" style="overflow: auto; white-space: nowrap">
        <button
          class="filter-button nav-link fw-bold bttn btn-border-3"
          @click="showAll()"
        >
          الكل
        </button>
        <button
          class="filter-button nav-link fw-bold bttn btn-border-3"
          v-for="(cat, index) in cats"
          :key="index"
          @click="filterPtsroducts(cat)"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>
    <!-- products -->
    <div class="row d-flex justify-content-center">
      <!-- text -->
      <div class="col-md-10">
        <div class="row justify-content-start">
          <div
            class="col-lg-3 containerr col-md-6 p-3"
            v-for="item in filteredProducts"
            :key="item.id"
            data-aos="zoom-in"
            :data-aos-delay="100 + i * 10"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="600"
            data-aos-once="1"
          >
            <router-link
              class="text-decoration-none"
              :to="{ name: 'details', params: { id: item.id } }"
            >
              <div
                class="card border-0 services_img"
                style="width: 100%; background-color: #f3f3f3"
              >
                <div class="text-center">
                  <img :src="item.image" height="200" style="width: 100%" />
                </div>
                <div class="card-body">
                  <h5 class="card-title fw-bold" style="color: #0e1116">
                    <strong>{{ item.title }}</strong>
                  </h5>
                  <!-- description-->
                  <!-- <p class="text-dark" v-html="item.desc"></p> -->
                </div>
                <div class="d-flex justify-content-between">
                  <button class="ordernow fw-bold" style="color: #ffcc66">
                    عرض المزيد
                  </button>

                  <p
                    class="text-end fw-bold ms-3"
                    style="position: relative; top: 5px; color: #000000"
                  >
                    $ {{ item.price }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageLoader from "@/components/pageloader/PageLoader.vue";
import axios from "axios";
export default {
  name: "FiltersCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      filteredCat: null,
      cats: [],
      products: [],
    };
  },
  methods: {
    filterPtsroducts(cat) {
      // Set filteredCat data to
      // selected product's name
      this.filteredCat = cat.id;
    },
    // set filteredCat data to null
    showAll() {
      this.filteredCat = null;
    },
  },
  computed: {
    // When filteredCat data changed
    // filteredProducts computed property will
    // automatically create new data model
    // by filtering out unmatched products
    filteredProducts() {
      // If filteredCat is equal to null
      // display all data
      const data = this.filteredCat
        ? this.products.filter((item) => item.cat_id === this.filteredCat)
        : this.products;
      return data;
    },
  },
  async mounted() {
    this.loading = true;
    let result = await axios
      .get(`https://admin.almonaoffice.sa.almona.host/api/products`)
      .catch(() => this.$router.push({ path: "/servererror" }));
    if (result.status == 200) {
      this.cats = result.data.cats;
      this.products = result.data.products;
    }
    this.loading = false;
  },
};
</script>
<style scoped>
/************************************scrollbar**********************************/
.services ::-webkit-scrollbar {
  height: 5px;
  background-color: #421a1a;
}
/* Track */
.services ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.services ::-webkit-scrollbar-thumb {
  background: #008ab8;
  transition: all 1s ease-in-out;
}

/* Handle on hover */
.services ::-webkit-scrollbar-thumb:hover {
  background: #8e8f8f;
}
/*********************************button product css الاقسام********************************* */
.services .bttn {
  position: relative;
  display: inline-block;
  /* margin: 15px;
  padding: 12px 27px; */
  text-align: center;
  font-size: 16px;
  /* letter-spacing: 1px; */
  text-decoration: none;
  color: #999999;
  background: #ffffff;
  border: 3px solid #999999;
  cursor: pointer;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}
.services .bttn.btn-border-3::after,
.bttn.btn-border-3::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

.services .bttn.btn-border-3::after {
  top: -9px;
  left: -9px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

.services .bttn.btn-border-3::before {
  bottom: -9px;
  right: -9px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

.services .bttn.btn-border-3:hover {
  color: #111a53;
  border: transparent;
}

.services .bttn.btn-border-3:hover::after,
.bttn.btn-border-3:hover::before {
  width: 30px;
  height: 30px;
  border-color: #ffe711;
}
.services .filter-button {
  text-transform: uppercase;
  margin: 6px 6px;
  width: 130.43px;
  cursor: pointer;
  border: none;
  color: black;
  background-color: transparent;
  font-size: 1.2rem;
}
/*******************************************/
.services.containerr {
  /* padding: 1em 0; */
  /* float: left; */
  /* width: 50%; */
}

.services.item {
  /* flex: 0 32%; */
  /* height: 100px; */
  margin-bottom: 2%; /* (100-32*3)/2 */
}

/***********************card style*******************************/
.services {
  direction: rtl;
  color: #111a53;
}
.services .ordernow {
  width: 50%;
  height: 40px;
  border: 1px solid #0e1116;
  background-color: #000000;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
}
.services button:hover {
  color: #000000 !important;
  background-color: #ffffff;
  font-weight: 700 !important;
}

.services .containerr {
  padding: 1em 0;
  float: left;
  width: 50%;
}
/* mobile */
@media screen and (max-width: 640px) {
  .services .containerr {
    display: block;
    width: 100%;
  }
  .services .services_img {
    border-bottom-left-radius: 30px;
    width: 100%;

    object-fit: cover;
  }
  .services .services_img img {
    width: 100%;
  }
}
/* ipad */
@media screen and (min-width: 768px) {
  .services .containerr {
    width: 48.33333%;
  }
  .services .services_img {
    /* height: 150px; */
    width: 100%;
    border-bottom-left-radius: 30px;
    object-fit: cover;
  }
  .services .services_img img {
    width: 100%;
    height: 150px;
  }
}

/* Large devices (laptops/desktops) */
@media screen and (min-width: 920px) {
  .services .containerr {
    width: 33.33333%;
  }
  .services .services_img {
    height: 220px;
    width: 100%;
    border-bottom-right-radius: 30px;
  }
  .services .services_img img {
    max-width: 100%;
  }
}
@media only screen and (min-width: 1024px) {
  .services .containerr {
    width: 33.33333%;
  }
  .services .services_img {
    height: 365px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #222222;
    /* background-color: #111a53; */
  }
  .services .services_img img {
    max-width: 100%;
    height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
}
</style>
