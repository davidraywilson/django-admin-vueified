<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import FormInput from '@/components/ui/FormInput.vue'

    const $router = useRouter()
    const $route = useRoute()

    const obj = ref({
        id: 1,
        label: 'Home Page',
        last_updated_ts: '02/12/24',
        slug: 'home-page',
        fields: [
            {
                key: 'label',
                label: 'Label',
                type: 'text',
                required: true,
                readonly: false
            },
            {
                key: 'last_updated_ts',
                label: 'Last Updated Timestanp',
                type: 'date',
                required: true,
                readonly: true
            },
            {
                key: 'slug',
                label: 'Slug',
                type: 'text',
                required: true,
                readonly: true
            },
        ]
    })
</script>

<template>
    <div id='list-view' class='py-6'>

        <Breadcrumbs />

        <div id='form' class='mb-6 p-4 bg-slate-100 rounded-2xl'>

            <div class='input-wrapper mb-4'
              v-for='(field, idx) in obj.fields' :key='idx'>
                <label class='inline-block w-full text-sm mb-2'>
                    {{ field.label }}
                </label>

                <span v-if='field.readonly'
                  class='inline-block italic p-3 bg-slate-50 rounded-2xl'>
                    {{ obj[field.key] }}
                </span>

                <FormInput v-else
                  v-model='obj[field.key]'
                  :type='field.type'
                  background_color='slate-200' />
            </div>

        </div>

        <div id='form-actions'>

            <button class='font-semibold text-white uppercase py-3 px-6 bg-primary rounded-2xl'>
                Save
            </button>

        </div>

    </div>
</template>
