<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">My Title</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>account_circle</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-primary" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item @click="alert">
            <md-icon>dashboard</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>

          <md-list-item @click="alert">
            <md-icon>account_circle</md-icon>
            <span class="md-list-item-text">Profile</span>
          </md-list-item>

          <md-list-item>
            <md-icon>calendar_today</md-icon>
            <span class="md-list-item-text">Tasks</span>
          </md-list-item>

          <md-list-item>
            <md-icon>settings_applications</md-icon>
            <span class="md-list-item-text">Settings</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="viewport">
          <span class="md-title">Profile</span>
          <md-divider></md-divider>

          <md-list class="md-double-line">
            <md-subheader>Phone</md-subheader>

            <md-list-item>
              <md-icon class="md-primary">phone</md-icon>

              <div class="md-list-item-text">
                <span>(650) 555-1234</span>
                <span>Mobile</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>sms</md-icon>
              </md-button>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <span>(650) 555-1234</span>
                <span>Mobile</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>sms</md-icon>
              </md-button>
            </md-list-item>

            <md-divider></md-divider>
            <md-subheader>Email</md-subheader>

            <md-list-item>
              <md-icon class="md-primary">email</md-icon>

              <div class="md-list-item-text">
                <span>aliconnors@example.com</span>
                <span>Personal</span>
              </div>
            </md-list-item>

            <md-list-item class="md-inset">
              <div class="md-list-item-text">
                <span>ali_connors@example.com</span>
                <span>Work</span>
              </div>
            </md-list-item>
          </md-list>
      </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home Page'
    }
  }
}
</script>

<style>
.md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
}
.md-drawer {
  width: 230px;
  /*max-width: calc(100vw - 125px); */
}
</style>
