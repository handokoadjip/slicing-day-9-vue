<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<script>
import $ from 'jquery';
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted: function() {
    $(document).ready(function() {
      $(document).scroll(function() {
        const nav = $(".navbar.fixed-top");
        nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());
      });
    });
  }
}
</script>

<style>
/* Style Here */
</style>
