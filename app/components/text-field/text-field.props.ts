import { TextInputProps, TextStyle, ViewStyle } from "react-native"

export interface TextFieldProps extends TextInputProps {
  /**
   * The Placeholder text
   */
  placeholder?: string

  /**
   * The label text
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: TextStyle | TextStyle[]

  /**
   * Various look & feels.
   */
  preset?: "default"

  /**
   * Validation error message
   */
  error?: string
}
