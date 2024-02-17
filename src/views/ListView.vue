<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
    import DataTable from '@/components/ui/DataTable.vue'

    const router = useRouter()
    const route = useRoute()

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
            last_updated_ts: '02/12/24'
        },
        {
            id: 2,
            label: 'About Us',
            url: '/p/about-us',
            last_updated_ts: '02/13/24'
        },
        {
            id: 3,
            label: 'Shop',
            url: '/p/shop',
            last_updated_ts: '02/13/24'
        },
        {
            id: 4,
            label: 'Customer Dashboard',
            url: '/p/dashboard',
            last_updated_ts: '02/13/24'
        },
        {
            id: 5,
            label: 'Contact Us',
            url: '/p/contact-us',
            last_updated_ts: '02/13/24'
        },
        {
            id: 6,
            label: 'Privacy Policy',
            url: '/p/privacy-policy',
            last_updated_ts: '02/13/24'
        }
    ])
</script>

<template>
    <div id='list-view' class='py-6'>

        <h1 class='inline-block text-[54px] leading-[1em] font-extrabold uppercase text-gradient mb-4'>
            Pages
        </h1>

        <div class='breadcrumbs flex mb-6'>

            <RouterLink class='breadcrumb text-secondary'
            :to='{name: "home"}'>
                <span class='font-bold uppercase text-[16px] leading-[24px]'>
                    Dashboard
                </span>
            </RouterLink>

            <span class='material-symbols-outlined self-center text-[20px] mx-2'>chevron_right</span>

            <span class='self-center uppercase text-[16px] leading-[24px]'>
                {{ route.params.model }}
            </span>

        </div>

        <DataTable
          card_title='Page List'
          :headers='headers'
          :items='items'>
        
            <template #tableContentCell--actions='cell_props'>
                <RouterLink class='inline-block mx-auto'
                  :to='{name: "form_view", params: {model: "page", id: cell_props.item.id}}'>
                    <span class='material-symbols-outlined'>chevron_right</span>
                </RouterLink>
            </template>
        
        </DataTable>

    </div>
</template>
