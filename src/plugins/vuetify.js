// Styles
import '@mdi/font/css/materialdesignicons.css'
import colors from "vuetify/lib/util/colors";
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.blue.darken1,
          secondary: colors.green.darken1,
          warning: colors.orange.darken1,
          danger: colors.deepOrange.darken1,
        },
      },
    },
  },
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
