import { ErrorMessage, Formik } from 'formik'
import React from 'react'
import MaskedInput from 'react-text-mask'
import styles from '../../styles/sections/Fourth.module.css'
import { Button } from '../form/Button'
import { Input } from '../form/Input'

function FourthSection(): JSX.Element {
  const phoneNumberMask = [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]

  return (
    <section id={styles.fourth_section}>
      <div className={styles.title_container} id="4">
        <h1> Queremos te conhecer !! </h1>
        <h3>
          Preencha o formulário abaixo para nossa empresa e deixe também um
          feedback do que achou do nosso site até agora!
        </h3>
      </div>
      <div className={styles.form_container}>
        <Formik
          onSubmit={() => console.log('Submit')}
          initialValues={{
            name: '',
            email: '',
            telefone: '',
            mensagem: ''
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <form>
              <div>
                <Input placeholder="Nome" />
                <ErrorMessage name="Nome" />
              </div>
              <div>
                <Input placeholder="Email" />
                <ErrorMessage name="Email" />
              </div>
              <div>
                <MaskedInput
                  mask={phoneNumberMask}
                  name="phone"
                  onChange={e => {
                    const value = e.target.value || ''
                    setFieldValue('phone', value)
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 36px',
                    marginTop: '10px',
                    borderRadius: '5px',
                    outline: '0',
                    border: '0',
                    textAlign: 'center',
                    fontSize: '15px',
                    lineHeight: '16px'
                  }}
                  placeholder="Telefone"
                />
                <ErrorMessage name="telefone" />
              </div>
              <div>
                <textarea placeholder="Mensagem" />
                <ErrorMessage name="mensagem" />
              </div>
              <Button disabled={isSubmitting}>Enviar</Button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export { FourthSection }
