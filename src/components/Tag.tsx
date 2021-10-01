import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { Tag as ChakraTag } from "@chakra-ui/react"

const Tag = ({ data, children }) => {
  return (
    <ChakraTag mr="4px">
      <Link to={`/tags/${kebabCase(data)}`}>{children}</Link>
    </ChakraTag>
  )
}

export default Tag
