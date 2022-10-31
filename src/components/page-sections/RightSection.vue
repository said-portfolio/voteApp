<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ question }}
        </v-card-title>
        <v-card-actions v-for="n in voteStore.getAnswers" :key="n">
            <v-row>
                <v-col cols="12">
                    <v-progress-linear :model-value="voteStore.getVotes.length" color="blue" height="25">
                        {{ n.value }} - {{ voteStore.getVotes.length }} vote(s)
                    </v-progress-linear>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-title class="cardTitle">
            Total votes: {{ totalVotes }}
        </v-card-title>
    </v-card>
</template>
<script setup>
import { useVoteStore } from '@/store';
import { computed } from 'vue';

const voteStore = useVoteStore()

const question = computed(() => {
    return voteStore.getQuestion
})

const totalVotes = computed(() => {
    return voteStore.getVotes.length
})

/*const options = computed(() => {
    return [
        ...voteStore.getAnswers.map((vote) => {
            return {
                ...vote,
                name: vote.value,
                value: 1,
                color: 'green' 
            } 
        })
    ]
}) */

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