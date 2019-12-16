<template>
  <v-navigation-drawer v-model="expandSidebar" absolute temporary>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: "expandSidebar",
  data: () => ({
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "Log out", icon: "question_answer" }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
