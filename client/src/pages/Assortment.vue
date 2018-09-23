<template>
  <v-container>
    <v-layout>
      <v-flex offset-sm1 class="display-2 mb-5">Категории</v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn class="primary">Добавить категорию</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex offset-sm1 sm8>
        <div class="categories">
          <div class="categories__item">Напитки</div>
          <div class="categories__item">Пирожки</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .categories__item{
    background-color: white;
    padding: 15px;
    border: 1px solid grey;
    border-radius: 2px;
    margin-bottom: 3px;
  }
</style>
