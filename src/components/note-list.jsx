import React from "react"
import { Link } from "gatsby"
// import "../styles/note.css"
import { Box, Heading, Text } from "@chakra-ui/react"
import Tag from "../components/Tag"

import dayjs from "dayjs"

export default function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((data, index) => (
        <Box className="note-area" key={index} border="1px solid gray.400">
          <Heading size="lg" className="note-title">
            <Link to={`${data.node.fields.slug}`}>
              {data.node.fields.title}
            </Link>
          </Heading>
          <Text className="note-excerpt">{data.node.excerpt}</Text>
          <p className="note-tag-list">
            {data.node.frontmatter && data.node.frontmatter.tags
              ? data.node.frontmatter.tags.map((tag, index) => (
                  <Tag data={tag} key={index}>
                    #{tag}
                  </Tag>
                ))
              : ""}
          </p>
          <Text fontSize="xs" opacity="0.7">
            Published on{" "}
            {dayjs(new Date(data.node.fields.date)).format("DD MMMM, YYYY")}
          </Text>
        </Box>
      ))}
    </div>
  )
}
