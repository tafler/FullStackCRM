<template>
  <v-app>
    <div>
      <side-nav></side-nav>
      <v-content class="wrapper">
        <router-view/>
      </v-content>
      <v-footer app fixed>
        <span>taf&copy;  2017</span>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import SideNav from '@/components/SideNav';

export default {
  name: 'WithSideNav',
  components: { SideNav },
};
</script>

<style scoped>

</style>
