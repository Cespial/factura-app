"use client";

import { useState, useCallback } from "react";
import { Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  onFilesSelected?: (files: File[]) => void;
  currentCount?: number;
  monthlyLimit?: number;
  onLimitReached?: () => void;
}

export function UploadZone({
  onFilesSelected,
  currentCount = 12,
  monthlyLimit = 18,
  onLimitReached,
}: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const fileArray = Array.from(files);

      if (currentCount + fileArray.length > monthlyLimit) {
        onLimitReached?.();
        return;
      }

      onFilesSelected?.(fileArray);
    },
    [currentCount, monthlyLimit, onFilesSelected, onLimitReached]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  return (
    <Card className="rounded-xl border border-[#F0F0F0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-12 transition-colors",
          isDragging
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
        )}
      >
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
            isDragging ? "bg-emerald-100" : "bg-gray-100"
          )}
        >
          <Upload
            className={cn(
              "h-6 w-6",
              isDragging ? "text-emerald-600" : "text-gray-400"
            )}
          />
        </div>

        <p className="text-sm font-medium text-gray-900">
          Arrastra tus facturas aqui
        </p>
        <p className="mt-1 text-sm text-gray-400">
          o haz clic para seleccionar
        </p>
        <p className="mt-2 text-xs text-gray-400">
          PDF, XML — Max 10MB por archivo
        </p>

        <label>
          <input
            type="file"
            className="hidden"
            multiple
            accept=".pdf,.xml"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <Button asChild className="mt-4 cursor-pointer rounded-lg bg-gray-900 px-6 text-sm text-white hover:bg-gray-800">
            <span>Seleccionar archivos</span>
          </Button>
        </label>
      </div>
    </Card>
  );
}
