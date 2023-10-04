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
      // Получаем сохраненные значения из локального хранилища
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
          // Если редактируется, отображаем сохраненное значение
          return savedItem.inputType === 'text'
            ? savedItem.textValue
            : savedItem.numberValue;
        } else {
          // Если не редактируется, отображаем значение в соответствующем типе
          return savedItem.inputType === 'text'
            ? savedItem.textValue
            : savedItem.numberValue;
        }
      },
      onInput(index, event, inputType) {
        if (inputType === 'text') {
          // Если тип 'text', разрешаем ввод только текста
          event.target.textContent = event.target.textContent.replace(/[^a-zA-Zа-яА-Я\s]/g, '');
        } else if (inputType === 'number') {
          // Если тип 'number', разрешаем ввод только цифр
          event.target.textContent = event.target.textContent.replace(/[^0-9]/g, '');
        }
        
        // Обновляем значение в массиве savedValues
        if (this.savedValues[index].inputType === 'text') {
          this.savedValues[index].textValue = event.target.textContent;
        } else {
          this.savedValues[index].numberValue = event.target.textContent;
        }
        
        // Сохраняем обновленные значения в локальное хранилище
        localStorage.setItem('savedValues', JSON.stringify(this.savedValues));
      },
    },
  };
  </script>
  
  <style scoped>
  /* Стили для добавления линий в таблицу */
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  /* Стили для подсветки при наведении */
  .table-hover tbody tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  /* Стили для редактируемых ячеек */
  td[contenteditable="true"] {
    background-color: #ffffcc;
    border: 1px solid #ccc;
  }
  
  /* Убираем обводку у ячеек, когда они не в фокусе */
  td[contenteditable="true"]:focus {
    outline: none;
  }
  
  /* Адаптивный дизайн для мобильных устройств */
  @media (max-width: 768px) {
    .table-responsive {
      overflow-x: auto;
    }
    .table {
      max-width: 100%;
    }
  }
  </style>
  