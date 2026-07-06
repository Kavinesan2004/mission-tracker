// local lightweight `cn` to avoid external dependency
function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}
import type { ButtonProps } from './Button.types';

const variantClasses = {
  primary:
    'bg-cyan-500 text-black hover:bg-cyan-400',

  secondary:
    'bg-pink-500 text-white hover:bg-pink-400',

  outline:
    'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10',

  ghost:
    'text-zinc-300 hover:bg-zinc-800',
};

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',

  md: 'px-5 py-2.5 text-base',

  lg: 'px-7 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl font-semibold transition-all duration-300',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}