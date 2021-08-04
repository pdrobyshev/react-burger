import React, { FC } from 'react';

import styles from './modal-overlay.module.scss';

interface IModalOverlayProps {
  onModalClose: () => void;
}

const ModalOverlay: FC<IModalOverlayProps> = ({ onModalClose }) => (
  <div className={styles.overlay} onClick={onModalClose} />
);

export default ModalOverlay;
