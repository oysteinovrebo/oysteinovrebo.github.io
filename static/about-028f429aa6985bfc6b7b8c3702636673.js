import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"
import {Link} from "gatsby"

export default () =>
    <Layout>
        <h1 className={styles.header}>About me</h1>
        <p>Developing tomorrow's legacy code today!</p>
        <Link to="/">Home</Link>
    </Layout>
