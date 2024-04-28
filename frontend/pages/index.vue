<template>
    <div class="container mx-auto py-5 flex gap-3">
        <ul v-for="page in pages" :key="page.id">
            <li class="list-none">
                <NuxtLink :to="page.id">{{ page.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { usePageStore } from '@/stores/pages';

const store = usePageStore();
const pages = computed(() => store.pages)

onMounted(async () => {
    await store.getPages();
});
</script>