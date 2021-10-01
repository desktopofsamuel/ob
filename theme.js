import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const customTheme = extendTheme({
  config: {
    cssVarPrefix: "dos",
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body:
      "Inter, Noto Sans HK, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
    heading:
      "Inter, Noto Sans HK, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
    mono: "Space Mono, IBM Plex Mono, monospace",
  },
  colors: {
    transparent: "rgba(0,0,0,0)",
    text: {
      100: "lightgray",
      400: "darkgray",
    },
    brand: {
      100: "orange",
      400: "red",
    },
    primary: {
      300: "#33aaff",
      400: "#78c7ff",
      500: "#0077CC",
    },
    secondary: {
      300: "rgb(202,20,20,0.7)",
      400: "#ca1414",
    },
    indigo: {
      100: "#EAF4FA",
      200: "#D6E8F6",
      300: "#BBBFCC",
      400: "#9AB2CD",
      500: "#748cad",
      600: "#546D94",
      700: "#3A507C",
      800: "#253764",
      900: "#162553",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  components: {
    Button: {
      baseStyle: props => ({
        // background: mode('indigo.100', 'indigo.900')(props),
        _hover: {
          textDecoration: "none",
        },
        // _disabled: {
        //   background: mode('primary.500', 'primary.400')(props),
        //   _hover: {
        //     backgroundColor: mode('primary.500', 'primary.400')(props),
        //   },
        // },
      }),
      variants: {
        solid: props => ({
          color: mode("primary.500", "primary.400")(props),
          _hover: {
            // backgroundColor: 'primary.500',
            // color: 'white',
            textDecoration: "none",
          },
        }),
        ghost: props => ({
          background: "none",
          color: mode("primary.500", "white")(props),
          _hover: {
            background: mode("indigo.100", "whiteAlpha.200")(props),
            color: mode("primary.500", "white")(props),
            textDecoration: "none",
          },
        }),
        outline: props => ({
          borderColor: "indigo.200",
        }),
        brand: props => ({
          backgroundColor: mode("primary.500", "primary.400")(props),

          color: "white",
        }),
        disabled: props => ({
          color: "primary.500",
        }),
        defaultProps: {
          // colorScheme: 'indigo',
        },
      },
    },
    Text: {
      baseStyle: props => ({
        transition: "all 100ms ease-in-out",
        // color: mode('red.900', 'whiteAlpha.100')(props),
      }),
    },
    Link: {},
    VStack: {
      baseStyle: {
        align: "flex-start",
        spacing: "8",
        width: "100%",
        color: "primary.500",
      },
    },
    Heading: {
      baseStyle: {
        fontSize: "2xl",
      },
      variants: {
        pagetitle: {
          fontSize: "4xl",
          mt: "0",
          mb: "8",
        },
        title: {
          fontSize: "2xl",
          my: "0",
          lineHeight: "tall",
          paddingBottom: "6px",
          borderBottom: "1.5px dotted rgba(0,0,0,0)",
          transition: "all 0.1s ease-in-out",
          display: "inline",
          _hover: {
            borderBottom: "1.5px dotted darkgrey",
          },
        },
        heading: {
          fontSize: "3xl",
        },
      },
      defaultProps: {
        variant: "pagetitle",
      },
    },
  },
  styles: {
    global: props => ({
      body: {
        mt: "40px",
        lineHeight: "taller",
        background: "black",
      },
      p: {
        color: mode("gray.600", "indigo.300")(props),
        my: "4",
      },
      a: {
        // color: 'primary.500',
        // _hover: {
        //   borderBottomWidth: '1px',
        //   borderBottomColor: 'primary.500',
        //   borderBottomStyle: 'solid',
        // },
      },
      h1: {
        fontSize: "xl",
        fontWeight: "bold",
        mt: "8",
        mb: "4",
      },
      h2: {
        fontSize: "2xl",
        fontWeight: "bold",
        lineHeight: "taller",
        mt: "8",
        mb: "4",
      },
      h3: {
        fontSize: "md",
        fontWeight: "bold",
        mt: "8",
        mb: "4",
      },
      ul: {
        listStyle: "square",
        my: "2",
      },
      li: {
        color: mode("gray.600", "indigo.300")(props),
      },
      iframe: {
        py: "8",
      },
    }),
  },
})

export default customTheme