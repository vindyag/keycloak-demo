<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <a :href="loadNotes()" >View Notes</a>
    <p>{{ message }}</p>

  </div>
</template>

<script>
import { fetchData } from '@/services/api';

export default {
  name: 'NotePad',
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async loadNotes() {
      console.log('inside load notes')
      const data = await fetchData();
      if (data) {
        this.message = data;
      }
      console.log('notes loading done..')
    }
  }

};
</script>
