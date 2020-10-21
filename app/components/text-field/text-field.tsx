import React from "react"
import { View, TextInput, TextStyle, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { TextFieldProps } from "./text-field.props"
import { mergeAll, flatten } from "ramda"
import { Text } from ".."

/**
 * A component which has a label and an input together.
 */
export class TextField extends React.PureComponent {
  input = null

  focus = () => {
    this.input.focus()
  }

  render() {
    const {
      placeholder,
      label,
      preset = "default",
      style: styleOverride,
      inputStyle: inputStyleOverride,
      error,
      ...rest
    } = this.props as TextFieldProps

    const containerStyle = mergeAll(flatten([styles.container, styleOverride]))
    const inputStyle = mergeAll(
      flatten([styles.input, !!error && styles.inputError, inputStyleOverride]),
    )

    return (
      <View style={containerStyle}>
        <Text preset="label">{label}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={color.input}
          underlineColorAndroid={color.transparent}
          {...rest}
          style={inputStyle}
          ref={(ref) => (this.input = ref)}
        />
        {!!error && (
          <Text style={styles.error} preset="error">
            {error}
          </Text>
        )}
      </View>
    )
  }
}

const styles = {
  container: {
    paddingVertical: spacing.medium,
  } as ViewStyle,

  error: {
    marginLeft: spacing.small,
    marginVertical: 2,
  } as TextStyle,

  input: {
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: spacing.normal,
    fontFamily: typography.primary,
    color: color.dim,
    minHeight: 44,
    fontSize: 18,
    backgroundColor: color.palette.white,
    paddingHorizontal: spacing.small,
  } as TextStyle,

  inputError: {
    borderColor: color.error,
  } as TextStyle,
}
