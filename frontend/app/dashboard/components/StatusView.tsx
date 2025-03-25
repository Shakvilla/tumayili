"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Status {
  id: string;
  imageUrl: string;
  alt: string;
}

interface StatusViewProps {
  title?: string;
  statuses?: Status[];
  className?: string;
}

const defaultStatuses: Status[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1608613304899-ea8098577e38?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Electronics repair service",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1613876215075-276fd62c89a4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Auto mechanic service",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Plumbing service",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Electrical service",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1742268350468-345079a1081b?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Barber service",
  },
];

export function StatusView({
  title = "Services you follow",
  statuses = defaultStatuses,
  className,
}: StatusViewProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {statuses.map((status) => (
          <div
            key={status.id}
            className="flex-shrink-0 relative cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-orange-500 p-0.5">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={status.imageUrl}
                  alt={status.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
