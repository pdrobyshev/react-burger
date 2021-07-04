import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './form.module.scss';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const inputRef = useRef(null);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Вход</h2>

        <div className={styles.inputWrapper}>
          <Input
            ref={inputRef}
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

        <Button type="primary" size="medium">
          Войти
        </Button>
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
