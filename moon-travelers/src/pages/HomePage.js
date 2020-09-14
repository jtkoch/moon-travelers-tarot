import React from 'react'
import styled from 'styled-components'
import ContactPage from './ContactPage'

import mainLogo from '../images/Logo/logo2.png'
import state from '../images/Content/nebraska-state.png'
import yoga from '../images/Content/yoga.jpg'
import andrea2 from '../images/Content/andrea2.jpg'
import cards from '../images/Content/cards.jpg'
import deck from '../images/Content/deck.jpg'
import skyline from '../images/Content/skyline.jpg'
import house from '../images/Content/house.jpg'
import bee from '../images/Content/bee.jpg'
import nebraska from '../images/Content/nebraska.jpg'
import andrea from '../images/Content/andrea.jpg'



const HomeContainer = styled.div`

`

const HomeLogo = styled.img`
    width: 60%;
    margin: 100px;

    @media (max-width: 500px) {
        width: 80%;
        margin: 25px;
    }
`

const Location = styled.p`
    font-size: 2rem;
    text-shadow: 2px 2px 4px #000000;
    padding: 3%;

    @media (max-width: 500px) {
        font-size: 1.5rem;
        padding: 20%;
    }
`
const State = styled.img`
    margin: 40px;
    width: 100px;

    @media (max-width: 500px) {
        width: 70px;
    }
`
const Info = styled.p`
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px #000000;
    padding: 3%;

    @media (max-width: 500px) {
        font-size: 1rem;
        padding-bottom: 20%;
    }
`
const ImageMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 4px;
    margin-bottom: 100px;
`
const ImageColumn = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;

    @media (max-width: 500px) {
        max-width: 32%;
    }
`
const Images = styled.img`
    vertical-align: text-top;
    width: 100%;
    margin: 4px;
`



export default function HomePage() {
    return (
        <HomeContainer className="home">
            <div className="home-logo" >
                <HomeLogo src={mainLogo} alt="logo"></HomeLogo>
            </div>

            <div>
                <Location>
                    Located in <br></br> 
                    Omaha, Nebraska <br></br>
                    <State src={state} alt="state-outline"/>
                </Location>
                
            </div>
            <Info>
                Services and Pricing: 
                <br></br>
                <br></br>
                Mini Consult (30min) - $35 <br></br>
                Private Reading(45min-1hr) - $60 <br></br>
                Private Dinner/Party(Hourly Rate) - $125 <br></br>
                Pop Ups and Social Events - Prices will vary
                <br></br>
                <br></br>
                Phone readings are also available upon request
                <br></br>
            </Info>

            <ImageMain classNme="row">
                <ImageColumn className="column">
                    <Images src={andrea2} />
                    <Images src={yoga} />
                    <Images src={cards} />
                </ImageColumn>
                <ImageColumn className="column">
                    <Images src={deck} />
                    <Images src={nebraska} />
                    <Images src={skyline} />
                </ImageColumn>
                <ImageColumn className="column">
                    <Images src={bee} />
                    <Images src={andrea} /> 
                    <Images src={house} />
                </ImageColumn>
            </ImageMain>

            <div className="contact">
                <ContactPage />
            </div>
        </HomeContainer>
    )
}
