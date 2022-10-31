<template>
    <v-card class="card">
        <!-- Question -->
        <v-card-title>
            <v-row no-gutters>
                <v-col cols="12">
                    <v-text-field label="Question" placeholder="What is your Name ?" v-model="newQuestion" clearable
                        @focusout="handelSetNewQuestion" />
                </v-col>
            </v-row>
        </v-card-title>

        <v-card-text>
            <!-- Answer -->
            <v-row no-gutters class="mb-10">
                <v-col cols="10">
                    <v-text-field label="Answer" v-model="newAnswer" placeholder="Type an answer" clearable />
                </v-col>
                <v-col cols="2">
                    <v-btn class="ml-5 mt-2" size="small" icon="mdi-playlist-plus" color="secondary"
                        :disabled="isAddNewAnswerBtnDisabled" @click="handleAddNewAnswer" />
                </v-col>
            </v-row>
            <!-- list of Answers -->
            <div no-gutters v-for="(answer, id) in answers" :key="id">
                <AnswerComponent :answer="answer" />
            </div>
        </v-card-text>

        <!-- reset btn & answers counter -->
        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: end;">
                <v-col cols="4" class="mr-10">{{ answers.length }}/10 possible answers</v-col>
                <v-col cols="4">
                    <v-btn class="resetBtn" prepend-icon="mdi-reload-alert" variant="outlined" color="danger" @click="showResetAllDialog = true">
                        Reset
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
        <ResetDialog v-if="showResetAllDialog" @close="showResetAllDialog = false"/>
    </v-card>
</template>
<script setup>

import { useVoteStore } from '@/store';
import { v4 as uuid } from 'uuid';
import { ref, computed } from 'vue';
import AnswerComponent from '../AnswerComponent.vue';
import ResetDialog from '../dialogs/ResetDialog.vue';

const voteStore = useVoteStore()

const showResetAllDialog =ref(false)

/* Question */
const newQuestion = ref('')
const handelSetNewQuestion = () => {
    voteStore.defineQuestion(newQuestion.value)
    newQuestion.value = ''
}

/* Answer */
const newAnswer = ref()
const answers = computed(() => {
    return voteStore.getAnswers
})
const isAddNewAnswerBtnDisabled = computed(() => {
    return answers.value.length === 10 || !newAnswer.value
})

/* Actions */
const handleAddNewAnswer = () => {
    voteStore.addAnswer({ id: uuid(), value: newAnswer.value })
    newAnswer.value = null
}
</script>

<style scoped>
.card {
    margin-bottom: 1%;
    min-height: 100%;
}

.cardActions {
    bottom: 0px;
    min-width: 100%;
    position: absolute;
}

.resetBtn {
    min-width: 100%;
}
</style>