import React, { useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../form.module.scss';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { sendResetPasswordEmail } from '../../services/slices/password';

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
  });
  const { isLoading, isResetEmailSent } = useSelector((state) => state.password);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(sendResetPasswordEmail(formData));
  };

  if (isResetEmailSent) return <Redirect to="/reset-password" />;

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.formTitle}>Восстановление пароля</h2>

        <div className={styles.inputWrapper}>
          <Input
            type={'email'}
            placeholder={'Email'}
            onChange={onChange}
            value={formData.email}
            name={'email'}
            errorText={'Некорректный email'}
          />
        </div>

        {isLoading ? (
          <span className="text text_type_main-default">Идёт запрос...</span>
        ) : (
          <Link to={{ pathname: '/reset-password', state: { from: location.pathname } }}>Восстановить</Link>
        )}
      </form>

      <div className={styles.flexWrapper}>
        <span className={styles.formText}>Вспомнили пароль?</span>
        <Link className={styles.formLink} to="/login">
          Войти
        </Link>
      </div>
    </section>
  );
};