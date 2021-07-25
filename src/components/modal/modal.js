import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modals');
const KEYCODE_ESC = 27;

const Modal = ({ title = '', orderNumber = '', children, onModalClose }) => {
  useEffect(() => {
    const onEscPress = (e) => {
      if (e.keyCode === KEYCODE_ESC) onModalClose();
    };

    document.addEventListener('keydown', onEscPress);

    return () => document.removeEventListener('keydown', onEscPress);
  }, [onModalClose]);

  return createPortal(
    <div className={styles.wrapper}>
      <section className={`${styles.modal}  ${title !== '' ? 'pb-15' : 'pt-15  pb-30'}  p-10`}>
        <div className={`${styles.header}  ${title !== '' ? 'pt-3  pb-3' : 'mb-9'}`}>
          {title && <h2 className={`${styles.title}  text  text_type_main-large`}>{title}</h2>}
          {orderNumber && (
            <h2 className={`${styles.title}  text  text_type_digits-default`}>#{orderNumber}</h2>
          )}
          <span className={styles.icon} onClick={onModalClose}>
            <CloseIcon type="primary" />
          </span>
        </div>

        {children}
      </section>

      <ModalOverlay onModalClose={onModalClose} />
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
