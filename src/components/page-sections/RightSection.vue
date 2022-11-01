<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ voteStore.getQuestion }}
        </v-card-title>
        <v-card-actions v-for="(option, id) in voteStore.options" :key="id">
            <v-row>
                <v-col cols="12">
                    <v-progress-linear :model-value="option.counter" :color="colors[id].color" height="25">
                        {{ option.value }} - {{ option.counter }} vote(s)
                    </v-progress-linear>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-title class="cardTitle">
            Total votes: {{ voteStore.getOptions.length }}
        </v-card-title>
    </v-card>
</template>
<script setup>
import { useVoteStore } from '@/store';

const voteStore = useVoteStore()
const colors = [
    { id: 1, color: '#64B5F6' },
    { id: 2, color: '#81C784' },
    { id: 3, color: '#DCE775' },
    { id: 4, color: '#FF8A65' },
    { id: 5, color: '#90A4AE' },
    { id: 6, color: '#FFD54F' },
    { id: 7, color: '#B2FF59' },
    { id: 8, color: '#9575CD' },
    { id: 9, color: '#F06292' },
    { id: 10, color: '#80CBC4' }
]

</script>
<style scoped>
.card {
    margin-bottom: 1%;
    min-height: 100%;
}

.cardTitle {
    bottom: 0px;
    min-width: 100%;
    position: absolute;
}
</style>