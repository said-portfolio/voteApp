<template>
    <v-dialog width="30em" :model-value=true persistent>
        <v-card>
            <v-card-title class="ml-3">Delete {{ getOption }}</v-card-title>
            <v-card-text>
                <v-text-field v-model="getOption" />
            </v-card-text>
            <v-card-actions class="deleteBtn">
                <v-btn prepend-icon="mdi-delete-outline" variant="outlined" color="success"
                    @click="handleDeleteOption(props.option.id)">
                    Delete</v-btn>
                <v-btn prepend-icon="mdi-cancel" variant="outlined" color="danger" @click="emit('close')">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { useVoteStore } from '@/store';
import { computed } from '@vue/reactivity';

/* Emit */
const emit = defineEmits(['close'])

/* Props */
const props = defineProps(['option'])
const getOption = computed(() => {
    return props.option.value;
})

/* Actions */
const voteStore = useVoteStore()
const handleDeleteOption = () => {
    voteStore.deleteOption(props.option.id)
    emit('close')
}
</script>
<style scoped>
.deleteBtn {
    justify-content: flex-end;
    margin-right: 4%;
}
</style>