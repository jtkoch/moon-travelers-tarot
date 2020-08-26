import React from 'react'
import styled from 'styled-components'
import mainLogo from '../images/Logo/logo2.png'

const HomeContainer = styled.div`

`

const HomeLogo = styled.img`
    width: 70%;
    margin-top: 0px;

    @media (max-width: 500px) {
        width: 100%;
    }
`

const Info = styled.p`
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px #000000;
    padding: 10%;

    @media (max-width: 500px) {
        font-size: 1.25rem;
        padding-bottom: 20%;
    }
`

export default function HomePage() {
    return (
        <HomeContainer className="home">
            <HomeLogo src={mainLogo} alt="logo"></HomeLogo>

            <Info>
                Located in <br></br> 
                Omaha, Nebraska <br></br>
                <br></br>
                Services and Pricing: <br></br>
                Mini Consult (30min) - $35 <br></br>
                Private Reading(45min-1hr) - $60 <br></br>
                Private Dinner/Party(Hourly Rate) - $125 <br></br>
                Pop Ups and Social Events - Prices will vary
                <br></br>
                <br></br>
                Phone readings are also available upon request
                <br></br>

                
            </Info>
        </HomeContainer>
    )
}
