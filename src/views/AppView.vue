<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { useMainStore } from '@/stores/main_store'
    import Breadcrumbs from '@/components/Breadcrumbs.vue'

    const $route = useRoute()
    const $store = useMainStore()

    const current_app = computed(() => {
        let app
        if ($route.params.app) {
            app = $store.state.apps.filter(x => x.app_str === $route.params.app)[0]
        }

        return app
    })
</script>

<template>
    <div id='app-view' class='py-6'>

        <Breadcrumbs />

        <div class='grid grid-cols-12 gap-4'>

            <div class='col-span-6 p-4 bg-slate-100 rounded-2xl'>

                <h3 class='text-base font-semibold uppercase mb-3'>
                    {{ current_app.app_name }}
                </h3>

                <div class='p-4 bg-slate-200 rounded-2xl'>
                    <div class='grid grid-cols-12 gap-4 mb-3'
                      v-for='model in current_app.models' :key='model.model_str'>

                        <div class='col-span-8'>
                            <RouterLink class='inline-block'
                              :to='{name: "list_view", params: {app: current_app.app_str, model: model.model_str}}'>
                                {{ model.model_name_plural }}
                            </RouterLink>
                        </div>

                        <div class='col-span-4 self-center text-end'>
                            
                            <RouterLink class='inline-block'
                              :to='{name: "add_view", params: {app: current_app.app_str, model: model.model_str}}'>
                                <span class='material-symbols-outlined'>add</span>
                            </RouterLink>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
