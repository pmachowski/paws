import { ViewStyle } from "react-native"
import { isNil } from "ramda"
import { color } from "../../theme"

export const offsets = {
  none: 0,
}

export type KeyboardOffsets = keyof typeof offsets

export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: "100%",
    } as ViewStyle,

    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      height: "100%",
      width: "100%",
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   */
  scroll: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: "100%",
    } as ViewStyle,

    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
    } as ViewStyle,
  },
}

export type ScreenPresets = keyof typeof presets

export function isNonScrolling(preset: ScreenPresets) {
  // any of these things will make you scroll
  return isNil(preset) || !preset.length || isNil(presets[preset]) || preset === "fixed"
}
