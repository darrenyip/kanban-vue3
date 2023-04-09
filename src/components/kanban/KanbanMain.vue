<template>
  <div class="h-full flex flex-col grow overflow-auto">
    <!-- kanban name -->
    <h1 class="mb-3">{{ kb.title }}</h1>
    <!-- board -->
    <div class="flex justify-space">
      <draggable v-model="list1" group="people" @change="log" itemKey="name">
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
      <draggable v-model="list2" group="people" @change="log" itemKey="name">
        <template #item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
import { useKanBanStore } from "@/stores/kanbans";
import { useRoute } from "vue-router";
import draggable from "vuedraggable";

const route = useRoute();
const store = useKanBanStore();
console.log(store.getKanbanById(route.params.id));
let kb = reactive(store.getKanbanById(route.params.id));
watch(
  () => route.params,
  async (newId, oldId) => {
    kb = store.getKanbanById(route.params.id);
  }
);

let list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);
let list2 = ref([
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
]);
</script>
