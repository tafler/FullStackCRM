<template>
  <v-dialog v-model="dialog2" max-width="500px">
    <v-card>
      <v-card-title>
        Добавить категорию
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Название категории"
        ></v-text-field>
        <v-btn color="primary" dark><v-icon>add_photo_alternate</v-icon> Загрузить изображение</v-btn>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" flat @click="dialog2=false">Закрыть</v-btn>
        <v-btn color="success" flat @click="dialog2=false">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog2: false,
    };
  },
};
</script>

<style scoped>

</style>