import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal-overlay.module.scss';

const ModalOverlay = ({ onModalClose }) => <div className={styles.overlay} onClick={onModalClose} />;

ModalOverlay.propTypes = {
	onModalClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
