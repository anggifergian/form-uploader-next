import Link from 'next/link';
import { Upload } from 'lucide-react';

import { Gallery } from '@/components/common/gallery';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-start lg:items-center lg:flex-row lg:justify-between mb-8">
        <div className="grid gap-0.5">
          <h2 className="text-xl font-bold">Form Uploader</h2>
          <p className="text-muted-foreground text-sm">
            A simple file uploader project
          </p>
        </div>
        <Button asChild>
          <Link href="/upload">
            <Upload className="size-3.5" /> <span>Upload Image</span>
          </Link>
        </Button>
      </div>

      <div className="grid gap-1 mt-4">
        <Gallery />
      </div>
    </div>
  );
}
