import { ref, computed } from "vue";
import { defineStore } from "pinia";
const initialKanbans = [
  {
    id: "001",
    title: "iKidey 发布会",
    todo: [
      {
        title: "场地租赁",
        id: "todo1",
        date: "",
      },
    ],
    done: [],
    inProgress: [],
  },
  { id: "002", title: "iKidey 研发", todo: [], done: [], inProgress: [] },
];

export const useKanBanStore = defineStore("kanban", () => {
  const kanbans = ref(initialKanbans);
  const getKanbanTotal = computed(() => kanbans.value.length);

  function getKanbanById(id) {
    return kanbans.value.find((kb) => id === kb.id);
  }

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
    getKanbanById,
    getKanbanTotal,
    addKanban,
    removeKanban,
  };
});
