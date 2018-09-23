<template>
  <v-container>
    <v-layout>
      <v-flex offset-sm1 class="display-2 mb-5">Заказ</v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn class="primary">Завершить</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm3>
        <v-card>
          <v-img
            :src="'../assets/logo.png'"
            height="200px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
            </v-container>
          </v-img>
          <v-card-title class="text-xs-center">
            <p class="text-xs-center">asdawdwd</p>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
