import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useVoteStore = defineStore('vote', {
  state: () => ({
    question: ref(''),
    options: ref([]),
    // votes: ref([])
  }),
  getters: {
    getQuestion: (state) => state.question,
    getOptions: (state) => state.options,
    // getVotes: (state) => state.votes
  },
  actions: {
    defineQuestion(question) {
      this.question = question;
    },


    addOption(option) {
      this.options.push({ id: option.id, value: option.value, counter: option.counter })
    },


    deleteOption(id) {
      this.options = this.options.filter((option) => { return option.id !== id })
    },
    editOptionName(id, newValue) {
      return this.options[id.value].value = newValue
    },
    vote(name) {
      const itemId = this.options.findIndex((option) => option.value === name)
      return (this.options[itemId].counter += 1)
    },
    resetAll() {
      this.question = '',
      this.options = []
    }
  },
})
