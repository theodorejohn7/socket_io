import React, {   } from "react";
import {contacts } from '../contexts/ContactsProvider'
import { Modal, Form, Button } from "react-bootstrap";
 


export default function NewConversationModel() {
    const [46:17]
  return (
    <>
    <Modal.Header closeButton> Create Contact</Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
         {contacts.map(contact => (
<Form.Group controlId={contact.id} key={contact.id}>
    <Form.Check type="checkbox" value={selectedContactIds.includes(contact.id)}
/>
</Form>
}

         ))}
        <Button type="submit">Create</Button>
      </Form>
    </Modal.Body>
  </>
  )
}
