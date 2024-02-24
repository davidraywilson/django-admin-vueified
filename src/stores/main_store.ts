import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const state_backup = ref({})
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
        ],
        toast: {
            status: false,
            title: '',
            msg: 'This is a toast',
            type: 'sucess',
            closable: true
        }
    })

    onMounted(() => {
        state_backup.value = JSON.parse(JSON.stringify(state.value));
    })

    function index(obj, is, value) {
        let new_obj;
        if (typeof is == 'string')
            return index(obj,is.split('.'), value);
        else if (is.length == 1 && value !== undefined)
            return obj[is[0]] = value;
        else if (is.length == 0)
            return obj;
        else
            if (is[0].includes('[')) {
                let split_is = is[0].split('[')
                new_obj = obj[split_is[0]][split_is[1].replace('[', '').replace(']', '')];
            } else {
                new_obj = obj[is[0]];
            }
            return index(new_obj, is.slice(1), value);
    }

    function RESET_STORE() {
        state.value = JSON.parse(JSON.stringify(state_backup.value));
    }

    function UPDATE_STORE_DATA(data) {
        // data === [ { keys: 'key.key.key', value: string || array || number || etc } ]
        // data.keys === string of dot notation keys that represent the hierarchy to the data point you need
        // data.value === whatever you want to set the data point to

        // EXAMPLE:
        // UPDATE_STORE_DATA({
        //     fields: [
        //         { keys: 'snackbar.show', value: false }
        //     ]
        // })

        for (let field of data.fields) {
            index(state.value, field.keys, field.value);
        }
    }

    function UPDATE_STORE_ARRAY_DATA(data) {
        // data === [ { keys: 'key.key.key', value: string || number || etc } ]
        // data.keys === string of dot notation keys that represent the hierarchy to the data point you need
        // data.value === whatever you want to toggle or put in the array || index for del_index || {idx, value} for put_index
        // data.action === what do you need to do with this array || 'toggle' | 'put' | 'put_index' | 'del_index'
        // WHY: UPDATE_STORE_DATA simply allows for replacing the array, this allows manipulation of the array
        // A common use case would be adding/removing a function name from the loading list.

        // EXAMPLE:
        // UPDATE_STORE_ARRAY_DATA({
        //    fields: [
        //       { keys: 'loading_list', value: 'function_name', action: 'toggle' }
        //   ]
        // })

        let data_point;

        for (let field of data.fields) {
            data_point = index(state.value, field.keys);

            if (field.action === 'toggle' && data_point.indexOf(field.value) != -1) {
                data_point = data_point.filter(item => item !== field.value);
            } else if (field.action === 'put_index') {
                data_point.splice(field.value.idx, 1, field.value.value);
            } else if (field.action === 'del_index') {
                data_point.splice(field.value, 1);
            } else {
                data_point.push(field.value);
            }

            index(state.value, field.keys, data_point);
        }
    }

    return {
        state,
        RESET_STORE,
        UPDATE_STORE_DATA,
        UPDATE_STORE_ARRAY_DATA
    }
})
