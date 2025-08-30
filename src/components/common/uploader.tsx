'use client';

import { Upload } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { environment } from '@/libs/env-config';

export function Uploader() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const req = await fetch(`${environment.apiUrl}/dms/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await req.json();

      if (!req.ok) {
        throw new Error(data?.message || 'Upload failed');
      }

      router.push('/');
      setLoading(false);
    } catch (err: any) {
      setLoading(false);

      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';

      alert(err.message);
    }
  };

  return (
    <div>
      <Input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        className="border border-dashed overflow-hidden min-h-60 rounded-lg group/uploader relative bg-dropzone"
        onClick={handleOpenFile}
      >
        <div className="absolute inset-0 z-50 flex-1 flex flex-col gap-2 justify-center items-center p-4 pointer-events-none cursor-grab transition-all ease-in-out duration-500 group-hover/uploader:bg-gray-800/10 dark:group-hover/uploader:bg-gray-800/50 group-hover/uploader:backdrop-blur-xs">
          <Upload className="size-4 text-muted-foreground" />

          <div className="grid text-center">
            <h3 className="text-sm font-semibold">Upload file</h3>
            <p className="text-xs text-muted-foreground">
              Click to upload image (maximum 5MB).
            </p>
          </div>
        </div>

        {file && (
          <div className="h-80 relative object-top">
            {file.type.startsWith('image/') && (
              <Image fill src={URL.createObjectURL(file)} alt={file.name} />
            )}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2 items-center mt-4">
        <Button variant="outline" asChild>
          <Link href="/">Cancel</Link>
        </Button>

        <Button variant="default" onClick={handleUpload} disabled={isLoading}>
          {isLoading && <Spinner />}
          Upload
        </Button>
      </div>
    </div>
  );
}
