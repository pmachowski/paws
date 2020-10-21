import { TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  error: {
    ...BASE,
    color: color.error,
  },

  label: {
    fontFamily: typography.secondary,
    color: color.header,
    marginLeft: spacing.small,
    marginVertical: 2,
  } as TextStyle,

  bold: {
    ...BASE,
    fontFamily: typography.primaryBold,
  } as TextStyle,

  light: {
    ...BASE,
    fontFamily: typography.primaryLight,
  } as TextStyle,

  /**
   * Large headers.
   */
  header: {
    ...BASE,
    fontSize: 24,
    fontFamily: typography.secondary,
    color: color.header,
  } as TextStyle,

  headerBold: {
    ...BASE,
    fontSize: 24,
    fontFamily: typography.secondaryBold,
    color: color.header,
  } as TextStyle,

  headerLight: {
    ...BASE,
    fontSize: 24,
    fontFamily: typography.secondaryLight,
    color: color.header,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
