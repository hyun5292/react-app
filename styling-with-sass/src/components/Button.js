import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth }) {
  return (
    //outline을 객체 안에 넣으면 true일 때에만 적용
    <button className={classNames('Button', size, color, { outline, fullWidth })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
