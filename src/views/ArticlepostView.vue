<template>
  <NavBarCom />
  <div v-if="loading">
    <PageLoader />
  </div>
  <div class="container-fluid m-0 p-0">
    <div class="row bg-dark p-0 m-0">
      <div class="col-md-12 p-0 d-flex justify-content-center">
        <header class="header">
          <img :src="article.banner" class="img-fluid" alt="img" />
        </header>
      </div>
    </div>
  </div>
  <div class="container-fluid mb-5 pb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="row mb-2 align-items-center">
          <div class="container">
            <article style="direction: rtl">
              <h1 class="headline">
                {{ article.title }}
              </h1>
              <div>
                <span class="pub-date">تاريخ النشر.{{ article.date }}</span>
              </div>

              <div class="row" style="direction: rtl">
                <div class="col-md-8">
                  <div v-html="article.desc"></div>
                </div>
                <div class="col-md-4 border-end">
                  <div
                    class="blog-side"
                    v-for="article in articles"
                    :key="article"
                  >
                    <router-link
                      class="text-decoration-none"
                      :to="{ name: 'article', params: { id: article.id } }"
                    >
                      <a href="" class="text-decoration-none">
                        <div class="media">
                          <!-- <img src="@/assets/11104.jpg" alt="" /> -->
                          <img :src="article.image" />
                          <div class="media-body">
                            <h4>
                              <strong>{{ article.title }}</strong>
                            </h4>
                            <span>{{ article.date }}</span>
                          </div>
                        </div>
                      </a>
                    </router-link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <!-- <h1>post article {{ id }}</h1> -->
      </div>
    </div>
  </div>
  <FooterCom />
</template>

<script>
import PageLoader from "@/components/pageloader/PageLoader.vue";
import axios from "axios";
import NavBarCom from "@/components/navbar/NavBar.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "ArticlepostView",
  components: { NavBarCom, FooterCom, PageLoader },
  data() {
    return {
      loading: false,
      article: [],
      articles: [],
      id: this.$route.params.id,
    };
  },
  async mounted() {
    this.loading = true;
    let result = await axios
      .get(`https://admin.almonaoffice.sa.almona.host/api/article/${this.id}`)
      .catch(() => this.$router.push({ name: "servererror" }));
    if (result.status == 200) {
      this.article = result.data.article;
    }
    /* articles */
    let articles = await axios.get(
      `https://admin.almonaoffice.sa.almona.host/api/articles`
    );
    // .catch(() => this.$router.push({ name: "servererror" }));
    if (result.status == 200) {
      this.articles = articles.data.data.splice(0, 3);
    }
    this.loading = false;
  },
};
</script>

<style>
.header {
  width: 100%;
}
.header img {
  width: 100%;
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .header {
    width: 100%;
    height: 400px;
  }
  .header img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}
.media {
  display: flex;
  align-items: flex-start;
}
.blog-side .media {
  padding-bottom: 15px;
  margin-top: 15px;
  align-items: center;
}
.blog-side .media img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
}
.blog-side .media .media-body {
  margin-right: 10px;
  margin-left: 0;
}
.blog-side .media .media-body h4 {
  font-size: 15px;
  transition: 0.5s;
  color: #2a398c;
  color: var(--main-color);
  line-height: 27px;
}
</style>
