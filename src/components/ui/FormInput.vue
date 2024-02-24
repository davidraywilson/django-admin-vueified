<script setup lang='ts'>
    import { ref, computed } from 'vue'

    const model = defineModel()

    const props = defineProps({
        label: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        },
        type: {
            type: String,
            default: 'text',
            required: false
        },
        class: {
            type: String,
            required: false,
            default: 'bg-slate-100 dark:bg-slate-500 border-2 border-slate-200 dark:border-slate-600 rounded-2xl'
        },
        prepend_icon: {
            type: String,
            required: false
        },
        append_icon: {
            type: String,
            required: false
        }
    })

    const focused = ref(false)
</script>

<template>
    <div class='form-input-wrapper'>

        <label v-if='props.label' class='inline-block mb-1'>{{ props.label }}</label>

        <div class='form-input flex border-2 rounded-2xl overflow-hidden'
          :class='props.class'>

            <div v-if='props.prepend_icon'
              class='form-input--prepend-icon flex-none p-2'>
                <span class='align-middle material-symbols-outlined'>
                    {{ props.prepend_icon }}
                </span>
            </div>

            <div class='form-input--input grow p-2'>
                <input v-model='model'
                  :type='props.type'
                  :placeholder='props.placeholder'
                  class='align-middle w-full h-8 bg-transparent focus:outline-none'
                  @focus='focused = true'
                  @blur='focused = false' />
            </div>

            <div v-if='props.append_icon'
              class='form-input--append-icon flex-none px-3 py-2'>
                <span class='align-middle material-symbols-outlined'>
                    {{ props.append_icon }}
                </span>
            </div>

        </div>

    </div>
</template>
