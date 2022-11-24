import { defineStore } from "pinia";
import { ref } from "vue";

export const useVoteStore = defineStore("vote", {
  state: () => ({
    question: ref(""),
    options: ref([]),
    isUserSelected: ref(false),
  }),
  getters: {
    getQuestion: (state) => state.question,
    getOptions: (state) => state.options,
    getIsUserSelected: (state) => state.isUserSelected,
    getTotalVote: (state) => state.options.reduce((some, vote) => {
        return some + vote.counter
    }, 0)
  },
  actions: {
    defineQuestion(question) {
      this.question = question;
    },

    addOption(option) {
      this.options.push({
        id: option.id,
        value: option.value,
        counter: option.counter,
      });
    },

    deleteOption(id) {
      this.options = this.options.filter((option) => {
        return option.id !== id;
      });
    },
    editOptionName(id, newValue) {
      return (this.options[id.value].value = newValue);
    },
    doVote(id) {
      const itemId = this.options.findIndex((option) => option.id === id);
      return (this.options[itemId].counter += 1);
    },
    resetAll() {
      (this.question = ""), (this.options = []);
    },
  },
});
