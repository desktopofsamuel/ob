import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../layout/layout"
import Menu from "../components/menu"
import { Heading, Text } from "@chakra-ui/react"
import siteConfig from "../../gatsby-config"
import NoteList from "../components/note-list"
import TagList from "../components/TagList"

export default function Home() {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      homeNote: markdownRemark(fields: { slug: { eq: "/home" } }) {
        html
        fields {
          title
          date
        }
        frontmatter {
          tags
        }
      }
      notes: allMarkdownRemark(
        limit: 10
        sort: { fields: fields___date, order: DESC }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
              title
              date
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  return data.homeNote ? (
    <Layout title={data.homeNote.fields.title}>
      <div className="note-area">
        <Heading size="2xl" className="note-title">
          {data.homeNote.fields.title}
        </Heading>
        <div
          className="note-content"
          dangerouslySetInnerHTML={{ __html: data.homeNote.html }}
        ></div>
      </div>
    </Layout>
  ) : (
    <Layout title="Home">
      <Heading size="2xl">{siteConfig.siteMetadata.title}</Heading>
      <p className="lead">{siteConfig.siteMetadata.description}</p>

      <Heading size="lg">Table Of Contents</Heading>
      <Menu />

      <Heading size="lg">Latest Notes</Heading>
      <NoteList notes={data.notes.edges} />

      <br />
      <Link to="/sitemap">See All Notes</Link>
      <TagList />
    </Layout>
  )
}
