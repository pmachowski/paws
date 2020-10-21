import React from "react"
import { Text as ReactNativeText } from "react-native"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"

import { mergeAll, flatten } from "ramda"

export function Text(props: TextProps) {
  // grab the props
  const { preset = "default", text, children, style: styleOverride, ...rest } = props

  // figure out which content to use
  const content = text || children

  const style = mergeAll(flatten([presets[preset] || presets.default, styleOverride]))

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  )
}
