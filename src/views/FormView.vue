<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
    import { useMainStore } from '@/stores/main_store'
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import FormInput from '@/components/ui/FormInput.vue'
    import Calendar from 'primevue/calendar'
    import InputSwitch from 'primevue/inputswitch'

    const $router = useRouter()
    const $route = useRoute()
    const $store = useMainStore()

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
                key: 'is_active',
                label: 'Is active',
                type: 'boolean',
                required: true,
                readonly: false
            },
            {
                key: 'publish_ts',
                label: 'Publish Timestanp',
                type: 'date',
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

    function save_form() {
        $store.UPDATE_STORE_DATA({
            fields: [
                { keys: 'toast.msg', value: 'Success! Object saved.' },
                { keys: 'toast.status', value: true }
            ]
        })
    }
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

                <InputSwitch v-else-if='field.type==="boolean"'
                  v-model='obj[field.key]' />

                <Calendar v-else-if='field.type==="date"'
                  v-model='obj[field.key]'
                  showIcon
                  class='p-3 border-2 border-slate-300 rounded-2xl' />

                <FormInput v-else
                  v-model='obj[field.key]'
                  :type='field.type'
                  class='bg-white border-2 border-slate-300 rounded-2xl' />

            </div>

        </div>

        <div id='form-actions'>

            <button @click='save_form()'
              class='font-semibold text-white uppercase py-3 px-6 bg-primary rounded-2xl'>
                Save
            </button>

        </div>

    </div>
</template>
