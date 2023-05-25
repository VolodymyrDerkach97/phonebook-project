import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectIsLoading } from 'redux/selectors';
import { addContact } from 'redux/operations';

import { nanoid } from 'nanoid';

import { toast } from 'react-toastify';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './AddContactModal.styled';

const portalModal = document.querySelector('#modal-root');

const AddContactModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onSubmitContact = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const onCloseOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onCloseKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseKey);
    return () => window.removeEventListener('keydown', onCloseKey);
  }, [onClose]);

  const nameInputId = nanoid();
  const telInputId = nanoid();

  return createPortal(
    <Overlay onClick={onCloseOverlay}>
      <ModalStyled>
        <form action="" onSubmit={onSubmitContact}>
          <div>
            <label htmlFor={nameInputId}>Name</label>
            <input
              id={nameInputId}
              type="text"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label htmlFor={telInputId}>Number</label>
            <input
              mask="999-999-9999"
              id={telInputId}
              type="tel"
              value={number}
              onChange={({ target: { value } }) => setNumber(value)}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>
            Add contact
          </button>
        </form>
      </ModalStyled>
    </Overlay>,
    portalModal
  );
};

export default AddContactModal;