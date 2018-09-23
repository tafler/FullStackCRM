<template>
  <v-container>
    <v-layout>
      <v-flex offset-sm1 class="display-2 mb-5">Заказ</v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn color="error" class="primary">delete</v-btn>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-flex offset-sm1 sm10>
        <div class="categories">
          <div class="categories__item">Пончик <v-btn color="error"><v-icon ml-a>delete</v-icon></v-btn></div>
        </div>
      </v-flex>
      <v-flex offset-sm1 sm10>
        <div class="categories">
          <div class="categories__item">Пончик <v-btn color="error"><v-icon>delete</v-icon></v-btn></div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>