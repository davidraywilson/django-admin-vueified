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
        background_color: {
            type: String,
            required: false,
            default: 'slate-100'
        },
        background_color_dark: {
            type: String,
            required: false,
            default: 'slate-600'
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

    const background_colors = computed(() => {
        let shade_dark, shade_light
        let bg_parts = props.background_color.split('-')
        let bg_shade = parseFloat(bg_parts[bg_parts.length -1])

        if (!bg_shade) {
            shade_dark = bg_shade + 100
            shade_light = bg_shade + 50
        } else if (bg_shade === 600) {
            shade_dark = bg_shade - 200
            shade_light = bg_shade - 100
        } else {
            shade_dark = bg_shade + 100
            shade_light = bg_shade === 100 ? bg_shade - 50 : bg_shade - 100
        }

        return {
            base_bg: props.background_color,
            shade_dark: props.background_color.replace(bg_shade.toString(), shade_dark.toString()),
            shade_light: props.background_color.replace(bg_shade.toString(), shade_light.toString()),
        }
    })

    const input_border = computed(() => {
        if (focused.value) {
            return 'border-blue-500'
        } else {
            return `border-${background_colors.value.shade_dark}`
        }
    })

    const focused = ref(false)
</script>

<template>
    <div class='form-input-wrapper'>

        <label v-if='props.label' class='inline-block mb-1'>{{ props.label }}</label>

        <div class='form-input flex border-2 rounded-2xl overflow-hidden'
          :class='[`bg-${props.background_color}`, input_border]'>

            <div v-if='props.prepend_icon' class='form-input--prepend-icon flex-none p-2'
              :class='background_colors.shade_light'>
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

            <div v-if='props.append_icon' class='form-input--append-icon flex-none px-3 py-2'
              :class='`bg-${background_colors.shade_light}`'>
                <span class='align-middle material-symbols-outlined'>
                    {{ props.append_icon }}
                </span>
            </div>

        </div>

    </div>
</template>
