import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing.normal,
  paddingHorizontal: spacing.normal,
  borderRadius: spacing.normal,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing.medium,
}

export const viewPresets = {
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
  /**
   * A smaller piece of secondary information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.turquoise,
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 15,
    fontWeight: "bold",
    color: color.palette.white,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.primary,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
