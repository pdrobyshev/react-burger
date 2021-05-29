import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modals');
const KEYCODE_ESC = 27;

const Modal = ({ title = '', children, onModalClose }) => {
	const onEscPress = (e) => {
		if (e.keyCode === KEYCODE_ESC) {
			onModalClose();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onEscPress);

		return () => document.removeEventListener('keydown', onEscPress);
	}, []);

	return createPortal(
		<div className={styles.wrapper}>
			<section className={`${styles.modal}  p-10`}>
				<div className={`${styles.header}  ${title === '' ? 'mb-4' : ''}  pt-3  pb-3`}>
					{title && <h2 className={`${styles.title}  text  text_type_main-large`}>{title}</h2>}
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

export default Modal;
