<template>
    <v-card class="header-container">
        <!-- Question -->
        <v-card-actions>
            <v-row no-gutters class="header">
                <v-col cols="3" class="ml-5">
                    <h1>Sire vote-a-lot</h1>
                </v-col>
                <v-col cols="5">
                    <v-text-field label="Question" maxlength="80" counter :rules="[rules.counter]"
                        placeholder="Whet is your question? (Press 'Enter' button to validate)" v-model="newQuestion"
                        clearable @keydown.enter="handelSetNewQuestion" :disabled="voteStore.isUserSelected" />
                </v-col>

                <!-- User Role -->
                <v-col cols="3">
                    <v-checkbox class="role" color="checkbox" v-model="voteStore.isUserSelected">User</v-checkbox>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
    <v-divider></v-divider>
</template>
<script setup>
import { ref } from 'vue';
import { useVoteStore } from '@/store';

const voteStore = useVoteStore()

/* Question */
const newQuestion = ref('')
const handelSetNewQuestion = () => {
    voteStore.defineQuestion(newQuestion.value)
    newQuestion.value = ''
}

/* Validation rules */
const rules = ref({
    counter: value => value.length < 80 || 'Max 80 characters',
})

</script>
<style scoped>
.header {
    margin-top: 1em;
}

.header-container {
    background-color: #F5F5F5;
}

.role {
    display: flex;
    justify-content: flex-end;
    font-size: 1.4em;
}
</style>