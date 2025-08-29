import { cn } from '@/libs/style';
import { ComponentProps } from 'react';

function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('bg-accent animate-pulse rounded-md h-10', className)}
      {...props}
    />
  );
}

export default Skeleton;
