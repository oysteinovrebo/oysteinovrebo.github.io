import React from "react"
import styles from "./404.module.css"
import Layout from "../components/layout"
import {Link} from "gatsby"

export default () =>
    <Layout>
        <h1 className={styles.header}>Page not found</h1>
        <p>That thing you like is coming back in style</p>
        <Link to="/">Go home, you're drunk!</Link>
    </Layout>
