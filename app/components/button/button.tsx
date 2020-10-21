import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { viewPresets, textPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { mergeAll, flatten } from "ramda"

export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    disabled,
    children,
    onPress,
    ...rest
  } = props

  const viewStyle = mergeAll(
    flatten([
      viewPresets[preset] || viewPresets.primary,
      disabled && viewPresets.disabled,
      styleOverride,
    ]),
  )
  const textStyle = mergeAll(
    flatten([textPresets[preset] || textPresets.primary, textStyleOverride]),
  )

  const content = children || <Text style={textStyle}>{text}</Text>

  return disabled ? (
    <View style={viewStyle}>{content}</View>
  ) : (
    <TouchableOpacity style={viewStyle} activeOpacity={0.7} onPress={onPress} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
