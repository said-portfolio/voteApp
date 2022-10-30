<template>
    <v-row no-gutters dense>
        <v-col cols="10">
            <v-text-field v-model="getAnswer" />
        </v-col>
        <v-col cols="2">
            <v-btn class="ml-5 mt-2" size="small" icon="mdi-delete-outline" color="danger" @click="handelShowDeleteDialog"/>
        </v-col>
        <v-col cols="2">
            <v-btn class="ml-5 mt-2" size="small" icon="mdi-pencil-outline" color="warning" />
        </v-col>
        <DeleteDialog v-if="showDeleteDialog"/>
    </v-row>
</template>
<script setup>
import { computed, ref } from 'vue'
import DeleteDialog from './dialogs/DeleteDialog.vue';

/* Dialog */
let showDeleteDialog = ref(false)
const handelShowDeleteDialog = () => {
    return showDeleteDialog.value = true
}

/* Answear */
let props = defineProps(['answear'])
const getAnswer = computed(() => {
    return props.answear;
})
</script>