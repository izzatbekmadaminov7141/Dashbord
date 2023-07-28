<template>
  <table>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Job</th>
      <th>Position</th>
      <th>Gender</th>
      <th>Date</th>
      <th>Edit</th>
    </tr>
    <tr v-for="work in worker" :key="work.number">
      <td>{{ work.number }}</td>
      <td>{{ work.name }}</td>
      <td>{{ work.job }}</td>
      <td>{{ work.position }}</td>
      <td>{{ work.gender }}</td>
      <td>{{ work.data }}</td>
      <td>
        <a href="#" class="a" @click="onEdit(work)"
          ><i class="fa-regular fa-pen-to-square"></i
        ></a>
      </td>
    </tr>
  </table>
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
      filterType: "all", // Filterlash turi (default: all)
    };
  },
  computed: {
    filteredWorker() {
      if (this.filterType === "all") {
        return this.worker;
      } else {
        return this.worker.filter((item) => item.job === this.filterType);
      }
    },
  },
  methods: {
    onEdit(worker) {
      this.$emit("editEmployee", worker);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin: 20px 0;
  text-align: center;
}
td,
th {
  padding: 10px 0;
}
.a {
  color: #333;
  font-size: 18px;
  transition: all 0.2s linear;
}
.a:hover {
  color: #035195;
  transform: translateY(-5px);
}
</style>
