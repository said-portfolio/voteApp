<template>
    <v-card class="card" elevation="4">
        <v-row no-gutters>
            <v-col cols="12">
                <v-text-field label="Question" placeholder="What is your Name ?" clearable />
            </v-col>
        </v-row>

        <div no-gutters v-for="n in optionsCounter" :key="n">
            <v-row no-gutters>
                <v-col cols="10">
                    <v-text-field clearable />
                </v-col>
                <v-col cols="2">
                    <v-btn class="ml-5 mt-2" size="small" icon="mdi-delete" color="danger" />
                </v-col>
            </v-row>
        </div>

        <v-row no-gutters>
            <v-col cols="10">
                <v-text-field label="Question" placeholder="Type an answer" clearable />
            </v-col>
            <v-col cols="2">
                <v-btn class="ml-5 mt-2" size="small" icon="mdi-playlist-plus" color="success" />
            </v-col>
        </v-row>
    </v-card>
    <v-card>
        <v-card-actions>
            <v-row no-gutters class="cardActions">
                <v-col cols="7">{{ optionsCounter }}/10 possible answers</v-col>
                <v-col cols="4">
                    <v-btn prepend-icon="mdi-reload-alert" variant="outlined" color="danger">
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
    padding: 20px;
    margin-bottom: 1%;
    height: 92%;
}

.cardActions {
    margin-top: 0.1%;
    align-items: center;
    justify-content: center;
}
</style>