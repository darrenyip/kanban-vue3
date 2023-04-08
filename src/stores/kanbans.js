import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useKanBanStore = defineStore("kanban", () => {
  const kanbans = ref([
    { id: "001", title: "First KB" },
    { id: "002", title: "Second KB" },
  ]);
  const getKanbanTotal = computed(() => kanbans.value.length);
  const getKanban = computed(() => kanbans.value);
  const getKanbanTotalWithName = computed(() =>
    kanbans.value.map((kb) => {
      return { id: kb.id, title: kb.title };
    })
  );

  function addKanban(newKanban) {
    kanbans.push(newKanban);
  }

  function removeKanban(id) {
    const index = kanban.value.findIndex((kb) => kb.id === id);
    if (index > 0) {
      kanban.splice(index);
    }
  }
  return {
    kanbans,
    getKanbanTotal,
    getKanbanTotalWithName,
    addKanban,
    removeKanban,
  };
});
