<script setup lang='ts'>
    import { ref, computed } from 'vue'
    import type {PropType} from 'vue'
    import FormInput from '@/components/ui/FormInput.vue'

    interface Header {
        label?: string,
        value: string
    }

    const props = defineProps({
        card_title: {
            type: String,
            required: false
        },
        headers: {
            type: Array as PropType<Header[]>,
            required: true
        },
        items: {
            type: Array as PropType<any[]>,
            required: true
        },
        background_color: {
            type: String,
            required: false,
            default: 'bg-slate-100'
        },
        background_color_dark: {
            type: String,
            required: false,
            default: 'bg-slate-600'
        }
    })

    const background_colors = computed(() => {
        let headers_bg, row_alt_bg
        if (props.background_color.includes('100')) {
            headers_bg = props.background_color.replace('100', '200')
            row_alt_bg = props.background_color.replace('100', '50')
        }

        return {
            card_bg: props.background_color,
            headers_bg: headers_bg,
            row_alt_bg: row_alt_bg
        }
    })

    const filter_text = ref('')

    const filtered_items = computed(() => {
        let filtered_items = JSON.parse(JSON.stringify(props.items));

        if (filter_text.value) {
            filtered_items = filtered_items.filter(
                (x) => {
                    for (let key of props.headers) {
                        if (x[key.value].toString().toLowerCase().includes(filter_text.value.toLowerCase())) {
                            return true
                        }
                    }

                    return false
                }                 
            )
        }

        return filtered_items;
    })
</script>

<template>
    <div class='data-table rounded-2xl'
      :class='[props.background_color, `dark:${props.background_color_dark}`]'>

        <div class='data-table--header p-4'>
            <slot name='cardHeader'>

                <div class='grid gap-4 grid-cols-2'>

                    <div class='data-table--header--title'>
                        <h4>{{ props.card_title }}</h4>
                    </div>

                    <div class='data-table--header--filter'>
                        <FormInput
                          v-model='filter_text'
                          :placeholder='`Search...`'
                          type='text'
                          background_color='slate-200'
                          append_icon='search' />
                    </div>

                </div>

            </slot>
        </div>

        <div class='data-table--content'>
            <div class='data-table--content--header grid gap-4 p-4'
              :class='["grid-cols-" + props.headers.length, background_colors.headers_bg]'>

                <div v-for='header in props.headers' :key='header.value'
                  class='data-table--content--header--cell'>
                    <slot :name='`tableHeaderCell--${header.value}`'
                      :header='header'>

                        <span>{{ header.label }}</span>

                    </slot>
                </div>

            </div>

            <div class='data-table--content--rows'>

                <div v-for='(item, item_idx) in filtered_items' :key='item.id'
                  class='grid gap-4 p-4'
                  :class='[`grid-cols-${props.headers.length}`, item_idx % 2 === 0 ? background_colors.row_alt_bg : ""]'>
                    <div v-for='header in props.headers' :key='header.value'>

                        <slot
                          :name='`tableContentCell--${header.value}`'
                          :item='item'
                          :header='header'>

                            <span>{{ item[header.value] }}</span>

                        </slot>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
