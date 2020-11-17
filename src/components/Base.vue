<template>
  <div class="page-container">
    <md-app>
      <md-app-content class="md-layout md-alignment-center-center">
        <LoginForm @login='onLogin' />
      </md-app-content>
    </md-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from "@/components/LoginForm.vue";
@Component({
  components: {LoginForm}
})
export default class Base extends Vue {

  public users: Array<object> = [
    {
      nick: 'Иван Иванов',
      avatar: 'avatar.jpg'
    }
  ]

  public onLogin(user): void {
    this.users.push(user)

    this.$router.push({
      name: 'Chat',
      params: {
        users: this.users,
        currentUser: user
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    /*border: 1px solid rgba(#000, .12);*/
  }
</style>
