import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInfoRequest, updateUserInfoRequest } from '../../services/slices/user';

import styles from './profile-form.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const { user, isLoading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, [dispatch]);

  useEffect(() => {
    user &&
      setFormData((state) => ({
        ...state,
        name: user.name,
        email: user.email,
      }));
  }, [user]);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onCancelClick = (e) => {
    e.preventDefault();

    setFormData({
      name: user.name,
      email: user.email,
      password: '',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfoRequest(formData));
  };

  return (
    user && (
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={onChange}
            icon={isDisabled ? 'CloseIcon' : 'EditIcon'}
            value={formData.name}
            name={'name'}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type={'email'}
            placeholder={'Логин'}
            onChange={onChange}
            icon={isDisabled ? 'CloseIcon' : 'EditIcon'}
            value={formData.email}
            name={'email'}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={onChange}
            icon={isDisabled ? 'CloseIcon' : 'EditIcon'}
            value={formData.password}
            name={'password'}
          />
        </div>

        {isLoading ? (
          <span className="text text_type_main-default text_centered">Идёт запрос...</span>
        ) : (
          <div className={styles.buttonsWrapper}>
            <Button type="secondary" size="medium" onClick={onCancelClick}>
              Отмена
            </Button>
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    )
  );
};
