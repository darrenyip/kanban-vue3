<template>
  <div class="h-full flex flex-col grow overflow-auto">
    <!-- kanban name -->
    <h1 class="mb-3 px-6">{{ kb.title }}</h1>
    <!-- board -->
    <div class="flex justify-space">
      <div
        class="p-2"
        v-for="columnKey in Object.keys(kb.content)"
        :key="index"
      >
        <div>{{ columnKey }}</div>
        <draggable
          class=""
          v-model="kb.content[columnKey]"
          group="itemList"
          @change="log"
          itemKey="title"
        >
          <template #item="{ element }">
            <div>{{ element.title }}</div>
          </template>
        </draggable>
      </div>
      <!-- <draggable v-model="kb.done" group="people" @change="log" itemKey="name">
        <template #item="{ element }">
          <div>{{ element.title }}</div>
        </template>
      </draggable> -->
    </div>
  </div>
</template>
<script setup>
import { watch, reactive } from "vue";
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
    console.log("route id changed", kb);
  }
);
</script>
