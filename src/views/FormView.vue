<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
</script>

<template>
    <div id='list-view' class='py-6'>

        <h1 class='inline-block text-[54px] leading-[1em] font-extrabold uppercase text-gradient mb-4'>
            Edit Page
        </h1>

        <div class='breadcrumbs flex mb-6'>

            <RouterLink class='breadcrumb text-secondary'
              :to='{name: "home"}'>
                <span class='font-bold uppercase text-[16px] leading-[24px]'>
                    Dashboard
                </span>
            </RouterLink>

            <span class='material-symbols-outlined self-center text-[20px] mx-2'>chevron_right</span>

            <RouterLink class='breadcrumb text-secondary'
              :to='{name: "list_view", params: {model: "page"}}'>
                <span class='font-bold uppercase text-[16px] leading-[24px]'>
                    Pages
                </span>
            </RouterLink>

            <span class='material-symbols-outlined self-center text-[20px] mx-2'>chevron_right</span>

            <span class='self-center uppercase text-[16px] leading-[24px]'>
                {{ route.params.model }} {{ route.params.id }}
            </span>

        </div>

    </div>
</template>
