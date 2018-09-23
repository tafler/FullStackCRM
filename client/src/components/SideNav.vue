<template>
    <v-navigation-drawer
      dark
      v-model="drawer"
      clipped
      fixed
      app
    >
       <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Full Stack CRM App
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link tag="a" :to="{name: 'overview'}">
                Обзор
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>insert_chart_outlined</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link tag="a" :to="{name: 'analytics'}">
                Аналитика
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>history</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link tag="a" :to="{name: 'history'}">
                История
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>add_shopping_cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link tag="a" :to="{name: 'order'}">
                Добавить заказ
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link tag="a" :to="{name: 'assortment'}">
                Ассортимент
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

</template>

<script>

export default {
  name: 'SideNav',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      links: ['Home', 'Contacts', 'Settings'],
      mini: true,
      right: null,
    };
  },
};
</script>

<style lang="scss" scoped>
  a{
    color: white;
    text-decoration: none;
  }
  .router-link-exact-active{
    color: #82B1FF;
  }
</style>
