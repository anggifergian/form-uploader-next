import { Uploader } from '@/components/common/uploader';

export default function UploadPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-bold">Upload Image</h1>
      <Uploader />
    </div>
  );
}
