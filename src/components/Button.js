import React from 'react';
import classNames from 'classnames';

const Button = ({
  children, onClick, className, disabled, active, ...attrs
}) => {

  const classes = classNames(
    'btn',
    className,
    { active }
  );

  return (
    <button
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >{children}</button>
  );
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false
}

export default Button;