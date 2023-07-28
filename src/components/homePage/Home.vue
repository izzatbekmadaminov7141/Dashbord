<template>
  <div class="container">
    <h1>Dashbord</h1>
    <div class="d-flex">
      <div class="box">
        <h2>{{ totalPeople }}</h2>
        <p>total number of people</p>
      </div>
      <div class="box">
        <h2>{{ womenCount }}</h2>
        <p>women</p>
      </div>
      <div class="box">
        <h2>{{ menCount }}</h2>
        <p>men</p>
      </div>
      <div class="box">
        <h2>{{ sectionCount }}</h2>
        <p>number of sections</p>
      </div>
    </div>
    <div class="filter">
      <Filter
        :worker="filteredWorkers"
        @filterTypeChange="onFilterTypeChange"
      />
    </div>
    <List :worker="(filteredWorkers, workers)" @editEmployee="onEditEmployee" />
  </div>
</template>

<script>
import List from "../ListofAll/List.vue";
import Filter from "../Filter/Filter.vue";
export default {
  components: {
    List,
    Filter,
  },
  data() {
    return {
      totalPeople: 0,
      womenCount: 0,
      menCount: 0,
      sectionCount: 0,
      workers: [],
      allWorkers: [],
      filteredWorkers: [],
    };
  },
  created() {
    const getworker = localStorage.getItem("workers");
    const data = JSON.parse(getworker);
    this.workers = JSON.parse(getworker) || [];
    if (data === null) {
      const text = "no info";
    } else {
      this.totalPeople = data.length;
      this.womenCount = data.filter((item) => item.gender === "female").length;
      this.menCount = data.filter((item) => item.gender === "male").length;
      this.sectionCount = [...new Set(data.map((item) => item.job))].length;
    }
  },
  computed: {
    filteredWorkers() {
      if (this.filterType === "all") {
        return this.allWorkers;
      } else {
        return this.allWorkers.filter((item) => item.job === this.filterType);
      }
    },
  },
  methods: {
    AddMode() {
      localStorage.setItem("workers", JSON.stringify(this.workers));
    },
    onFilterEmployees(filteredWorkers) {
      this.filteredWorkers = filteredWorkers;
    },
    onFilterTypeChange(code) {
      this.filterType = code;
    },
    onEditEmployee(selectedWorker) {},
  },
};
</script>

<style scoped>
h1 {
  margin: 30px 0;
  border-bottom: 1px solid #333;
  padding: 10px 0;
}
.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #333;
}
.box {
  width: 25%;
  margin: 0 20px;
  text-align: center;
  padding: 20px;
  background-color: rgb(225, 225, 225);
  border-radius: 5px;
  box-shadow: 15px 15px 15px #3333;
}
.box h2 {
  color: rgb(226, 77, 77);
}
.filter {
  margin: 30px 0;
}
</style>
