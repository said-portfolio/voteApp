<template>
    <v-dialog width="30em" :model-value=true persistent>
        <v-card>
            <v-card-title class="ml-1">Remove all data</v-card-title>
            <v-card-subtitle class="ml-1"> Are you sure you want to delete all data ? </v-card-subtitle>
            <v-card-actions class="resetBtn">
                <v-btn prepend-icon="mdi-check" variant="outlined" color="success" @click="handleResetAll">
                    Ok</v-btn>
                <v-btn prepend-icon="mdi-cancel" variant="outlined" color="danger" @click="emit('close')">Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useVoteStore } from '@/store';

const voteStore = useVoteStore()

/* Emit */
const emit = defineEmits(['close'])

/* Action */
const handleResetAll = () => {
    voteStore.resetAll()
    emit('close')
}
</script>

<style scoped>
.resetBtn {
    justify-content: end;
    margin-right: 1%;
}
</style>