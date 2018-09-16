<template>
  <v-container>
    <v-layout>
      <v-flex offset-sm1 class="display-2 mb-5">Обзор за вчера</v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm4 offset-sm1>
               <v-card dark color="#80D8FF" class="elevation-3">
          <v-container fill-height fluid>
            <v-layout align-start justify-center column fill-height>
              <v-flex xs12>
                  <v-card-text><h2>Заказы:</h2></v-card-text>
              </v-flex>
              <v-flex xs12>
                  <v-card-text><h1>4 зак.</h1></v-card-text>
              </v-flex>
              <v-flex xs12>
                  <v-card-text><h1>22%.</h1></v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <div>
              <span>число заказов ычера на 12 меньше среднего значения: 2 зак в день.</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 offset-sm1>
        <v-card dark color="#FFCC80" class="elevation-3">
          <v-container fill-height fluid>
            <v-layout align-start justify-center column fill-height>
              <v-flex xs12>
                  <v-card-text><h2>Заказы:</h2></v-card-text>
              </v-flex>
              <v-flex xs12>
                  <v-card-text><h1>4 зак.</h1></v-card-text>
              </v-flex>
              <v-flex xs12>
                  <v-card-text><h1>22%.</h1></v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-title>
            <div>
              <span>число заказов ычера на 12 меньше среднего значения: 2 зак в день.</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
