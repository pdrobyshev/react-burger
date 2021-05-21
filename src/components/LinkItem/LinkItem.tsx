import React from 'react';
import styles from './LinkItem.module.scss';

// TODO: удалить :any
//			 добавить prop-types
const LinkItem = ({ Icon, iconType, text }: any) => {
	return (
		<a className={`p-4  pl-5  pr-5  ${styles.link}`} href="#">
			<Icon type={iconType} />
			<span className={`text  text_type_main-default  ml-2 ${styles.text}`}>{text}</span>
		</a>
	);
};

export default LinkItem;
