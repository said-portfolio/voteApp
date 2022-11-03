<template>
    <v-row style="min-height: 100%; gap: 5px;" no-gutters>
        <v-col clos="4">
            <LeftSection />
        </v-col>
        <v-col clos="4">
            <CentralSection />
        </v-col>
        <v-col clos="4">
            <RightSection />
        </v-col>
    </v-row>
</template>
<script setup>
import CentralSection from '@/views/CentralSection.vue';
import LeftSection from '@/views/LeftSection.vue';
import RightSection from '@/views/RightSection.vue';
</script>