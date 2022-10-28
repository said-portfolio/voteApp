<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ question }}
        </v-card-title>
        <v-card-actions v-for="n in options" :key="n">
            <v-row>
                <v-col cols="12">
                    <v-progress-linear :model-value="n.value" :color="n.color" height="25">
                        {{ n.name }} - {{ n.value }} vote(s)
                    </v-progress-linear>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-title class="mt-5 ml-1">
            Total votes: {{ totalVotes }}
        </v-card-title>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';

const question = 'What is your question ?'
const totalVotes = ref(20)
const options = ref([
    { name: 'option 1', value: 10, color: 'primary' },
    { name: 'option 2', value: 50, color: 'secondary' },
    { name: 'option 3', value: 70, color: 'warning' },

    { name: 'option 1', value: 30, color: 'primary' },
    { name: 'option 2', value: 50, color: 'secondary' },
    { name: 'option 3', value: 70, color: 'warning' },

    { name: 'option 1', value: 30, color: 'primary' },
    { name: 'option 2', value: 50, color: 'secondary' },
    { name: 'option 3', value: 70, color: 'warning' },

    { name: 'option 1', value: 30, color: 'primary' },
])
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

.voteBtn {
    min-width: 100%;
}
</style>