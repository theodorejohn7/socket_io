import React from "react";
import { useContacts } from "../contexts/ContactsProvider";
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import {useConversations} from '../contexts/ConversationsProvider'


export default function NewConversationModel({closeModal}) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts} = useContacts()
  const {createConversations} = useConversations()
function handleSubmit(e){
  e.preventDefault();

  createConversations(selectedContactIds)
  closeModal()
}

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
      return[...prevSelectedContactIds, contactId]
      }

    });
  }
  return (
    <>
      <Modal.Header closeButton> Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
