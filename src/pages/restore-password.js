import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './form.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const RestorePassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    code: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  const onIconClick = () => {
    inputRef.current.type = inputRef.current.type === 'password' ? 'text' : 'password';
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Восстановление пароля</h2>

        <div className={styles.inputWrapper}>
          <Input
            ref={inputRef}
            type={'password'}
            placeholder={'Введите новый пароль'}
            icon={isPasswordVisible ? 'HideIcon' : 'ShowIcon'}
            onIconClick={onIconClick}
            onChange={onChange}
            value={formData.password}
            name={'password'}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={onChange}
            value={formData.code}
            name={'code'}
          />
        </div>

        <Button type="primary" size="medium">
          Сохранить
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
