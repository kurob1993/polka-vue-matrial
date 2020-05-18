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
            <i class="material-icons">school</i>
            <p>PMB</p>
          </md-button>
          <ul class="dropdown-menu dropdown-with-icons">
            <li>
              <a href="#/">
                <i class="material-icons">layers</i>
                <p>All Components</p>
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
  name: "pmb",
  methods: {
    to(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>

<style></style>
