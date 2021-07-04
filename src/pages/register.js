import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './form.module.scss';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
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
        <h2 className={styles.formTitle}>Регистрация</h2>

        <div className={styles.inputWrapper}>
          <Input
            ref={inputRef}
            type={'text'}
            placeholder={'Имя'}
            onChange={onChange}
            value={formData.name}
            name={'name'}
          />
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

        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
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
