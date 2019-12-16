<template>
  <div>
    <h2 class="ml-8">{{ category.name }}</h2>
    <v-slide-group v-model="selectedMovieIndex" class="pa-4" show-arrows>
      <movie-card v-for="movie in movies" :key="movie.id" :posterPath="movie.poster_path" />
    </v-slide-group>

    <v-expand-transition>
      <movie-detail :selectedMovie="selectedMovie" />
    </v-expand-transition>
  </div>
</template>

<script>
import api from "@/services/api.service";
import MovieCard from "@/components/MovieCard.vue";
import MovieDetail from "@/components/MovieDetail.vue";

export default {
  name: "Category",
  props: ["category"],
  components: { MovieCard, MovieDetail },
  data: () => ({
    selectedMovieIndex: null,
    movies: []
  }),
  computed: {
    selectedMovie() {
      return this.selectedMovieIndex !== null ? this.movies[this.selectedMovieIndex] : null;
    }
  },
  created() {
    api.getMoviesByGenre(this.category.id).then(res => {
      this.movies = res;
    });
  }
};
</script>

<style lang="scss" scoped></style>
