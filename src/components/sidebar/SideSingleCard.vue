<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <div class="single-card w-full mb-6 p-1">
    <div class="title">{{ title }}</div>
  </div>
</template>
<style>
.single-card {
  border: 2px solid white;
}
</style>
