<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ question }}
        </v-card-title>
        <v-card-text class="mt-8">
            <v-radio-group>
                <v-radio :label="`Answear ${ n }`" :value="n" v-for="n in 5" :key="n" />
            </v-radio-group>
        </v-card-text>
        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: end;">
                <v-col cols="4">
                    <v-btn class="voteBtn" prepend-icon="mdi-checkbox-marked-circle-outline" variant="outlined" color="success">
                        Vote
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { useVoteStore } from '@/store';
import { computed } from '@vue/reactivity';

const voteStore = useVoteStore()

const question = computed(() => { 
    return voteStore.getQuestion
})


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