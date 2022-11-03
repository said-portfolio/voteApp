<template>
    <v-card class="card">
        <!-- Question -->
        <v-card-title class="mt-5 ml-3">
            {{ voteStore.getQuestion }}
        </v-card-title>

        <!-- Chart-->
        <v-card-actions v-for="(option, id) in voteStore.options" :key="id">
            <v-row>
                <v-col cols="12">
                    <v-progress-linear :model-value="option.counter" :color="colors[id].color" height="25">
                        {{ option.value }} - {{ option.counter }} vote(s)
                    </v-progress-linear>
                </v-col>
            </v-row>
        </v-card-actions>

        <!-- Vote Counter -->
        <div class="cardTitle">
            <h3>Total votes: <v-chip>{{ voteStore.getTotalVote }}</v-chip>
            </h3>
        </div>
    </v-card>
</template>
<script setup>
import { useVoteStore } from '@/store';

const voteStore = useVoteStore()

const colors = [
    { id: 0, color: '#64B5F6' },
    { id: 1, color: '#81C784' },
    { id: 2, color: '#DCE775' },
    { id: 3, color: '#FF8A65' },
    { id: 4, color: '#90A4AE' },
    { id: 5, color: '#FFD54F' },
    { id: 6, color: '#B2FF59' },
    { id: 7, color: '#9575CD' },
    { id: 8, color: '#F06292' },
    { id: 9, color: '#80CBC4' },
    { id: 10, color: '#8D6E63' }
]

</script>
<style scoped>
.card {
    margin-bottom: 1%;
    min-height: 100%;
}

.cardTitle {
    margin-left: 15px;
    bottom: 13px;
    min-width: 100%;
    position: absolute;
}
</style>