<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ voteStore.getQuestion }}
        </v-card-title>
        <v-card-actions v-for="n in voteStore.options" :key="n">
            <v-row>
                <v-col cols="12">
                    <v-progress-linear :model-value="n.value" :color="n.color" height="25">
                        {{ n.name }} - {{ voteStore.getVotes.length }} vote(s)
                    </v-progress-linear>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-title class="cardTitle">
            Total votes: {{ voteStore.getVotes.length }} {{ totalVotePerOption }}
        </v-card-title>
    </v-card>
</template>
<script setup>
import { useVoteStore } from '@/store';

const voteStore = useVoteStore()

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