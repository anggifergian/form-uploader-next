import { cn } from '@/libs/style';
import NextImage, { ImageProps } from 'next/image';

export default function Image({ className, ...props }: ImageProps) {
  return <NextImage className={cn('object-cover', className)} {...props} />;
}
