<template>
    <v-row style="min-height: 100%; gap: 5px;" no-gutters>
        <v-col clos="4"><LeftSection/></v-col>
        <v-col clos="4" style="background-color: coral;">2</v-col>
        <v-col clos="4" style="background-color: cornflowerblue;">3</v-col>
    </v-row>
</template>
<script setup>
import LeftSection from '../page-sections/LeftSection.vue';
</script>
<style scoped>
.top-bar {
    line-height: 8em;
    background-color: blueviolet;
}
</style>