import React from "react"
import { View, ViewStyle, Text, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Icon } from "../icon/icon"
import { color, spacing } from "../../theme"

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const { onLeftPress, onRightPress, rightIcon, leftIcon, headerText, style, titleStyle } = props
  const header = headerText || ""

  return (
    <View style={{ ...styles.root, ...style }}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon style={styles.icon} icon={leftIcon} />
        </Button>
      ) : (
        <View style={styles.left} />
      )}
      <View style={styles.titleMiddle}>
        <Text style={{ ...styles.title, ...titleStyle }}>{header}</Text>
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon style={styles.icon} icon={rightIcon} />
        </Button>
      ) : (
        <View style={styles.right} />
      )}
    </View>
  )
}

const styles = {
  root: {
    flexDirection: "row",
    paddingHorizontal: spacing.normal,
    alignItems: "center",
    paddingTop: spacing.big,
    paddingBottom: spacing.big,
    justifyContent: "flex-start",
  } as ViewStyle,
  title: {
    textAlign: "center",
  } as TextStyle,
  titleMiddle: {
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  left: {
    width: spacing.large,
  } as ViewStyle,
  right: {
    width: spacing.large,
  } as ViewStyle,
  icon: {
    fontSize: 25,
    color: color.text,
  } as TextStyle,
}
