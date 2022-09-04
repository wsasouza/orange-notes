import { ThemeProvider } from 'styled-components'
import { ItemsProvider } from './contexts/ItemsContexts'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ItemsProvider>
        <Home />
      </ItemsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
