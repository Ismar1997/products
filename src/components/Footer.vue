<template>
  <v-footer dark bottom fixed padless>
    <v-card class="flex" flat tile>
      <v-card-title class="brand">
        <v-row justify="center" align="center">
          <strong class="subheading">
            Scandiweb Test assignment
          </strong>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} - Ismar Fazlić --v.2.0
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Footer extends Vue {}
</script>
