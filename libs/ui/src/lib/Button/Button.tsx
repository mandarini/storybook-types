import React from 'react';

interface PropsWithClassName {
  className?: string;
}

export interface ButtonProps extends PropsWithClassName {
  disabled?: boolean;
  primary?: boolean;
  onClick?(event: React.MouseEvent): void;
}

export function Button(props: React.PropsWithChildren<ButtonProps>) {
  const { disabled, onClick, children } = props;
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
