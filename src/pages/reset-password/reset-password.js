import React, { useRef, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { resetPassword } from '../../services/slices/password/password';

import styles from '../form.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    token: '',
  });
  const { isLoading, isPasswordReset } = useSelector((state) => state.password);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onIconClick = () => {
    inputRef.current.type = inputRef.current.type === 'password' ? 'text' : 'password';
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(formData));
  };

  if (isPasswordReset) return <Redirect to="/login" />;

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
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
            value={formData.token}
            name={'token'}
          />
        </div>

        {isLoading ? (
          <span className="text text_type_main-default">Идёт запрос...</span>
        ) : (
          <Button type="primary" size="medium">
            Восстановить
          </Button>
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
