import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'glass' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}