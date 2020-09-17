import React from 'react'
import styled from 'styled-components'

import mainLogo from '../images/Logo/logo1.png'
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
    width: 75%;
    margin-top: -4rem;

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 0rem;
    }
`

const Location = styled.p`
    font-size: 2rem;
    padding: 1%;

    @media (max-width: 500px) {
        font-size: 1.25rem;
        padding: 0%;
    }
`
const State = styled.img`
    margin: 20px;
    width: 100px;

    @media (max-width: 500px) {
        width: 70px;
        margin: 10px;
    }
`
const Info = styled.p`
    font-size: 2.5rem;
    padding: 0%;
    line-height: 3.25rem;

    @media (max-width: 500px) {
        font-size: 1.25rem;
        padding-bottom: 5%;
        line-height: 2rem;
    }
`
const BookingContainer = styled.div`
    margin: 4%;
`
const Booking = styled.a`
    color: white;
    font-size: 1.5rem;
    border: 1px solid white;
    padding: 1%;
    border-radius: .5rem;

    @media (max-width: 500px) {
        font-size: .70rem;
        border: 1px solid white;
        padding: 1.5%;
        border-radius: .5rem;
    }

    &:hover {
        background: white;
        text-decoration: none;
        color: black;
        border: 1px solid black;
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
                Mini Consult (15min-20min) - $35 <br></br>
                Private Reading(45min-1hr) - $60 <br></br>
                Private Dinner/Party(Hourly Rate) - $125 <br></br>
                Pop Ups and Social Events - Prices will vary
                <br></br>
                <br></br>
                Phone readings are also available upon request
                <br></br>

                
            </Info>
            
            <BookingContainer>
                <Booking href="#contact">Schedule a Reading!</Booking>
            </BookingContainer>

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

        </HomeContainer>
    )
}
