import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useVoteStore = defineStore('vote', {
  state: () => ({
    question: ref(''),
    answears: ref([])
  }),
  getters: {
    getQuestion: (state) => state.question,
    getAnswears: (state) => state.answears,
  },
  actions: {
    defineQuestion(question) {
      this.question = question;
    },
    addAnswear(answear) {
      this.answears.push({ id: answear.id, value: answear.value })
    }
  },
})
