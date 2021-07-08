import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './form.module.scss';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { registerRequest } from '../services/slices/user';

export const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { isLoading } = useSelector((state) => state.user);

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
    dispatch(registerRequest(formData));
  };

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.formTitle}>Регистрация</h2>

        <div className={styles.inputWrapper}>
          <Input type={'text'} placeholder={'Имя'} onChange={onChange} value={formData.name} name={'name'} />
        </div>
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
            Зарегистрироваться
          </Button>
        )}
      </form>

      <div className={styles.flexWrapper}>
        <span className={styles.formText}>Уже зарегистрированы?</span>
        <Link className={styles.formLink} to="/login">
          Войти
        </Link>
      </div>
    </section>
  );
};
