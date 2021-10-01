import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../layout/layout"
import Tag from "./Tag"
import { Heading, Box } from "@chakra-ui/react"

const TagList = ({}) => {
  const data = useStaticQuery(graphql`
    query TagListQuery {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  let tagList = data.allMarkdownRemark.group
  tagList.sort((a, b) => {
    return b.totalCount - a.totalCount
  })

  return (
    <>
      <Heading>Tags</Heading>
      <div>
        {tagList.map(tag => (
          <Box key={tag.fieldValue} display="inline-block">
            <Tag data={tag}>
              #{tag.fieldValue} {tag.totalCount}
            </Tag>
          </Box>
        ))}
      </div>
    </>
  )
}

export default TagList
