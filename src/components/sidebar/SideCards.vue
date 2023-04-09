<script setup>
import SideSingleCard from "./SideSingleCard.vue";
import { useKanBanStore } from "../../stores/kanbans";
import { useRouter, useRoute } from "vue-router";
const kanbanStore = useKanBanStore();

const router = useRouter();
const jumpToKanban = (id) => {
  router.push(`/kanban/${id}`);
};
</script>

<template>
  <div class="flex flex-col text-white">
    <side-single-card
      v-for="kb in kanbanStore.kanbans"
      :title="kb.title"
      key="kb.id"
      @click="jumpToKanban(kb.id)"
    ></side-single-card>
  </div>
</template>
