<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
    import { useMainStore } from '@/stores/main_store'
    import { usePrimeVue } from 'primevue/config';

    const $router = useRouter()
    const $route = useRoute()
    const $store = useMainStore()

    const PrimeVue = usePrimeVue();
</script>

<template>
    <div class='container mx-auto px-4'>
        <RouterView />

        <!-- <fwb-toast class='fixed top-5 right-5'
          :type='$store.state.toast.type'
          :closable='$store.state.toast.closable'>
            <template #icon>
                
            </template>
            {{ $store.state.toast.msg }}
        </fwb-toast> -->
    </div>
</template>
