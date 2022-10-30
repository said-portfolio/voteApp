<template>
    <v-card class="card">
        <!-- Question -->
        <v-card-title>
            <v-row no-gutters>
                <v-col cols="12">
                    <v-text-field label="Question" v-model="newQuestion" placeholder="What is your Name ?" clearable
                        @focusout="handelSetNewQuestion" />
                </v-col>
            </v-row>
        </v-card-title>

        <v-card-text>
            <!-- Answear -->
            <v-row no-gutters class="mb-10">
                <v-col cols="10">
                    <v-text-field label="Answear" v-model="newAnswear" placeholder="Type an answer" clearable />
                </v-col>
                <v-col cols="2">
                    <v-btn class="ml-5 mt-2" size="small" icon="mdi-playlist-plus" color="secondary" @click="handerAddNewAnswear"/>
                </v-col>
            </v-row>

            <!-- list of answears -->
            <div no-gutters v-for="(answear, id) in answears" :key="id">
                <AnswearComponent :answear="answear.value"/>
            </div>
        </v-card-text>

        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: end;">
                <v-col cols="4">{{ answears.length }}/10 possible answers</v-col>
                <v-col cols="4">
                    <v-btn class="resetBtn" prepend-icon="mdi-reload-alert" variant="outlined" color="danger">
                        Reset
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
<script setup>

import { useVoteStore } from '@/store';
import { v4 as uuid } from 'uuid';
import { ref, computed } from 'vue';
import AnswearComponent from '../AnswearComponent.vue';

const voteStore = useVoteStore()

/* Question */
const newQuestion = ref('')
const handelSetNewQuestion = () => { voteStore.defineQuestion(newQuestion.value) }

/* Answear */
const newAnswear = ref()
const handerAddNewAnswear = () => { voteStore.addAnswear({ id: uuid(), value: newAnswear.value }) }
const answears = computed(() => {
    return voteStore.getAnswears
})

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