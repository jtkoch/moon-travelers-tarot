import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

import footerlogo from '../images/Logo/logo9.png'

const StickyFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  width: 100%;
  padding: 1%;
`
const SocialContainer = styled.div`
  margin-bottom: 40px;
`
const Social = styled.a`
  margin: 15px;
  color: #a582b8;
`
const Logo = styled.img`
  width: 100px;
  margin-bottom: 40px;
`

function Footer() {
  return (
    <StickyFooter className="mt-5">
          <div>
            <Logo src={footerlogo} />
          </div>
          <SocialContainer>
            <Social href="https://www.facebook.com/Moon-Travelers-Tarot-220673835218164" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Social>
            <Social href="https://www.instagram.com/dunnette89/" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Social>
          </SocialContainer>
    </StickyFooter>
  )
}
 
export default Footer