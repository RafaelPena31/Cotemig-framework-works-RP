import { Button, Drawer } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import React from 'react'
import LogoIMG from '../../assets/logo.png'
import styles from '../../styles/components/navigation/Header.module.css'

function Header(): JSX.Element {
  const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  })

  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          'Início',
          'Nossa investidora',
          'Vantagens',
          'Quem somos',
          'Contato'
        ].map((text, index) => (
          <ListItem button key={text}>
            <a href={`#${index}`}>
              <ListItemText primary={text} />
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <header className={styles.header_body}>
      <img src={LogoIMG} className={styles.logo} />
      <div className={styles.button}>
        <a className={styles.buttonChild} href="#0">
          Início
        </a>
        <a className={styles.buttonChild} href="#1">
          Nossa investidora
        </a>
        <a className={styles.buttonChild} href="#2">
          Vantagens
        </a>
        <a className={styles.buttonChild} href="#3">
          Quem somos
        </a>
        <a className={styles.buttonChild} href="#4">
          Contato
        </a>
      </div>
      <div className={styles.drawerButton}>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon fontSize="large" />
        </Button>
      </div>

      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </header>
  )
}

export { Header }
