import React from 'react';
import PropTypes from 'prop-types';

import styles from './order-details.module.scss';
import done from '../../images/done.png';

const OrderDetails = ({ orderId }) => (
  <section>
    <h2 className={`${styles.title}  mb-4  text  text_type_digits-large`}>{orderId}</h2>
    <span className={`${styles.titleText}  mb-15  text  text_type_main-medium`}>идентификатор заказа</span>
    <img className={`${styles.icon}  mb-15`} src={done} alt="order done" width={120} height={120} />
    <span className={`${styles.text}  text  text_type_main-default  mb-2`}>Ваш заказ начали готовить</span>
    <span className={`${styles.text}  text  text_type_main-default  text_color_inactive`}>
      Дождитесь готовности на орбитальной станции
    </span>
  </section>
);

OrderDetails.propTypes = {
  orderId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default OrderDetails;
