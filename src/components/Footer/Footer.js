import { memo } from 'react'
import './Footer.css'

const Footer = memo(() => {
  const date = new Date()

  return (
    <footer className='footer'>
      <h4 className='footer__information'>Educational project Yandex.Practicum х BeatFilm.</h4>
      <ul className='footer__links-list'>
        <li className='footer__list-item'>
          <a className='footer__link' href='https://practicum.yandex.ru' target='_blank' rel='noreferrer'>
            Yandex.Practicum
          </a>
        </li>
        <li className='footer__list-item'>
          <a className='footer__link' href='https://github.com' target='_blank' rel='noreferrer'>Github</a>
        </li>
        <li className='footer__list-item'>
          <a className='footer__link' href='https://www.facebook.com' target='_blank' rel='noreferrer'>Facebook</a>
        </li>
      </ul>
      <p className='footer__copyright'>&copy; {date.getFullYear()}</p>
    </footer>
  )
})

export default Footer
