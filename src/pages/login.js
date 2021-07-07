import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './form.module.scss';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { loginRequest } from '../services/slices/user';

export const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { isLoading, isLoggedIn } = useSelector((state) => state.user);

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
    dispatch(loginRequest(formData));
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.formTitle}>Вход</h2>

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
        <div className={styles.inputWrapper}>
          <PasswordInput onChange={onChange} value={formData.password} name={'password'} />
        </div>

        {isLoading ? (
          <span className="text text_type_main-default">Идёт запрос...</span>
        ) : (
          <Button type="primary" size="medium">
            Войти
          </Button>
        )}
      </form>

      <div className={`${styles.flexWrapper}  mb-4`}>
        <span className={styles.formText}>Вы — новый пользователь?</span>
        <Link className={styles.formLink} to="/register">
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.flexWrapper}>
        <span className={styles.formText}>Забыли пароль?</span>
        <Link className={styles.formLink} to="/forgot-password">
          Восстановить пароль
        </Link>
      </div>
    </section>
  );
};
