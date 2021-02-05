import React from 'react';

import { User } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: User
}

export default function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>;
}
