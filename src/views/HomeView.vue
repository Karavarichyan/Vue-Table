<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Input Type</th>
              <th>Attribute</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in form" :key="index">
              <td>
                <select class="form-control" v-model="item.inputType">
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </select>
              </td>
              <td>
                <input
                  v-if="item.inputType === 'text'"
                  type="text"
                  class="form-control"
                  v-model="item.textValue"
                />
                <input
                  v-else-if="item.inputType === 'number'"
                  type="number"
                  class="form-control"
                  v-model="item.numberValue"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" @click="addRow">Add Row</button>
        <button class="btn btn-success" @click="saveValues">Save Values</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'DynamicForm',
  setup() {
    const form = ref([
      { inputType: 'text', textValue: '', numberValue: 0 },
      { inputType: 'text', textValue: '', numberValue: 0 },
      { inputType: 'text', textValue: '', numberValue: 0 },
      { inputType: 'text', textValue: '', numberValue: 0 },
    ]);

    const router = useRouter();

    const addRow = () => {
      form.value.push({ inputType: 'text', textValue: '', numberValue: 0 });
    };

    const saveValues = () => {
      // Ваш код для сохранения значений
      // ...

      // Переход на страницу с сохраненными значениями
      router.push('/saved-values');
    };

    return {
      form,
      addRow,
      saveValues,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.card {
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  color: #333;
}
</style>


