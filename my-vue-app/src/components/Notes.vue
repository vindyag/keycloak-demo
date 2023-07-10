<template>
  <div class="welcome">
    <h1>Notes</h1>
    <p>{{ notes }}</p>
  </div>
</template>
<script setup>
</script>


<script>
import { fetchData } from '@/services/api';

export default {
  name: 'NotePad',
  data() {
    return {
      notes: undefined
    };
  },
  methods: {
    async loadNotes() {
      console.log('inside load notes')
      const noteData = await fetchData();
      if (noteData) {
        this.notes = noteData;
      }
      console.log('notes loading done..')
    }
  }

};
</script>
