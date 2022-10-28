import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useVoteStore = defineStore('vote', {
  state: () => ({
    topicQuestion: ref('')

  }),
  getters: {
    getTopicQuestion: (state) => state.topicQuestion,
  },
  actions: {
    defineTopicQuestion(question) {
      this.topicQuestion = question;
    },
  },
})
