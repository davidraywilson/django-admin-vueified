<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { useMainStore } from '@/stores/main_store';
    import Breadcrumbs from '@/components/Breadcrumbs.vue'

    const $store = useMainStore()
</script>

<template>
    <div id='list-view' class='py-6'>

        <Breadcrumbs />

        <div class='grid grid-cols-12 gap-4'>

            <div class='col-span-6 p-4 bg-slate-100 rounded-2xl'
              v-for='app in $store.state.apps' :key='app.app_str'>

                <h3 class='text-base font-semibold uppercase mb-3'>
                    <RouterLink class='inline-block'
                      :to='{name: "app_view", params: {app: app.app_str}}'>
                        {{ app.app_name }}
                    </RouterLink>
                </h3>

                <div class='p-4 bg-slate-200 rounded-2xl'>
                    <div class='grid grid-cols-12 gap-4 mb-3'
                      v-for='model in app.models' :key='model.model_str'>

                        <div class='col-span-8'>
                            <RouterLink class='inline-block'
                              :to='{name: "list_view", params: {app: app.app_str, model: model.model_str}}'>
                                {{ model.model_name_plural }}
                            </RouterLink>
                        </div>

                        <div class='col-span-4 self-center text-end'>
                            
                            <RouterLink class='inline-block'
                              :to='{name: "add_view", params: {app: app.app_str, model: model.model_str}}'>
                                <span class='material-symbols-outlined'>add</span>
                            </RouterLink>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
