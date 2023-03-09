


import { HTMLAttributes, ReactNode } from 'react'


// Você não precisa passar o onclick com uma prop, você pode extender a
// interface do seu component utilizando o HTMLAtributes, assim você consegue ter acesso
// a todas as propriedades nativas do componente nativo HTML

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const Button = ({
  children,
  className = 'bg-slate-400 ',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`w-16 h-16 rounded-full
      ${className ? className : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
