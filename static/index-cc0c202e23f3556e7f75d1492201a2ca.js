import React from "react"
import styles from "./index.module.css"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"

export default ({data}) =>
    <Layout>
        <h1 className={styles.header}>{data.site.siteMetadata.title}</h1>
        <p>Dette er en hardkodet statisk tekst.</p>
        <Link to="/about">About</Link>
    </Layout>

export const query = graphql `query {
    site{
        siteMetadata {
            title
        }
    }
}`;
