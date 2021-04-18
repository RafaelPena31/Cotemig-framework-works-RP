import React from 'react'
import styles from '../../styles/components/navigation/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h1 className={styles.h2}>Contatos</h1>
        <div className={styles.nomes}>
          <div>
            <h2 className={styles.h2}>• Vinicius Benites</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="http://linkedin.com/in/vinícius-benites-carvalho"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)988639816
            </a>
          </div>

          <div>
            <h2 className={styles.h2}>• Vitória</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="https://www.linkedin.com/in/vit%C3%B3ria-santos-b32526206/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)996288567
            </a>
          </div>

          <div>
            <h2 className={styles.h2}>• Rafael Pena</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="http://linkedin.com/in/vinícius-benites-carvalho"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)994802465
            </a>
          </div>

          <div>
            <h2 className={styles.h2}>• Arthur Santiago</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="https://www.linkedin.com/in/arthur-santiago-42b78b1ba/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)999879422
            </a>
          </div>

          <div>
            <h2 className={styles.h2}>• Arthur </h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="http://linkedin.com/in/vinícius-benites-carvalho"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)986261620
            </a>
          </div>

          <div>
            <h2 className={styles.h2}>• Darhos Gabriel</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="http://linkedin.com/in/vinícius-benites-carvalho"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)993750285{' '}
            </a>
          </div>

          <div>
            <h2 className={styles.h2}>• Fernando Rodrigues</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="https://www.linkedin.com/in/darhosgabriel/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)993750285{' '}
            </a>
          </div>
          <div>
            <h2 className={styles.h2}>• Caio Fábio</h2>
            <a
              className={styles.a}
              title="Linkedin"
              href="https://www.linkedin.com/in/caio-fabio-478baa1a8"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin -
            </a>
            <a className={styles.a} title="Telefone" href="#">
              {' '}
              (31)993087574{' '}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
