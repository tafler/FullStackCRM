<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title>FullStack CRM App by MEVN</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
          v-bind:class="[(showView == 'Login') ? 'active-link' : '']"
          @click="changeView('Login')">
          Login
        </v-btn>
        <v-btn flat
          v-bind:class="[(showView == 'Register') ? 'active-link' : '']"
          @click="changeView('Register')">
          Register
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-layout v-if="showView === 'Login'">
        <v-flex sm4 offset-sm4 mt-5>
          <v-form v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Логин"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPass1 ? 'visibility_off' : 'visibility'"
                :rules="[rules.required, rules.min]"
                :type="showPass1 ? 'text' : 'password'"
                name="input-10-1"
                label="Пароль"
                hint="минимум 6 символов"
                counter
                @click:append="showPass1 = !showPass1"
              ></v-text-field>
              <v-btn>Вход</v-btn>
            </v-form>
        </v-flex>
      </v-layout>
      <v-layout v-if="showView === 'Register'">
        <v-flex sm4 offset-sm4 mt-5>
          <v-form v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Логин"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="showPass2 ? 'visibility_off' : 'visibility'"
                :rules="[rules.required, rules.min]"
                :type="showPass2 ? 'text' : 'password'"
                name="input-10-1"
                label="Пароль"
                hint="минимум 6 символов"
                counter
                @click:append="showPass2 = !showPass2"
              ></v-text-field>
              <v-text-field
                v-model="confirmPass"
                :append-icon="showPass3 ? 'visibility_off' : 'visibility'"
                :rules="[rules.required, rules.min]"
                :type="showPass3 ? 'text' : 'confirmPass'"
                name="input-10-1"
                label="Подтверждение пароляt"
                hint="минимум 6 символов"
                counter
                @click:append="showPass3 = !showPass3"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-btn>Вход</v-btn>
            </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      name: '',
      password: '',
      confirmPass: '',
      showView: 'Login',
      showPass1: false,
      showPass2: false,
      showPass3: false,
      rules: {
        required: value => !!value || 'Обязательное поле.',
        min: v => v.length >= 6 || 'Минимум 6 символов',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
      nameRules: [
        v => !!v || 'Пожайлуста заполните поле',
        v => v.length <= 10 || 'Логин не может быть более 10 символов',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Пожайлуста заполните поле',
        v => /.+@.+/.test(v) || 'Не похоже на реальную почту',
      ],
    };
  },
  methods: {
    changeView(name) {
      this.showView = name;
      this.name = '';
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
.active-link{
  border-bottom: 4px solid grey;
}
</style>
