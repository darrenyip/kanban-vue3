<script setup>
import SideCards from "./SideCards.vue";
import { useKanBanStore } from "../../stores/kanbans";
const kanban = useKanBanStore();
</script>
<template>
  <div
    class="sidebar h-full w-[20vw] flex flex-col border-r-4 border-emerald-400"
  >
    <div class="logo flex w-full p-6">
      <div class="logo-square"></div>
      <div class="logo-text">Kanban</div>
    </div>
    <div class="px-4">总看板 ({{ kanban.getKanbanTotal }})</div>
    <div class="px-4 py-2 h-full">
      <side-cards></side-cards>
    </div>
  </div>
</template>

<style>
.sidebar {
  border-right: 4px solid rgba(52, 211, 153);
}
.logo {
  font-size: 2rem;
  line-height: 45px;
}

.logo-square {
  border: 6px solid rgba(52, 211, 153);
  width: 50px;
  height: 50px;
  margin-right: 5px;
}
</style>
