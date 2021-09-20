<template>
  <v-app>
    <v-main>
      <router-view />
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: { "app-footer": Footer },
  data: () => ({
    //
  }),
});
</script>
