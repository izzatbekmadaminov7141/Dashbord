<template>
  <div class="d-flex">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="header">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
export default {
  components: {
    Navbar,
  },
 
};
</script>

<style scoped>
.navbar {
  width: 20vw;
  height: 100vh;
}
.header {
  width: 80vw;
  /* background-color: red; */
}
.d-flex {
  display: flex;
  justify-content: space-between;
}
</style>
