<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <p>{{ message }}</p>

    <ul>
      <li><a :href="loadNotes()" >View Notes</a></li>
    </ul>
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
