import 'styled-components'
import theme from '../theme'

declare module 'styled-componets' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
