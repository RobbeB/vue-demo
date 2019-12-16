<template>
  <v-sheet v-if="selectedMovie != null" color="grey lighten-4" height="200" tile>
    <v-row class="fill-height" align="center" justify="center">
      <h3 class="title">Movie detail for {{ selectedMovie.title }}</h3>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "MovieDetail",
  props: ["selectedMovie"]
};
</script>

<style lang="scss" scoped></style>
