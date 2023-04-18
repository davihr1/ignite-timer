import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// guardando o valor inserido que de forma automatica que o ts gerou
type ThemeType = typeof defaultTheme

// criando uma tipagem pro modulo style-components do npm (Sobr'escrevendo uma coisa ja existente)
// quando nao importamos o sc significa que estamos criando um type para style-components
// toda vez que importar o sc em algum arquivo, ele vai puxar oque tiver defindo dentro desse 'declare module'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
