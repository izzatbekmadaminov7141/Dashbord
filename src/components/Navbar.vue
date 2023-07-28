<template>
  <nav class="navbar">
    <h1>HR panel</h1>
    <ul>
      <li v-for="link in navLink" :key="link.navname">
        <a :href="link.link">
          <i :class="link.icon"></i>
          <span>{{ link.navname }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLink: [
        {
          navname: "Dashboard",
          link: "#/",
          icon: "fa-solid fa-bars",
        },
        {
          navname: "Add Page",
          link: "#/add",
          icon: "fa-solid fa-user",
        },
        {
          navname: "Edit page",
          link: "#/edit",
          icon: "fa-solid fa-pen",
        },
        {
          navname: "Call",
          link: "tel:+998901427141",
          icon: "fa-solid fa-phone",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  padding: 20px;
  color: #333;
  border-right: 1px solid #33333399;
}
h1 {
  font-size: 40px;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul li {
  margin: 30px 0;
}
ul li a {
  font-size: 20px;
  color: #333;
}
ul li a i {
  margin-right: 10px;
}
</style>
