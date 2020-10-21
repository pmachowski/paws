import React, { useState } from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity } from "react-native"
import { SexSelectorProps } from "./sex-selector.props"
import { Icon, Text } from ".."
import { color, spacing } from "../../theme"

export type SexType = "male" | "female"

export function SexSelector(props: SexSelectorProps) {
  const { preselected, label, onSelect, style, error } = props
  const [selected, setSelected] = useState(preselected)
  const selection = selected || preselected
  console.tron.log(selection)
  const onTap = (sex: SexType) => {
    setSelected(sex)
    onSelect(sex)
  }

  return (
    <View style={styles.container}>
      <Text preset="label" text={label} />
      <View style={{ ...styles.content, ...style }}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => onTap("male")}>
          <View style={{ ...styles.button, ...(selection === "male" ? styles.maleButton : {}) }}>
            <Icon
              style={{ ...styles.icon, ...(selection === "male" ? styles.maleIcon : {}) }}
              icon={"male"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={() => onTap("female")}>
          <View
            style={{ ...styles.button, ...(selection === "female" ? styles.femaleButton : {}) }}
          >
            <Icon
              style={{ ...styles.icon, ...(selection === "female" ? styles.femaleIcon : {}) }}
              icon={"female"}
            />
          </View>
        </TouchableOpacity>
      </View>
      {!!error && <Text preset="error" text={error} />}
    </View>
  )
}

const SIZE = 60

const styles = {
  container: {
    paddingVertical: spacing.medium,
  } as ViewStyle,
  content: {
    flexDirection: "row",
  } as ViewStyle,
  button: {
    opacity: 0.6,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    borderColor: color.line,
    borderWidth: 1,
    backgroundColor: color.background,
    justifyContent: "center",
    marginRight: spacing.medium,
  } as ViewStyle,
  maleButton: {
    opacity: 1,
    borderColor: color.palette.turquoise,
  } as ViewStyle,
  femaleButton: {
    opacity: 1,
    borderColor: color.palette.angry,
  } as ViewStyle,

  icon: {
    fontSize: 40,
    textAlign: "center",
    color: color.line,
  } as TextStyle,
  maleIcon: {
    color: color.palette.turquoise,
  } as TextStyle,
  femaleIcon: {
    color: color.palette.angry,
  } as TextStyle,
}
