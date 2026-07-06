import { cn } from '../../../../lib/cn';
import type { CardProps } from './Card.types';

const variantClasses = {
  default:
    'bg-zinc-900 border border-zinc-800',

  glass:
    'bg-white/5 backdrop-blur-md border border-white/10 shadow-xl',

  outlined:
    'border border-cyan-500 bg-transparent',
};

export function Card({
  variant = 'glass',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        'hover:scale-[1.02]',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}