<template>
  <v-slide-item v-slot:default="{ active, toggle }">
    <v-card
      :color="active ? 'primary' : 'grey lighten-1'"
      class="ma-4"
      height="200"
      width="150"
      @click="toggle"
    >
      <v-img :src="imageSrc" />
    </v-card>
  </v-slide-item>
</template>

<script>
export default {
  props: {
    posterPath: {
      type: String,
      required: false
    }
  },
  data: () => ({}),
  computed: {
    imageSrc() {
      if (this.posterPath) {
        return `https://image.tmdb.org/t/p/w185${this.posterPath}`;
      }
      return "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png";
    }
  }
};
</script>

<style lang="scss" scoped></style>
