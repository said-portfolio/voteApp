<template>
    <v-card class="card">
        <v-card-title>
            <v-row no-gutters>
                <v-col cols="12">
                    <v-text-field label="Question" v-model="question" placeholder="What is your Name ?" clearable />
                </v-col>
                <v-btn @click="handelSetQuestion">set question</v-btn> <!--handlerSetQuestion can be managed by native focusout-->
            </v-row>
        </v-card-title>

        <v-card-text>
            <div no-gutters v-for="n in optionsCounter" :key="n">
                <v-row no-gutters dense>
                    <v-col cols="10">
                        <v-text-field clearable />
                    </v-col>
                    <v-col cols="2">
                        <v-btn class="ml-5 mt-2" size="small" icon="mdi-delete" color="danger" />
                    </v-col>
                </v-row>
            </div>

            <v-row no-gutters class="mb-10">
                <v-col cols="10">
                    <v-text-field label="Question" placeholder="Type an answer" clearable />
                </v-col>
                <v-col cols="2">
                    <v-btn class="ml-5 mt-2" size="small" icon="mdi-playlist-plus" color="success" />
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: end;">
                <v-col cols="4">{{ optionsCounter }}/10 possible answers</v-col>
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
import { ref } from 'vue';

const voteStore = useVoteStore()

const optionsCounter = ref(0)

const question = ref('')
const handelSetQuestion = () => { voteStore.defineTopicQuestion(question.value) }

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