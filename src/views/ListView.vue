<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
    import { useMainStore } from '@/stores/main_store'
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import DataTable from '@/components/ui/DataTable.vue'

    const $router = useRouter()
    const $route = useRoute()
    const $store = useMainStore()

    const headers = ref([
        {
            label: 'ID',
            value: 'id'
        },
        {
            label: 'Label',
            value: 'label'
        },
        {
            label: 'URL',
            value: 'url'
        },
        {
            label: 'Last Updated',
            value: 'last_updated_ts'
        },
        {
            label: '',
            value: 'actions'
        }
    ])

    const items = ref([
        {
            id: 1,
            label: 'Home Page',
            url: '/p/',
            last_updated_ts: '02/12/24',
            app_str: 'page_content',
            model_str: 'page'
        },
        {
            id: 2,
            label: 'About Us',
            url: '/p/about-us',
            last_updated_ts: '02/13/24',
            app_str: 'page_content',
            model_str: 'page'
        },
        {
            id: 3,
            label: 'Shop',
            url: '/p/shop',
            last_updated_ts: '02/13/24',
            app_str: 'page_content',
            model_str: 'page'
        },
        {
            id: 4,
            label: 'Customer Dashboard',
            url: '/p/dashboard',
            last_updated_ts: '02/13/24',
            app_str: 'page_content',
            model_str: 'page'
        },
        {
            id: 5,
            label: 'Contact Us',
            url: '/p/contact-us',
            last_updated_ts: '02/13/24',
            app_str: 'page_content',
            model_str: 'page'
        },
        {
            id: 6,
            label: 'Privacy Policy',
            url: '/p/privacy-policy',
            last_updated_ts: '02/13/24',
            app_str: 'page_content',
            model_str: 'page'
        }
    ])
</script>

<template>
    <div id='list-view' class='py-6'>

        <Breadcrumbs />

        <DataTable
          card_title='Page List'
          :headers='headers'
          :items='items'>
        
            <template #tableContentCell--actions='cell_props'>
                <div class='flex flex-row-reverse'>
                    <RouterLink class='text-secondary'
                      :to='{name: "change_view", params: {app: cell_props.item.app_str, model: cell_props.item.model_str, id: cell_props.item.id}}'>
                        <span class='align-middle'>Edit</span>
                        <span class='align-middle material-symbols-outlined text-[20px] ml-2'>chevron_right</span>
                    </RouterLink>
                </div>
            </template>
        
        </DataTable>

    </div>
</template>
