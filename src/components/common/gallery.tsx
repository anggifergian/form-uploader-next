'use client';

import { Trash, Upload } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import useSWR from 'swr';

import { Button } from '@/components/ui/button';
import Skeleton from '@/components/ui/skeleton';
import { environment } from '@/libs/env-config';
import { fetcher } from '@/libs/fetcher';
import { formatDate } from '@/libs/date-parser';

const Image = dynamic(() => import('@/components/ui/image'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-full bg-muted" />,
});

export function Gallery() {
  const { data, mutate } = useSWR(`${environment.apiUrl}/dms/get-all`, fetcher);

  const handleRemove = async (fileId: string) => {
    try {
      const confirmation = confirm('Are you sure?');
      if (!confirmation) return;

      const url = `${environment.apiUrl}/dms/${fileId}`;
      const req = await fetch(url, { method: 'DELETE' });

      if (req.status === 200) {
        mutate();
      }
    } catch (err: any) {}
  };

  const listImages: any[] | undefined = data?.data;

  if (!listImages || !listImages.length) {
    return (
      <div className="pt-20 flex flex-col items-center justify-center gap-4">
        <div className="grid gap-0.5 text-center">
          <h3 className="font-semibold">Oops!</h3>
          <p className="text-sm">You haven’t uploaded any files yet</p>
        </div>

        <Button variant="default" asChild>
          <Link href="/upload">
            <Upload className="size-3.5" />
            <span>Upload new image</span>
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {listImages.map((item: any) => (
        <div
          key={item.fileId}
          className="relative border z-10 overflow-hidden rounded-xl group/image"
        >
          <div className="w-full h-48 relative">
            <Image
              fill
              alt={item.filename}
              src={item.downloadUrl}
              className="object-cover group-hover/image:scale-105 transition-all ease-in-out duration-300"
              loading="lazy"
            />
          </div>

          <div className="p-4 pt-6 grid gap-4">
            <p className="text-sm overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              {item.filename}
            </p>

            <div className="flex justify-between items-center gap-2">
              <p className="text-xs text-muted-foreground">
                {formatDate(item.uploadDate)}
              </p>

              <Button size="icon" onClick={() => handleRemove(item.fileId)}>
                <Trash className="size-3.5 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
