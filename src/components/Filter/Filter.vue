<template>
  <div class="d-flex">
    <button
      @click="FilterPage(btn.code)"
      class="btn"
      v-for="btn in buttonArrays"
      :key="btn.code"
    >
      {{ btn.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    worker: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      buttonArrays: [
        {
          name: "All Employees",
          code: "all",
        },
        {
          name: "Front-End",
          code: "frontend",
        },
        {
          name: "Back-End",
          code: "backend",
        },
        {
          name: "IT Market",
          code: "market",
        },
      ],
    };
  },
  methods: {
    FilterPage(code) {
      this.$emit("filterTypeChange", code);
    },
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.btn {
  cursor: pointer;
  font-size: 17px;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #333;
  text-transform: uppercase;
  position: relative;
  transition: 0.2s ease;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: #333;
  transition: 0.2s ease;
}

.btn:hover {
  color: #fff;
  transition-delay: 0.2s;
}

.btn:hover::before {
  width: 100%;
}

.btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background-color: #333;
  transition: 0.2s ease;
  z-index: -1;
}

.btn:hover::after {
  height: 100%;
  transition-delay: 0.2s;
  color: #fff;
}
</style>
