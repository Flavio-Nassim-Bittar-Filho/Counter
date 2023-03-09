import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function Button({ children, className = 'bg-slate-400 ', ...props }: ButtonProps) {
  return (
    <button className={`w-16 h-16 rounded-full ${className ? className : ''}`} {...props}>
      {children}
    </button>
  )
}
