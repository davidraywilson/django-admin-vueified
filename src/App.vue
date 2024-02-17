<script setup lang="ts">
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
</script>

<template>
    <div class='container mx-auto px-4'>
        <!-- <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav> -->

        <!-- <div id='breadcrumbs'>

            <RouterLink to='/' custom v-slot='{ navigate }'>
                <button class='hover--txt--primary py-2 px-4'
                  @click='navigate' role='link'
                  :disabled='route.path === "/"'>
                    Pages
                </button>
            </RouterLink>

        </div> -->

        <RouterView />
    </div>
</template>
