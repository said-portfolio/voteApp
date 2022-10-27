// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#5DADE2",
          secondary: "#1B4F72",
          success: "#52BE80",
          warning: "#F39C12",
          danger: "#C0392B",
        },
      },
    },
  },
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
