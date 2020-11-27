import React from 'react';

import s from './ErrorMessage.module.scss';

import { IErrorData } from '../../interfaces';

interface ErrorMessageProps {
  error?: IErrorData;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={s.error}>
      <img
        src="https://raw.githubusercontent.com/kostya-caxnyk/ReStore/main/src/Components/ErrorIndicator/error.jpg"
        alt="error"
      />
      <span>Something went wrong</span>
      {error && (
        <span>
          {error.status_message
            ? error.status_message
            : error.errors
            ? error.errors.map((el) => el)
            : ''}
        </span>
      )}
    </div>
  );
};

export default ErrorMessage;
