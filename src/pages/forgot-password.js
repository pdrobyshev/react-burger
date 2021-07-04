import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './form.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
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
        <h2 className={styles.formTitle}>Восстановление пароля</h2>

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

        <Button type="primary" size="medium">
          Восстановить
        </Button>
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
