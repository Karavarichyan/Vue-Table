<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>Input Type</th>
                <th>Attribute</th>
                <th>Actions</th>
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
                <td>
                  <button class="btn btn-danger" @click="removeRow(index)">Remove</button>
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
  
      const removeRow = (index) => {
        form.value.splice(index, 1);
      };
  
      const saveValues = () => {
        
        localStorage.setItem('savedValues', JSON.stringify(form.value));
  
       
        router.push('/saved-values');
      };
  
      return {
        form,
        addRow,
        removeRow,
        saveValues,
      };
    },
  };
  </script>
  
  <style scoped>

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
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
  
  
  .btn-danger {
    margin-left: 30px;
    background-color: #d9534f;
    border-color: #d9534f;
    color: #fff;
  }
  
  .btn-danger:hover {
    background-color: #c9302c;
    border-color: #c9302c;
    color: #fff;
  }
  
  
  @media (max-width: 768px) {
   
    
  }
  </style>
  
  