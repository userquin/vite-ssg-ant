// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
// import '@/assets/main.scss'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

/**
 * Resolver for Vuetify v3
 *
 * @link https://github.com/vuetifyjs/vuetify
 */
export function VuetifyResolver(): any {
  console.log('resolver?')
  return (name: string) => {
    console.log('resolving?', name)
    if (name.match(/^V[A-Z]/))
      return { importName: name, path: 'vuetify' }
  }
}
