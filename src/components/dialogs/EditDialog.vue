<template>
    <v-dialog width="30em" :model-value=true>
        <v-card>
            <v-card-title class="ml-3">Delete {{ answerValue }}</v-card-title>
            <v-card-text>
                <v-text-field v-model="newAnswer" />
            </v-card-text>

            <v-card-actions class="editBtn">
                <v-btn prepend-icon="mdi-pencil-outline" variant="outlined" color="warning"
                    @click="handleEditAnswer(props.answer.id)">
                    Edit</v-btn>
                <v-btn prepend-icon="mdi-cancel" variant="outlined" color="primary" @click="emit('close')">Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { useVoteStore } from '@/store';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const voteStore = useVoteStore()
const newAnswer = ref('')

const answers = computed(() => {
    return voteStore.getAnswers
})

/* Emit */
const emit = defineEmits(['close'])

/* Props */
const props = defineProps(['answer'])
const answerValue = computed(() => {
    return newAnswer.value = props.answer.value;
})
const answerId = computed(() => {
    return answers.value.findIndex((answer) => answer.id === props.answer.id)
})

/* Actions */
const handleEditAnswer = () => {
    voteStore.editAnswer(answerId, newAnswer.value)
    emit('close')
}
</script>
<style scoped>
.editBtn {
    justify-content: end;
    margin-right: 4%;
}
</style>