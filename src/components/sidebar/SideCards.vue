<script setup>
import SideSingleCard from "./SideSingleCard.vue";
import { useKanBanStore } from "../../stores/kanbans";
const kanbanStore = useKanBanStore();
// console.log(kanbanStore.kanbans);
</script>

<template>
  <div class="flex flex-col text-white">
    <side-single-card
      v-for="kb in kanbanStore.kanbans"
      :title="kb.title"
      key="kb.id"
    ></side-single-card>
  </div>
</template>
