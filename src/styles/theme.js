import { createTheme } from '@material-ui/core/styles';
import {  responsiveFontSizes } from "@material-ui/core"

let theme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      'cursive',
    ].join(','),
  },});

  theme = responsiveFontSizes(theme, {
    breakpoints: ["xs", "sm", "md", "lg", "xl"],
    factor: 7,
    variants: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "caption",
      "button",
      "overline",
    ],
  })

  export default theme
