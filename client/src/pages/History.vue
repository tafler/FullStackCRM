<template>
  <v-container>
    <v-layout>
      <v-flex offset-sm1 class="display-1 mb-5">История заказов</v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-btn class="primary"><v-icon>filter_list</v-icon></v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
              <span slot="activator">
                {{ props.header.text }}
              </span>
            </v-tooltip>
          </template>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.number }}</td>
            <td>{{ props.item.date }}</td>
            <td>{{ props.item.time }}</td>
            <td>{{ props.item.summ }}</td>
            <td>{{ props.item.change }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '№', value: 'number' },
        { text: 'Дата', value: 'date' },
        { text: 'Время', value: 'time' },
        { text: 'Сумма', value: 'summ' },
        { text: '', value: 'change' },
      ],
      desserts: [
        {
          number: 1,
          date: '31.02.13',
          time: '12.00',
          summ: 300,
          change: 22,
        },
        {
          number: 21,
          date: '33.02.13',
          time: '12.00',
          summ: 320,
          change: 22,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
