<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
</script>

<template>
    <div id='list-view' class='py-6'>

        <h1 class='inline-block text-[54px] leading-[1em] font-extrabold uppercase text-gradient mb-4'>
            Welcome
        </h1>

    </div>
</template>
