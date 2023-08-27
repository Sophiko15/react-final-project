import React from 'react';
import { useSelector } from 'react-redux';

export const useUser = () => {
  const userData = useSelector((state)=>state.user.userData);

  return {
    userData,
  }
};