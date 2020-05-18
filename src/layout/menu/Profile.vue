<template>
  <li class="md-list-item">
    <a
      href="javascript:void(0)"
      class="md-list-item-router md-list-item-container md-button-clean dropdown"
    >
      <div class="md-list-item-content">
        <drop-down direction="down">
          <md-button
            slot="title"
            class="md-button md-button-link md-white md-simple dropdown-toggle"
            data-toggle="dropdown"
          >
            <i class="material-icons">account_circle</i>
            <p>{{ this.name }}</p>
          </md-button>
          <ul class="dropdown-menu dropdown-with-icons">
            <li class="text-center avatar">
              <md-avatar class="md-large">
                <img src="@/assets/img/faces/avatar.jpg" alt="People" @click="profile" />
              </md-avatar>
              <span class="text-muted name">{{this.name}}</span>
            </li>
            <li class="text-center" style="margin: 10px">
              <md-divider></md-divider>
            </li>
            <li>
              <a href="javascript:void(0)" @click="logout">
                <i class="material-icons">exit_to_app</i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </drop-down>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      name: localStorage.getItem("user")
    }
  },
  methods: {
    to(name) {
      this.$router.push({ name: name });
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      this.to("login");
    },
    profile() {
      this.to("profile");
    }
  }
};
</script>

<style>
.name {
  display: block;
  margin: 10px;
}
.avatar {
  display: block;
  margin: 10px;
}
</style>
