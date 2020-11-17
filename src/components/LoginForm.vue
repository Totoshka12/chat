<template>
  <md-card class="md-layout-item md-size-50 md-small-size-100">
    <md-card-header>
      <div class="md-title">Вход в чат</div>
    </md-card-header>
    <md-card-content>
      <md-field md-clearable>
        <label>Ник в чате</label>
        <md-input v-model="user.nick"></md-input>
      </md-field>
      <md-field md-clearable>
        <label>Ссылка на аватар</label>
        <md-input v-model="user.avatar" type="url"></md-input>
      </md-field>
    </md-card-content>
    <md-card-actions>
      <md-button @click="login" class="md-primary" :disabled="sending">Войти</md-button>
    </md-card-actions>
  </md-card>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  user: object = {
    nick: '',
    avatar: ''
  }

  sending = false

  @Emit()
  login () {
    return this.user
  }
}

</script>