import { BlitzPage } from "@blitzjs/next"
import React from "react"
import Layout from "src/core/layouts/Layout"
import styles from "src/styles/Home.module.css"
import { GameSetupAccordion } from "src/tools/components/GameSetupAccordion"

const ToolsIndex: BlitzPage = () => {
  return (
    <Layout title="Tools">
      <div className={`${styles.container} bg-gold-white-diagonal-gradient`}>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.body}>
              <div className={styles.instructions}>
                <h1 className="text-2xl centered">Game Tools</h1>

                <ul id="tool-list">
                  <li>
                    <GameSetupAccordion />
                  </li>
                  <li>die roller</li>
                  <li>deck shuffler</li>
                  <li>card drawer</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <span>Powered by</span>
          <a
            href="https://ladderly.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.textLink}
          >
            ladderly.io
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default ToolsIndex
