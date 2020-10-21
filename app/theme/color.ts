const palette = {
  offBlack: "#100448",
  white: "#FFFFFF",
  offWhite: "#E6E6E6",
  turquoise: "#58C9DA",
  orange: "#feedd4",
  orangeDarker: "#E4C4B4",
  lightGrey: "#909AAF",
  angry: "#f197a2",
}

/**
 * Roles for colors. Prefer using these over the palette. It makes it easier
 * to change things.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The content container background.
   */
  container: palette.orange,
  /**
   * The main tinting color.
   */
  primary: palette.turquoise,
  /**
   * The main color for forms
   */
  input: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.orangeDarker,
  /**
   * The default color of headers
   */
  header: palette.offBlack,
  /**
   * The default color of text in many components.
   */
  text: palette.lightGrey,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,
}
