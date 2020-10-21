import React from "react"
import { Text, TextStyle } from "react-native"
import { color } from "../../theme"
import { IconProps } from "./icon.props"
import { icons } from "./icons"

// export available icons for PropTypes
export const availableIcons = Object.keys(icons)

const glyphs = Object.keys(icons)
  .map((key) => {
    return {
      key,
      value: String.fromCharCode(parseInt(icons[key], 16)),
    }
  })
  .reduce((map, fontType) => {
    map[fontType.key] = fontType.value
    return map
  }, {})

export function Icon(props: IconProps) {
  const { style: styleOverride, icon } = props
  const style: TextStyle = { ...BASE, ...styleOverride }

  return <Text style={style}>{glyphs[icon]}</Text>
}

const BASE: TextStyle = {
  fontFamily: "icomoon",
  fontSize: 30,
  color: color.primary,
  backgroundColor: "transparent",
}
