<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ voteStore.getQuestion }}
        </v-card-title>

        <!-- Options -->
        <v-card-text class="mt-8">
            <v-radio-group v-model="selectedOption">
                <v-radio v-for="option in voteStore.getOptions" :label="option.value" :value="option.id"
                    :key="option.id" />
            </v-radio-group>
        </v-card-text>

        <!-- Vote action-->
        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: flex-end;"
                v-if="voteStore.getOptions.length >= 2">
                <v-col cols="4">
                    <v-btn class="voteBtn" prepend-icon="mdi-checkbox-marked-circle-outline" variant="outlined"
                        color="success" @click="handleVote">
                        Vote
                    </v-btn>
                </v-col>
            </v-row>
            <v-row v-else class="voteMessage">
                <v-col cols="12">
                    <h3>
                        <v-icon icon="mdi-alert-octagram-outline" class="mr-5" color="warning" />Requires at least two
                        options to vote
                    </h3>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>

</template>

<script setup>
import { useVoteStore } from '@/store';
import { ref } from 'vue';

const voteStore = useVoteStore()
const selectedOption = ref(0)

const handleVote = () => {
    voteStore.getOptions.filter((v) => v.id === selectedOption.value ? voteStore.doVote(v.id) : false)
}
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

.voteMessage {
    text-align: center;
    color: #FFA726;
}
</style>