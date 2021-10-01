import React from "react"
import Header from "./header"
import { ChakraProvider, Container, Box, Grid } from "@chakra-ui/react"
import customTheme from "../../theme"

export default function Layout({ children, title }) {
  return (
    <>
      <Header title={title} />
      <ChakraProvider theme={customTheme} resetCSS={true}>
        {children}
      </ChakraProvider>
    </>
  )
}
