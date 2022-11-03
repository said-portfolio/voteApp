<template>
    <PageHeader/>
    <v-main>
        <slot />
    </v-main>
    <PageFooter/>
</template>
<script setup>
import PageFooter from './PageFooter.vue';
import PageHeader from './PageHeader.vue';

</script>