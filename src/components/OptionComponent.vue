<template>
    <v-row no-gutters dense>
        <v-col cols="10">
            <v-text-field v-model="getOption" />
        </v-col>
        <v-col cols="1">
            <v-btn class="ma-2" size="small" icon="mdi-delete-outline" color="danger" @click="handleShowDeleteDialog" />
        </v-col>
        <v-col cols="1">
            <v-btn class="ml-3 ma-2" size="small" icon="mdi-pencil-outline" color="warning"
                @click="handleShowEditDialog" />
        </v-col>
        <DeleteDialog v-if="showDeleteDialog" :option="props.option" @close="showDeleteDialog = false" />
        <EditDialog v-if="showEditDialog" :option="props.option" @close="showEditDialog = false" />
    </v-row>
</template>
<script setup>
import { computed, ref } from 'vue'
import DeleteDialog from './dialogs/DeleteDialog.vue';
import EditDialog from './dialogs/EditDialog.vue';

/* Delete dialog */
let showDeleteDialog = ref(false)
const handleShowDeleteDialog = () => {
    return showDeleteDialog.value = true
}

/* Edit dialog */
let showEditDialog = ref(false)
const handleShowEditDialog = () => {
    return showEditDialog.value = true
}

/* Option */
let props = defineProps(['option'])
const getOption = computed(() => {
    return props.option.value;
})
</script>