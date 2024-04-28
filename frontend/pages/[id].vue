<template>
    <Head>
        <Title>{{ pageData.title }}</Title>
        <Meta :name="pageData.title" :content="pageData.metaKeywords" />
    </Head>
    <div>
        <div v-html="pageData.content"></div>
    </div>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePageStore } from '@/stores/pages'

// const pageData = ref([])
const pageData = computed(() => store.pages)
const router = useRouter()
const store = usePageStore()

onMounted(async () => {
    const id = router.currentRoute.value.params.id
    await store.getPagesById(id)
})

</script>