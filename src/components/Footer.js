import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
          <a href="">
              <InstagramIcon />
          </a>
          <a href="">
              <TwitterIcon />
          </a>
          <a href="">
              <FacebookIcon />
          </a>
          <a href="">
              <LinkedinIcon />
          </a>
          </div>
          <p>&copy; 2023 singhsujal466@gmail.com</p>
    </div>
  )
}

export default Footer
