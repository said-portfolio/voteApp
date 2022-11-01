<template>
    <v-card class="card">
        <v-card-title class="mt-5 ml-3">
            {{ voteStore.getQuestion }}
        </v-card-title>
        <v-card-text class="mt-8">
            <v-radio-group v-model="selectedOption">
                <v-radio v-for="option in voteStore.getOptions" :label="option.value" :value="option.value" :key="option.id" />
            </v-radio-group>
        </v-card-text>
        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: end;">
                <v-col cols="4">
                    <v-btn class="voteBtn" prepend-icon="mdi-checkbox-marked-circle-outline" variant="outlined"
                        color="success" @click="selectedValue">
                        Vote
                    </v-btn>
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

const selectedValue = () => {
    voteStore.getOptions.filter((v) => v.value === selectedOption.value ? voteStore.editOptionCounter(v.value) : false)
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
</style>