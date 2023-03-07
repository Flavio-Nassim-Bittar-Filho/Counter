interface Btn {
  children?: any
  className?: string
  onClick?: () => any
}

export const Button = ({
  children,
  className = 'bg-slate-400 ',
  onClick,
}: Btn) => {
  return (
    <button
      className={`w-16 h-16 rounded-full
      ${className ? className : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
