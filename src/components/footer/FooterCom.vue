<template>
  <div
    class="container-fluid mt-5"
    style="background-color: #323232; direction: rtl"
  >
    <div class="row d-flex justify-content-center">
      <div class="col-md-9">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-light" style="margin-top: 6rem">
              <div class="container py-5">
                <div class="row g-5">
                  <!--SIGMA-->
                  <div class="col-md-6 col-lg-3 text-center">
                    <span class="">
                      <img
                        src="@/assets/almonasvggold.svg"
                        style="position: relative; bottom: 30px"
                        width="60"
                        alt=""
                      />
                    </span>
                    <p>
                      و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر.
                    </p>
                    <div class="d-flex justify-content-center pt-2">
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=966565553390&text&app_absent=0"
                        ><FontAwesome :icon="['fab', 'whatsapp']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        href="https://www.youtube.com/channel/UCfDjRK3Yjf21dRGdMtBQCzg"
                        ><FontAwesome :icon="['fab', 'youtube']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        href="https://www.instagram.com/AlmonaOffice/"
                        ><FontAwesome :icon="['fab', 'instagram']"
                      /></a>
                      <a
                        class="btnn btn-outline-light btn-social"
                        target="_blank"
                        href="https://www.tiktok.com/@almonaoffice.sa"
                        ><FontAwesome :icon="['fab', 'tiktok']"
                      /></a>
                    </div>
                  </div>
                  <!-- الشركة -->
                  <div class="col-md-6 col-lg-3">
                    <h5 class="text-white text-center mb-4">الشركة</h5>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'home' }"
                      >الرئيسية</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >اعمالنا</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'products' }"
                      >منتجاتنا</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'articles' }"
                      >المدونة</router-link
                    >
                  </div>
                  <!-- العمل -->
                  <div class="col-md-6 col-lg-3">
                    <h5 class="text-white text-center mb-4">العمل</h5>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                    >
                      تصميم تطبيقات الهاتف
                    </router-link>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >تصميم مواقع</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >تسويق الكتروني</router-link
                    >

                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'ourwork' }"
                      >موشن جرافيك</router-link
                    >
                  </div>
                  <!-- المزيد -->
                  <div class="col-md-6 text-center col-lg-3">
                    <h5 class="text-white text-center mb-4">المزيد</h5>
                    <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'about' }"
                    >
                      تواصل معنا
                    </router-link>
                    <router-link
                      class="btn_btn_link text-decoration-none"
                      :to="{ name: 'about' }"
                    >
                      من نحن
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12 text-center mb-3 mb-md-0">
                    2023 .جميع الحقوق محفوطة&copy; لمؤسسة المنى

                    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                  </div>
                </div>
              </div>
            </div>
            <!-- Footer End -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCom",
};
</script>

<style>
:root {
  --primary: #ffcc66;
  --light: #ffffff;
  --dark: #0e2e50;
}
.btnn.btn-social {
  margin-right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  color: var(--light);
  border: 1px solid rgba(256, 256, 256, 0.1);
  transition: 0.3s;
}

.btnn.btn-social:hover {
  color: var(--primary);
}

.btn_btn_link {
  display: block;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  color: var(--light);
  font-weight: normal;
  transition: 0.3s;
  color: white;
}
.btn_btn_link:hover {
  letter-spacing: 0.5px;
  box-shadow: none;
  color: #ffcc66;
}

.btn_btn_link::before {
  position: relative;
  content: "";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}
</style>
