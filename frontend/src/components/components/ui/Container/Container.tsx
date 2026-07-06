import { cn } from '../../../../lib/cn';
import type { ContainerProps } from './Container.types';

export function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-7xl px-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}