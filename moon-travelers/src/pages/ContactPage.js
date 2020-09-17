import React from "react"
import Axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Content from '../components/Content'

import styled from 'styled-components'

const Questions = styled.h1`
    padding-bottom: 2%;

    @media (max-width: 500px) {
        font-size: 2.5rem;
    }
`
const Contact = styled.div`
    text-align: center;
    font-size: 1.5rem;
    padding: 5%;


    @media (max-width: 500px) {
        font-size: 1.25rem;
    }
`

class ContactPage extends React.Component {

    state = {
      name: '',
      email: '',
      message: '',
      service: '',
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
        service: '',
        buttonText: 'Message Sent'
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
      service: this.state.service
  }
  
  Axios.post('https://moon-travelers-api.herokuapp.com/v1', data)
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
              <Form.Label htmlFor="message-input">Message</Form.Label>
              <Form.Control as="textarea" rows="6" onChange={e => this.setState({ message: e.target.value })} name="message" type="text" placeholder="Please write your message here" value={this.state.message} required />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-name">Name</Form.Label>
              <Form.Control onChange={e => this.setState({ name: e.target.value })} name="name" type="text" placeholder="Your Name" value={this.state.name} />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-email">Email</Form.Label>
              <Form.Control onChange={(e) => this.setState({ email: e.target.value })} name="email" type="email" placeholder="your@email.com" required value={this.state.email} />
            </Form.Group>
            <Form.Group className="message">
              <Form.Label htmlFor="message-service">Pick a Service</Form.Label>
                <Form.Control onChange={(e) => this.setState({ service: e.target.value })} name="service" type="service" placeholder="Select a service" value={this.state.service} as="select">
                  <option>Please select one...</option>
                  <option>Mini Consult</option>
                  <option>Private Reading</option>
                  <option>Private Dinner/Party</option>
                  <option>Pop Ups and Social Events</option>
                </Form.Control>
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