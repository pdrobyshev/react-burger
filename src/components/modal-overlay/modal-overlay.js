import React from 'react';

import styles from './modal-overlay.module.scss';

const ModalOverlay = ({ onModalClose }) => <div className={styles.overlay} onClick={onModalClose} />;

export default ModalOverlay;
