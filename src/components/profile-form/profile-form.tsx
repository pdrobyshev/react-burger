import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../services/store';

import { getUserInfoRequest, updateUserInfoRequest } from '../../services/slices/user/user';

import styles from './profile-form.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const ProfileForm: FC = () => {
  const dispatch = useDispatch();
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onCancelClick = (e: MouseEvent) => {
    e.preventDefault();

    user &&
      setFormData({
        name: user.name,
        email: user.email,
        password: '',
      });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
            icon={'EditIcon'}
            value={formData.name}
            name={'name'}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type={'email'}
            placeholder={'Логин'}
            onChange={onChange}
            icon={'EditIcon'}
            value={formData.email}
            name={'email'}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={onChange}
            icon={'EditIcon'}
            value={formData.password}
            name={'password'}
          />
        </div>

        {isLoading ? (
          <span className="text text_type_main-default text_centered">Идёт запрос...</span>
        ) : (
          <div className={styles.buttonsWrapper}>
            <Button type="secondary" size="medium" onClick={() => onCancelClick}>
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
