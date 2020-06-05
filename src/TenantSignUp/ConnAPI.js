import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../util/provider';

export function postAPI(datas, success, error) {
  fetch(BASE_URL,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datas),
  })
  .then(res => res.json())
  .then(success, error);
};
