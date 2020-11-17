<template>
  <div class="page-container">
    <div v-for="user in users" :key="user.nick" class="viewport" :class="getOrientation() ? 'landscape' : 'portrait'">
      <chat-window :currentUser="currentUser" :messages="messages" :user="user" :users="users" @send-message="onMessage" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatWindow from "@/components/ChatWindow.vue";
@Component({
  components: {ChatWindow}
})
export default class Chat extends Vue {
  public users: Array<object> = []
  public messages: Array<object> = []
  public currentUser: object = {}

  public onMessage(message): void {
    this.messages.push(message)
  }

  created(): void {
    this.users = this.$route.params.users
    this.currentUser = this.$route.params.currentUser
    if (this.users === undefined) {
      this.$router.push({name: 'Base'})
    }
  }

  getOrientation() {
    return window.innerWidth > window.innerHeight;
  }

}
</script>
<style scoped lang="scss">
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .viewport {
    vertical-align: top;
    overflow: auto;
    &.landscape {
      display: inline-block;
      width: 50vw;
      height: 100vh;
    }
    &.portrait {
      display: block;
      width: 100vw;
      height: 50vh;
    }

  }
</style>
