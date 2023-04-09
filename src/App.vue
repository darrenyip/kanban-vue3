<script setup>
import SideBar from "./components/sidebar/SideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main class="h-[100vh] h-[100dvh] flex overflow-hidden relative">
    <side-bar></side-bar>
    <div class="w-[80vw] h-full flex justify-center overflow-hidden">
      <RouterView />
    </div>
  </main>
</template>
