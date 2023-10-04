<template>
    <div class="container mt-4">
      <h2>Saved Values:</h2>
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th v-for="(savedItem, index) in savedValues" :key="index">{{ savedItem.inputType }}</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td
                v-for="(savedItem, index) in savedValues"
                :key="index"
                @click="editValue(index)"
                :contenteditable="editableIndex === index"
                :inputmode="savedItem.inputType === 'number' ? 'numeric' : 'text'"
                @input="onInput(index, $event, savedItem.inputType)"
              >
                {{ getValue(savedItem, index) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SavedValues',
    data() {
      return {
        savedValues: [],
        editableIndex: -1,
      };
    },
    created() {
      
      const savedValuesJSON = localStorage.getItem('savedValues');
      if (savedValuesJSON) {
        this.savedValues = JSON.parse(savedValuesJSON);
      }
    },
    methods: {
      editValue(index) {
        this.editableIndex = index;
      },
      getValue(savedItem, index) {
        if (this.editableIndex === index) {
        
          return savedItem.inputType === 'text'
            ? savedItem.textValue
            : savedItem.numberValue;
        } else {
        
          return savedItem.inputType === 'text'
            ? savedItem.textValue
            : savedItem.numberValue;
        }
      },
      onInput(index, event, inputType) {
        if (inputType === 'text') {
         
          event.target.textContent = event.target.textContent.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
        } else if (inputType === 'number') {
          
          event.target.textContent = event.target.textContent.replace(/[^0-9]/g, '');
        }
        
       
        if (this.savedValues[index].inputType === 'text') {
          this.savedValues[index].textValue = event.target.textContent;
        } else {
          this.savedValues[index].numberValue = event.target.textContent;
        }
        
      
        localStorage.setItem('savedValues', JSON.stringify(this.savedValues));
      },
    },
  };
  </script>
  
  <style scoped>
 
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  
  .table-hover tbody tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  
  td[contenteditable="true"] {
    background-color: #ffffcc;
    border: 1px solid #ccc;
  }

  td[contenteditable="true"]:focus {
    outline: none;
  }
  

  @media (max-width: 768px) {
    .table-responsive {
      overflow-x: auto;
    }
    .table {
      max-width: 100%;
    }
  }
  </style>
  