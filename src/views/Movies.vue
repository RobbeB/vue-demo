<template>
  <v-sheet class="mx-auto pa-5" elevation="8" max-width="1200">
    <h1 class="ma-8">Movies</h1>
    <div class="d.flex flex-column">
      <category v-for="(category, index) in genres" :key="index" :category="category" />
    </div>
  </v-sheet>
</template>

<script>
import api from "@/services/api.service";
import Category from "@/components/Category.vue";

export default {
  name: "Movies",
  components: { Category },
  data: () => ({
    genres: null
  }),
  created() {
    api.getGenres().then(res => {
      this.genres = res;
    });
  }
};
</script>

<style lang="scss" scoped></style>
