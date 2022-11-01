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
            <!-- Option -->
            <v-row no-gutters class="mb-10">
                <v-col cols="10">
                    <v-text-field label="Option" v-model="newOption" placeholder="Type an answer" clearable />
                </v-col>
                <v-col cols="2">
                    <v-btn class="ml-5 mt-2" size="small" icon="mdi-playlist-plus" color="secondary"
                        :disabled="isAddNewOptionBtnDisabled" @click="handleAddNewOption" />
                </v-col>
            </v-row>
            <!-- list of Options -->
            <div no-gutters v-for="(option, id) in voteStore.getOptions" :key="id">
                <OptionComponent :option="option" />
            </div>
        </v-card-text>

        <!-- reset btn & options counter -->
        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: end;">
                <v-col cols="4" class="mr-10">{{ voteStore.getOptions.length }}/10 possible answers</v-col>
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
import OptionComponent from '../OptionComponent.vue';
import ResetDialog from '../dialogs/ResetDialog.vue';

const voteStore = useVoteStore()

const showResetAllDialog = ref(false)

/* Question */
const newQuestion = ref('')
const handelSetNewQuestion = () => {
    voteStore.defineQuestion(newQuestion.value)
    newQuestion.value = ''
}

/* Option */
const newOption = ref()
const newCounter = ref(0)

const isAddNewOptionBtnDisabled = computed(() => {
    return voteStore.getOptions.length === 10 || !newOption.value
})

/* Actions */
const handleAddNewOption = () => {
    voteStore.addOption({ id: uuid(), value: newOption.value, counter: newCounter.value })
    newOption.value = null
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