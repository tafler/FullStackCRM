<template>
  <v-container>
    <v-layout>
      <v-flex offset-sm1 class="display-2 mb-5">Добавить продукцию</v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn class="primary">Завершить</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">
            <v-text-field v-model="props.item.price">{{ props.item.price }}</v-text-field>
          </td>
          <td class="text-xs-right">
            <v-text-field v-model="props.item.count">{{ props.item.count }}</v-text-field>
          </td>
          <td class="justify-center layout px-0">Добавить</td>
        </template>
      </v-data-table>
    </v-layout>
    
  </v-container>
</template>

<script>
  export default {
    data() {
      return{
        dialog: false,
        headers: [
          {
            text: 'Название',
            align: 'Стоимость',
            sortable: 'Количество',
            value: '',
          },
          { text: 'Название', value: 'name' },
          { text: 'Стоимость', value: 'price' },
          { text: 'Количество', value: 'count' },
          { text: 'Actions', value: 'name', sortable: false }
        ],
        desserts: [
            {
              name: 'Frozen Yogurt',
              price: 159,
              count: 6.0,
            },
            {
              name: 'Ice cream sandwich',
              price: 237,
              count: 9.0,
            },
          ],
      }),
    }
  }
</script>

<style scoped>

</style>