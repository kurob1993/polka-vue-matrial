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
            <i class="material-icons">local_post_office</i>
            <p>PESAN</p>
          </md-button>
          <ul class="dropdown-menu dropdown-with-icons">
            <li>
              <a href="#/landing">
                <i class="material-icons">view_day</i>
                <p>Landing Page</p>
              </a>
            </li>
            <li>
              <a href="#/login">
                <i class="material-icons">fingerprint</i>
                <p>Login Page</p>
              </a>
            </li>
            <li>
              <a href="#/profile">
                <i class="material-icons">account_circle</i>
                <p>Profile Page</p>
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
  name: "pesan",
  methods: {
    to(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<style></style>
