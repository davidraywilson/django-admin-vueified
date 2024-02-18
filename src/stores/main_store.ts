import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const state = ref({
        apps: [
            {
                app_name: 'Page Content',
                app_str: 'page_content',
                models: [
                    {
                        model_str: 'navigation_link',
                        model_name: 'Navigation Link',
                        model_name_plural: 'Navigation Links'
                    },
                    {
                        model_str: 'page',
                        model_name: 'Page',
                        model_name_plural: 'Pages'
                    },
                    {
                        model_str: 'page_section_group',
                        model_name: 'Page Section Group',
                        model_name_plural: 'Page Section Groups'
                    },
                    {
                        model_str: 'page_section',
                        model_name: 'Page Section',
                        model_name_plural: 'Page Sections'
                    }
                ]
            },
            {
                app_name: 'Products',
                app_str: 'product',
                models: [
                    {
                        model_str: 'product',
                        model_name: 'Product',
                        model_name_plural: 'Products'
                    },
                    {
                        model_str: 'product_category',
                        model_name: 'Product Category',
                        model_name_plural: 'Product Catgories'
                    }
                ]
            }
        ]
    })

    return { state }
})
