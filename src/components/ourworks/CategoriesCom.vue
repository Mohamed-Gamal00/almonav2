<template>
  <div v-if="loading">
    <PageLoader />
  </div>
  <div class="Categories" style="direction: rtl">
    <!-- اجدد المشاريع -->
    <div class="container mt-5">
      <!-- categories -->
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <!-- developer apps -->
            <div class="CatContainer">
              <router-link :to="{ name: 'apps' }">
                <div class="Categorie">
                  <div class="Categorie-overlay"></div>
                  <div class="Categorie-image">
                    <img src="@/assets/Developer.png" />
                  </div>
                  <div class="Categorie-details fadeIn-bottom">
                    <h3 class="text-black fw-bold">Applications</h3>
                    <p class="text-black fw-lg-bold">
                      click to show all description
                    </p>
                    <!-- <router-link
                      class="text-decoration-none text-black fw-bold"
                      :to="{ name: 'apps', params: { id: app.id } }"
                      >عرض المزيد</router-link
                    > -->
                    <router-link
                      class="text-decoration-none text-black fw-bold"
                      :to="{ name: 'apps' }"
                      >عرض المزيد</router-link
                    >
                  </div>
                </div>
              </router-link>
            </div>
            <!-- motion -->
            <div class="CatContainer">
              <router-link :to="{ name: 'motion' }">
                <div class="Categorie">
                  <div class="Categorie-overlay"></div>
                  <div class="Categorie-image">
                    <img src="@/assets/Animation.png" />
                  </div>
                  <div class="Categorie-details fadeIn-bottom">
                    <h3 class="text-black fw-bold">motion</h3>
                    <p class="text-black fw-bold">
                      click to show all description
                    </p>
                    <router-link
                      class="text-decoration-none text-black fw-bold"
                      :to="{ name: 'motion' }"
                      >عرض المزيد</router-link
                    >
                  </div>
                </div>
              </router-link>
            </div>
            <!-- graphic -->
            <div class="CatContainer">
              <router-link :to="{ name: 'graphic' }">
                <div class="Categorie">
                  <div class="Categorie-overlay"></div>
                  <div class="Categorie-image">
                    <img src="@/assets/graphic.png" />
                  </div>
                  <div class="Categorie-details fadeIn-bottom">
                    <h3 class="text-black fw-bold">graphic</h3>
                    <p class="text-black fw-bold">
                      click to show all description
                    </p>
                    <router-link
                      class="text-decoration-none text-black fw-bold"
                      :to="{ name: 'graphic' }"
                      >عرض المزيد</router-link
                    >
                  </div>
                </div>
              </router-link>
            </div>
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
  name: "CategoriesCom",
  components: { PageLoader },
  data() {
    return {
      loading: false,
      apps: [],
    };
  },
  async mounted() {
    this.loading = true;
    let result = await axios.get(
      `https://admin.almonaoffice.sa.almona.host/api/apps`
    );
    if (result.status == 200) {
      this.apps = result.data.apps;
    }
    this.loading = false;
  },
};
</script>

<style>
/* imag hover */

.Categories .CatContainer {
  float: right;
  /* border: 1px solid rgb(0, 121, 190); */
  /* width: 50%; */
}
.Categories .Categorie-image {
  width: 100%;
  height: 300px;
}
.Categories .Categorie-image img {
  width: 100%;
  height: 300px;
}
.Categories .Categorie {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.Categories .Categorie .Categorie-overlay {
  background: #3d3b3b81;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.Categories .Categorie:hover .Categorie-overlay {
  opacity: 1;
}

.Categories .Categorie-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.Categorie:hover .Categorie-details {
  top: 50%;
  left: 53%;
  opacity: 1;
}

.Categories .Categorie-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.Categories .Categorie-details p {
  color: #fff;
  font-size: 0.8em;
}

.Categories .fadeIn-bottom {
  top: 80%;
}
@media screen and (max-width: 640px) {
  .Categories .CatContainer {
    display: block;
    width: 100%;
    margin: 3px 0;
  }
  .Categories .Categorie-image {
    width: 100%;
    height: 250px;
  }
  .Categories .Categorie-image img {
    width: 100%;
    height: 250px;
  }
}
@media screen and (min-width: 600px) {
  .Categories .CatContainer {
    display: block;
    /* width: 50%; */
    margin: 3px;
  }
  .Categories .Categorie-image {
    width: 100%;
    height: 250px;
  }
  .Categories .Categorie-image img {
    width: 100%;
    height: 250px;
  }
}

@media screen and (min-width: 900px) {
  .Categories .CatContainer {
    width: 32.8888%;
    margin: 1px;
    padding: 1px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .Categories .CatContainer {
    width: 30.3333%;
    margin: 13px;
  }
  .Categories .Categorie .Categorie-overlay {
    height: 100%;
    width: 100%;
    margin: 1px 0;
  }
}
</style>
