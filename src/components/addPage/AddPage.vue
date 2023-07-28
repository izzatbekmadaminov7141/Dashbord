<template>
  <h1 class="h1">Add page</h1>
  <div class="add-flex container">
    <input
      type="text"
      class="input"
      placeholder="Full name"
      :value="name"
      @input="name = $event.target.value"
    />

    <select class="select" :value="job" @input="job = $event.target.value">
      <option value="">Job</option>
      <option value="frontend">Front End</option>
      <option value="backend">Back End</option>
      <option value="market">IT Marketing</option>
    </select>
    <input
      type="text"
      class="input"
      placeholder="Position"
      :value="position"
      @input="position = $event.target.value"
    />
    <!-- ... -->
    <div class="radio-buttons-container">
      <div
        class="radio-button"
        v-for="singleGender in genders"
        :key="singleGender.code"
      >
        <input
          name="radio-group"
          :id="'radio-' + singleGender.code"
          class="radio-button__input"
          type="radio"
          v-model="gender"
          :value="singleGender.code"
        />
        <label :for="'radio-' + singleGender.code" class="radio-button__label">
          <span class="radio-button__custom"></span>
          {{ singleGender.description }}
        </label>
      </div>
    </div>
    <!-- ... -->

    <input
      type="date"
      class="select"
      :value="data"
      @input="data = $event.target.value"
    />
    <button @click="AddMode">Add Click</button>
    <i class="fas fa-trash" @click="TrashButton"></i>
  </div>
  <div class="container">
    <Link :worker="workers" />
  </div>
</template>

<script>
import Link from "../ListofAll/List.vue";
export default {
  components: {
    Link,
  },
  data() {
    return {
      name: "",
      job: "",
      position: "",
      gender: "",
      data: "",
      number: 1,
      workers: [],
      genders: [
        {
          code: "female",
          description: "Female",
        },
        {
          code: "male",
          description: "Male",
        },
      ],
    };
  },
  methods: {
    selectedGender(type, option) {
      if (type === "gender") {
        console.log((this.gender = option));
      }
    },
    TrashButton() {
      localStorage.removeItem("workers");
      // workers massivini tozalash
      this.workers = [];
    },
    AddMode() {
      if (
        !this.name ||
        !this.job ||
        !this.position ||
        !this.gender ||
        !this.data
      )
        return;
      const newWorker = {
        name: this.name,
        job: this.job,
        position: this.position,
        gender: this.gender,
        data: this.data,
        number: this.number,
      };
      this.workers.push(newWorker);
      this.name = "";
      this.job = "";
      this.position = "";
      this.gender = "";
      this.data = "";
      this.number = Date.now();
      localStorage.setItem("workers", JSON.stringify(this.workers));
    },
  },
  created() {
    const storedWorkers = localStorage.getItem("workers");
    if (storedWorkers) {
      this.workers = JSON.parse(storedWorkers);
    }
  },
};
</script>

<style scoped>
.fa-trash {
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  background-color: #4c8bf5;
}
button {
  --color: #4c8bf5;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
}

button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

button:hover {
  color: white;
}

button:before {
  top: 100%;
  left: 100%;
  transition: 0.3s all;
}

button:hover::before {
  top: -30px;
  left: -30px;
}
.h1 {
  text-align: center;
  padding: 30px 0;
  color: #333;
}
.input {
  max-width: 190px;
  background-color: #f5f5f5;
  color: #242424;
  padding: 0.15rem 0.5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
}

input:focus {
  border-bottom: 2px solid #4c8bf5;
  border-radius: 4px 4px 2px 2px;
}

input:hover {
  outline: 1px solid lightgrey;
}
.add-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.radio-buttons-container {
  display: flex;
  align-items: center;
  gap: 24px;
}

.radio-button {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.radio-button__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-button__label {
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 10px;
  position: relative;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.radio-button__custom {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #555;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.radio-button__input:checked + .radio-button__label .radio-button__custom {
  transform: translateY(-50%) scale(0.9);
  border: 5px solid #4c8bf5;
  color: #4c8bf5;
}

.radio-button__input:checked + .radio-button__label {
  color: #4c8bf5;
}

.radio-button__label:hover .radio-button__custom {
  transform: translateY(-50%) scale(1.2);
  border-color: #4c8bf5;
  box-shadow: 0 0 10px #4c8bf580;
}
.select {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #242424;
  box-shadow: 0px 10px 20px -18px;
}
.container {
  padding-bottom: 70px;
  border-bottom: 1px solid #242424;
}
</style>
