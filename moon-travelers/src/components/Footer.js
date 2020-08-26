import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

const StickyFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 1%;
`

const Site = styled.div`
  font-size: 15px;
  color: #a582b8;

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 5px;
  }
`
const Social = styled.a`
  margin: 10px;
  color: #a582b8;
`

function Footer() {
  return (
    <StickyFooter className="mt-5">
          <Site>
            This site was made by Jensen Koch.
          </Site>
          <div>
            <Social href="https://www.facebook.com/Moon-Travelers-Tarot-220673835218164" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Social>
            <Social href="https://www.instagram.com/dunnette89/" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Social>
          </div>
    </StickyFooter>
  )
}
 
export default Footer