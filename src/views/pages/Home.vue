<template>
  <div class="section section-basic">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
          <h2 class="title text-center">Selamat Datang {{ this.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: localStorage.getItem("user")
    }
  }
};
</script>
