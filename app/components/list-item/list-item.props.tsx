import { ViewStyle } from "react-native"
import { Cat } from "../../models/cat"

/**
 * The properties you can pass to FormRow.
 */
export interface ListItemProps {
  /**
   * Children components.
   */
  item: Cat

  /**
   * Override the container style... useful for margins and padding.
   */
  style?: ViewStyle | ViewStyle[]
}
