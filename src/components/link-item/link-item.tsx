import React, { ElementType, FC } from 'react';

import styles from './link-item.module.scss';
import { NavLink } from 'react-router-dom';

interface ILinkItemProps {
  Icon: ElementType;
  text: string;
  to: string;
}

const LinkItem: FC<ILinkItemProps> = ({ Icon, text, to }) => {
  return (
    <NavLink className={styles.link} activeClassName={styles.active} to={to} exact>
      <Icon />
      <span className={styles.text}>{text}</span>
    </NavLink>
  );
};

export default LinkItem;
