import { useState } from 'react';
import { action } from 'typesafe-actions';
import { RepositoriesTypes, User } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSucess = (user: User[]) => action(RepositoriesTypes.LOAD_SUCCESS, { user });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
