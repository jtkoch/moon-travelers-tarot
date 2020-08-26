import React from "react"
import Axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Content from '../components/Content'

import styled from 'styled-components'

const Questions = styled.h1`
    padding-bottom: 5%;

    @media (max-width: 500px) {
        font-size: 2.5rem;
    }
`
const Contact = styled.div`
    text-align: center;
    font-size: 2rem;
    padding: 5%;


    @media (max-width: 500px) {
        font-size: 1.25rem;
    }
`
const Fillout = styled.p`
    font-size: 1.5rem;

    @media (max-width: 500px) {
      font-size: .75rem;
`

class ContactPage extends React.Component {

    state = {
      name: '',
      email: '',
      message: '',
      startDate: new Date(),
      time: '',
      sent: false,
      buttonText: 'Send Message'
    }

  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    const date = target.date

    this.setState({
      [name]: value,
      [date]: value,
    })
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        startDate: new Date(),
        time: '',
        buttonText: 'Send Message'
    })
}

formSubmit = (e) => {
  e.preventDefault()

  this.setState({
      buttonText: '...Sending'
  })

  let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      startDate: this.state.startDate,
      time: this.state.time
  }
  
  Axios.post('', data) ////////////////////////////////// <<<<<<<<<<<<-------------- add link to back end here
  .then( res => {
      this.setState({ sent: true }, this.resetForm())
      console.log("Network success " + data.name, data.email)
  })
  .catch( () => {
    console.log('Message not sent')
  })
}

  render() {
    return (
      <Contact className="contact">

        <Questions>
            Want to talk?
        </Questions>

        <Content>
          <Form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            <Form.Group className="message">
              <Form.Label htmlFor="message-input">Your Message</Form.Label>
              <Form.Control as="textarea" rows="8" onChange={e => this.setState({ message: e.target.value })} name="message" type="text" placeholder="Please write your message here" value={this.state.message} required />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-name">Your Name</Form.Label>
              <Form.Control onChange={e => this.setState({ name: e.target.value })} name="name" type="text" placeholder="Your Name" value={this.state.name} />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-email">Your Email</Form.Label>
              <Form.Control onChange={(e) => this.setState({ email: e.target.value })} name="email" type="email" placeholder="your@email.com" required value={this.state.email} />
            </Form.Group>

              <Fillout>
                Only fill out below this line if you would like to schedule an appointment <br></br>
                <FontAwesomeIcon style={{ width: "20px"}}class="downpoint" icon={faHandPointDown}></FontAwesomeIcon>
              </Fillout>

            <Form.Group className="message">
              <Form.Label htmlFor="message-time">Pick a Time</Form.Label>
                <Form.Control onChange={(e) => this.setState({ time: e.target.value })} name="time" type="time" placeholder="Select a time" value={this.state.time} as="select">
                  <option>12:00pm</option>
                  <option>12:30pm</option>
                  <option>1:00pm</option>
                  <option>1:30pm</option>
                  <option>2:00pm</option>
                  <option>2:30pm</option>
                  <option>3:00pm</option>
                  <option>3:30pm</option>
                  <option>4:00pm</option>
                  <option>4:30pm</option>
                  <option>5:00pm</option>
                  <option>5:30pm</option>
                  <option>6:00pm</option>
                  <option>6:30pm</option>
                  <option>7:00pm</option>
                  <option>7:30pm</option>
                  <option>8:00pm</option>
                  <option>8:30pm</option>
                  <option>9:00pm</option>
                  <option>9:30pm</option>
                  <option>10:00pm</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-day">Pick a Day</Form.Label><br></br>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(e) => this.setState({ date: e.target.value })}
                />
            </Form.Group>

            <div className="button--container">
              <Button className="d-inline-block" variant="light" type="submit">{this.state.buttonText}</Button>
            </div>
          </Form>
        </Content>
      </Contact>
    )
  }

}
 
export default ContactPage