<template>
    <v-dialog width="30em" :model-value=true persistent>
        <v-card>
            <v-card-title class="ml-3">Edit {{ optionValue }}</v-card-title>
            <v-card-text>
                <v-text-field v-model="newOption" />
            </v-card-text>

            <v-card-actions class="editBtn">
                <v-btn prepend-icon="mdi-pencil-outline" variant="outlined" color="success"
                    @click="handleEditOption(props.option.id)">
                    Edit</v-btn>
                <v-btn prepend-icon="mdi-cancel" variant="outlined" color="danger" @click="emit('close')">Cancel
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
const newOption = ref('')

/* Emit */
const emit = defineEmits(['close'])

/* Props */
const props = defineProps(['option'])
const optionValue = computed(() => {
    return newOption.value = props.option.value;
})
const optionId = computed(() => {
    return voteStore.getOptions.findIndex((option) => option.id === props.option.id)
})

/* Actions */
const handleEditOption = () => {
    voteStore.editOptionName(optionId, newOption.value)
    emit('close')
}
</script>
<style scoped>
.editBtn {
    justify-content: end;
    margin-right: 4%;
}
</style>