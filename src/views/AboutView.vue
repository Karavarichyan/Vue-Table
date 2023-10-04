
<template>
  <div class="container mt-4">
    <h2>Saved Values:</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Input Type</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(savedItem, index) in savedValues" :key="index">
          <td>{{ savedItem.inputType }}</td>
          <td>{{ savedItem.inputType === 'text' ? savedItem.textValue : savedItem.numberValue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SavedValues',
  props: ['savedValues'],
};
</script>
