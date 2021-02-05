import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSucess, loadFailure } from './actions';
import { User } from './types';

export function* load() {
    try {
      const users = [{
        id: 123654,
        name: 'marcos',
        email: 'mail@mail.com',
        password: '123123',
        birthdayDate: '16/12/1991',
        role: 'administrador',
      }] as User[];

      yield put(loadSucess(users));
    } catch (error) {
      console.log(error);
      yield put(loadFailure());
    }
}
