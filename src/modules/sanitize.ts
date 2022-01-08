import Vue3Sanitize from "vue-3-sanitize";
import { UserModule } from '~/types'

export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(Vue3Sanitize, {
    allowedTags: ['img', 'p', 'span', 'div', 'video', 'strong', 'i', 'br', 'iframe', 'sup', 'sub']
  })
}
