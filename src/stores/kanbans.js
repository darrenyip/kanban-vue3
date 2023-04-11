import { ref } from "vue";
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
      {
        title: "音响设备",
        id: "todo2",
        date: "",
      },
    ],
    done: [
      {
        title: "邀约人群",
        id: "done1",
      },
      {
        title: "门票打印",
        id: "done2",
      },
    ],
    inProgress: [],
  },
  { id: "002", title: "iKidey 研发", todo: [], done: [], inProgress: [] },
];

export const useKanBanStore = defineStore("kanban", () => {
  const kanbans = ref(initialKanbans);

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
    addKanban,
    removeKanban,
  };
});
