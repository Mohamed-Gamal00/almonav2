/***********************************************************************/
<template>
  <div class="container"></div>
  <section class="our-team-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 pt-1 our-team"
          v-for="member in members"
          :key="member"
        >
          <div class="card h-100">
            <div class="card-body text-center">
              <img
                class="img-fouild rounded w-75 mb-3"
                :src="member.image"
                alt="Sophie"
              />
              <div class="team-content">
                <h3 class="text-center fw-bold">{{ member.name }}</h3>
                <p class="text-center fw-bold">{{ member.job }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div
          class="col-lg-4 col-md-6 col-sm-6 mt-4"
          v-for="member in members"
          :key="member"
        >
          <div class="our-team">
            <div class="pic" width="100" height="100">
              <img
                :src="member.image"
                width="100"
                height="100"
                class="rounded-circle"
              />
            </div>
            <div class="team-content">
              <h3 class="title">{{ member.name }}</h3>
              <span class="post">{{ member.job }}</span>
            </div>

            <ul class="social">
              <li v-if="member.linkedin">
                <a :href="member.linkedin" target="_blank"
                  ><FontAwesome :icon="['fab', 'linkedin-in']"
                /></a>
              </li>
              <li v-if="member.facebook">
                <a :href="member.facebook" target="_blank">
                  <FontAwesome :icon="['fab', 'facebook']" />
                </a>
              </li>
              <li v-if="member.twitter">
                <a :href="member.twitter" target="_blank"
                  ><FontAwesome :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li v-if="member.instagram">
                <a :href="member.instagram" target="_blank"
                  ><FontAwesome :icon="['fab', 'instagram']" />
                </a>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  name: "SliderCom",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      members: [],
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  async mounted() {
    let result = await axios.get(`https://admin.sigma-tech.agency/api/team`);
    if (result.status == 200) {
      this.members = result.data.team;
    }
  },
};
</script>

<style scoped>
#team i {
  font-size: 26px;
  color: #555;
}

#team p {
  font-weight: 500;
}

#team .card {
  border-radius: 0;
}
</style>
