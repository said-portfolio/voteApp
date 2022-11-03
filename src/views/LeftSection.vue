<template>
    <v-card class="card">
        <v-card-text>
            <!-- Add option -->
            <v-row no-gutters class="mb-10">
                <v-col cols="10">
                    <v-text-field label="Option" v-model="newOption" placeholder="Type an answer" counter clearable
                        maxlength="80" :rules="[rules.counter]" :disabled="voteStore.isUserSelected"
                        @keydown.enter="handleAddNewOption" />
                </v-col>
            </v-row>

            <!-- list of Options -->
            <div no-gutters v-for="(option, id) in voteStore.getOptions" :key="id">
                <OptionComponent :option="option" />
            </div>
        </v-card-text>

        <!-- reset btn & options counter -->
        <v-card-actions class="cardActions">
            <v-row no-gutters style="justify-content: end;">
                <v-col cols="8" class="answersCnt">
                    <h3>
                        <v-chip>{{ voteStore.getOptions.length }}/10</v-chip> possible answers
                    </h3>
                </v-col>
                <v-col cols="4">
                    <v-btn class="resetBtn" prepend-icon="mdi-reload-alert" variant="outlined" color="danger"
                        @click="showResetAllDialog = true" :disabled="voteStore.isUserSelected">
                        Reset
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
        <ResetDialog v-if="showResetAllDialog" @close="showResetAllDialog = false" />
    </v-card>
</template>
<script setup>

import { useVoteStore } from '@/store';
import { v4 as uuid } from 'uuid';
import { ref } from 'vue';
import OptionComponent from '@/components/OptionComponent.vue';
import ResetDialog from '@/dialogs/ResetDialog.vue';

const voteStore = useVoteStore()
const showResetAllDialog = ref(false)

/* Validation rules */
const rules = ref({
    counter: value => value.length < 80 || 'Max 80 characters',
})

/* Option */
const newOption = ref()
const newCounter = ref(0)

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

.answersCnt {
    align-self: center;
    text-align: center;
}
</style>