import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useVoteStore = defineStore('vote', {
  state: () => ({
    question: ref(''),
    answers: ref([])
  }),
  getters: {
    getQuestion: (state) => state.question,
    getAnswers: (state) => state.answers,
  },
  actions: {
    defineQuestion(question) {
      this.question = question;
    },
    addAnswer(answer) {
      this.answers.push({ id: answer.id, value: answer.value })
    }
  },
})
