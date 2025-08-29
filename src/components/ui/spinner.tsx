import { cn } from '@/libs/style';

export function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'text-foreground animate-spin inline-block size-4 border-[2px] border-t-transparent rounded-full',
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
