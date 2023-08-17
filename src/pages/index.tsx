import { Suspense } from "react"
import Link from "next/link"
import Layout from "src/core/layouts/Layout"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import logout from "src/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import styles from "src/styles/Home.module.css"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className={styles.button}
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()} className={styles.button}>
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()} className={styles.loginButton}>
          <strong>Login</strong>
        </Link>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h1>Sign up now*!</h1>
              <div className={styles.buttonContainer}>
                <Suspense fallback="Loading...">
                  <UserInfo />
                </Suspense>
              </div>
              <p>*get early access to authenticated features down the road.</p>
              <p>technically rn u don't need to log in to use the tool.</p>
            </div>

            <div className={styles.body}>
              <div className={styles.instructions}>
                <p>
                  <strong>What now?!</strong>
                </p>

                <div>
                  <div className={styles.code}>
                    <span>1</span>
                    <pre>
                      <code>play now! (game tools)</code>
                    </pre>
                  </div>

                  <div className={styles.code}>
                    <span>2</span>
                    <pre>
                      <code>read the rulebook</code>
                    </pre>
                  </div>

                  <div className={styles.code}>
                    <span>3</span>
                    <pre>
                      <code>card catalog</code>
                    </pre>
                  </div>

                  <div className={styles.code}>
                    <span>4</span>
                    <pre>
                      <code>
                        <Link href="/projects" className={styles.textLink}>
                          join the community
                        </Link>
                      </code>
                    </pre>
                  </div>

                  <div className={styles.code}>
                    <span>5</span>
                    <pre>
                      <code>
                        <Link href="/projects" className={styles.textLink}>
                          contribute
                        </Link>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className={styles.linkGrid}>
                <a
                  href="https://github.com/Vandivier/irl-tcg-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  Github Repo
                  <span className={styles.arrowIcon} />
                </a>
                <a
                  href="https://discord.gg/fAg6Xa4uxc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  Discord Community
                  <span className={styles.arrowIcon} />
                </a>
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

export default Home
