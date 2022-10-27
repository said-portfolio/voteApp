<template>
    <v-card class="card">
        <v-card-title>
            <v-row no-gutters>
                <v-col cols="12">
                    <v-text-field label="Question" placeholder="What is your Name ?" clearable />
                </v-col>
            </v-row>
        </v-card-title>

        <v-card-text>
            <div no-gutters v-for="n in optionsCounter" :key="n">
                <v-row no-gutters dense>
                    <v-col cols="10">
                        <v-text-field clearable />
                    </v-col>
                    <v-col cols="2">
                        <v-btn class="ml-5 mt-2" size="small" icon="mdi-delete" color="danger" />
                    </v-col>
                </v-row>
            </div>

            <v-row no-gutters dense>
                <v-col cols="10">
                    <v-text-field label="Question" placeholder="Type an answer" clearable />
                </v-col>
                <v-col cols="2">
                    <v-btn class="ml-5 mt-2" size="small" icon="mdi-playlist-plus" color="success" />
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="cardActions">
            <v-row no-gutters style="align-items: baseline; justify-content: center;">
                <v-col cols="4">{{ optionsCounter }}/10 possible answers</v-col>
                <v-col cols="4">
                    <v-btn  class="resetBtn" prepend-icon="mdi-reload-alert" variant="outlined" color="danger">
                        Reset
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';

const optionsCounter = ref(5)
</script>

<style scoped>
.card {
    margin-bottom: 1%;
    min-height: 100%;
}

.cardActions {
    position: absolute; /* absolute if row number <5 and relative if === 10 */
    bottom: 0px;
    min-width: 100%;
}
.resetBtn {
    min-width: 100%;
}
</style>