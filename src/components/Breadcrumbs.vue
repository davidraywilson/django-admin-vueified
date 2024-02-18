<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { useMainStore } from '@/stores/main_store'

    const $route = useRoute()
    const $store = useMainStore()

    const current_app = computed(() => {
        let app
        if ($route.params.app) {
            app = $store.state.apps.filter(x => x.app_str === $route.params.app)[0]
        }

        return app
    })

    const current_model = computed(() => {
        let model
        if ($route.params.app && $route.params.model) {
            for (let app of $store.state.apps) {
                if (app.app_str === $route.params.app) {
                    for (let mdl of app.models) {
                        if (mdl.model_str === $route.params.model) {
                            model = mdl
                            break
                        }
                    }

                    if (model) break
                }
            }
        }

        return model
    })

    const page_title = computed(() => {
        if (current_model.value) {
            let route_title = $route.meta.title ? `${$route.meta.title} ` : ''
            return `${route_title}${current_model.value.model_name}`
        } else if (current_app.value) {
            return current_app.value.app_name
        } else {
            return $route.meta.title
        }
    })
</script>

<template>
    <div class='mb-6'>

        <h1 class='inline-block text-[54px] leading-[1em] font-extrabold uppercase text-gradient'>
            {{ page_title }}
        </h1>

        <div v-if='current_app || current_model'
          class='breadcrumbs mt-4 mb-6'>

            <RouterLink class='breadcrumb align-middle text-secondary'
              :to='{name: "home"}'>
                <span class='font-semibold uppercase text-[16px] leading-[24px]'>
                    Dashboard
                </span>
            </RouterLink>

            <span v-if='current_app'>
                <span class='align-middle material-symbols-outlined text-[20px] mx-2'>
                    chevron_right
                </span>

                <RouterLink v-if='current_model'
                  class='breadcrumb align-middle text-secondary'
                  :to='{name: "app_view", params: {app: current_app.app_str}}'>
                    <span class='font-semibold uppercase text-[16px] leading-[24px]'>
                        {{ current_app.app_name }}
                    </span>
                </RouterLink>

                <span v-else
                  class='align-middle uppercase text-[16px] leading-[24px]'>
                    {{ current_app.app_name }}
                </span>
            </span>

            <span v-if='current_model'>
                <span class='align-middle material-symbols-outlined text-[20px] mx-2'>
                    chevron_right
                </span>

                <RouterLink v-if='$route.params.id'
                  class='breadcrumb align-middle text-secondary'
                  :to='{name: "list_view", params: {app: current_app.app_str, model: current_model.model_str}}'>
                    <span class='font-semibold uppercase text-[16px] leading-[24px]'>
                        {{ current_model.model_name_plural }}
                    </span>
                </RouterLink>

                <span v-else class='align-middle uppercase text-[16px] leading-[24px]'>
                    {{ current_model.model_name_plural }}
                </span>
            </span>

            <span v-if='$route.params.id'>
                <span class='align-middle material-symbols-outlined text-[20px] mx-2'>
                    chevron_right
                </span>

                <span class='align-middle uppercase text-[16px] leading-[24px]'>
                    {{ $route.meta.title }}
                </span>
            </span>

        </div>

    </div>
</template>
