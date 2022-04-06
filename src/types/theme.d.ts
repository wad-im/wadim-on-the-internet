import "styled-components"
import theme from "../style/theme"


type ThemeInterface = typeof theme

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface {}
}