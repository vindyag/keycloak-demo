<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { fetchData } from '@/services/api';

export default {
  name: 'Welcome',
  data() {
    return {
      message: '',
    };
  },
  async created() {
    const data = await fetchData();
    if (data) {
      this.message = data;
    }
  },
};
</script>
