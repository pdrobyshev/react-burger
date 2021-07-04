import React from 'react';
import PropTypes from 'prop-types';

import styles from './link-item.module.scss';
import { NavLink } from 'react-router-dom';

const LinkItem = ({ Icon, text, to }) => {
  return (
    <NavLink className={styles.link} activeClassName={styles.active} to={to} exact>
      <Icon />
      <span className={styles.text}>{text}</span>
    </NavLink>
  );
};

LinkItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkItem;
