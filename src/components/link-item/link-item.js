import React from 'react';
import PropTypes from 'prop-types';

import styles from './link-item.module.scss';

const LinkItem = ({ Icon, iconType, text }) => {
  return (
    <a className={`${styles.link}  p-4  pl-5  pr-5`} href="#">
      <Icon type={iconType} />
      <span
        className={`${
          iconType === 'primary' ? styles.colorActive : `text_color_inactive`
        } text  text_type_main-default  ml-2`}
      >
        {text}
      </span>
    </a>
  );
};

LinkItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  iconType: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default LinkItem;
