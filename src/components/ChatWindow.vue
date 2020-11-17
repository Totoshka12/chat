<template>
  <md-app md-waterfall md-mode="overlap">
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">Чат {{user.nick}}</span>
        </div>
      </div>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Участники</md-toolbar>

      <md-list>
        <md-list-item v-for="user in users" :key="user.nick" @click="sendTo(user)">
          <md-avatar>
            <img :src="avatarUrl(user)" alt="Avatar">
          </md-avatar>
          <span class="md-list-item-text">{{ user.nick }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <md-list class="md-dense">
        <md-list-item :class="{'invisible': msg.toUser !== null && msg.toUser !== user}" v-for="(msg, index) in messages" :key="index">
          <md-avatar>
            <img :src="avatarUrl(msg.user)" :alt="msg.user.nick">
          </md-avatar>
          <span class="md-list-item-text">{{ msg.text }}</span>
        </md-list-item>
      </md-list>
      <md-field class="messageClass">
        <label>Введите сообщение</label>
        <md-input v-model="message" required @keyup.enter="sendMessage()"></md-input>
        <md-button :disabled="message === ''" @click="sendMessage" class="md-icon-button">
          <md-icon>send</md-icon>
        </md-button>
      </md-field>
    </md-app-content>
  </md-app>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';

@Component
export default class ChatWindow extends Vue {
  @Prop() user: object
  @Prop() currentUser: object
  @Prop() users: Array<object>
  @Prop() messages: Array<object>

  message = ''
  toUser: object = null
  menuVisible = false

  avatarUrl(user) {
    return user.avatar.includes('http')
      ? user.avatar
      : require(`@/assets/${user.avatar}`)
  }

  sendTo(user) {
    this.toUser = user
    this.message = user.nick + '> ' + this.message
    this.menuVisible = !this.menuVisible
  }

  @Emit()
  sendMessage() {
    const msg = {
      user: this.user,
      toUser: this.toUser,
      text: this.message
    }

    this.toUser = null
    this.message = ''
    return msg
  }
}
</script>

<style scoped lang="scss">
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }
  .portrait {
    .md-app {
      height: 50vh;
    }
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .invisible {
    display: none;
  }
</style>
