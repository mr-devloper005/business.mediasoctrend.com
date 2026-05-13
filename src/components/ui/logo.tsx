import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/site-config";

interface LogoProps {
  className?: string;
  variant?: 'default' | 'compact';
  background?: string;
}

export function Logo({ className, variant = 'default', background = 'bg-[#fbf6ee]' }: LogoProps) {
  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <div className={cn("relative h-11 w-11 overflow-hidden rounded-xl border border-[#e8dbce] shadow-sm", background)}>
          <div className="flex items-center justify-center h-full">
            <span className="font-bold text-2xl text-[#1e40af]">M</span>
            <span className="font-bold text-2xl text-[#fb923c] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ml-[2px]">N</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon */}
      <div className={cn("relative h-11 w-11 overflow-hidden rounded-xl border border-[#e8dbce] shadow-sm", background)}>
        <div className="flex items-center justify-center h-full">
          <span className="font-bold text-2xl text-[#1e40af]">M</span>
          <span className="font-bold text-2xl text-[#fb923c] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ml-[2px]">N</span>
        </div>
      </div>
      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold">
          <span className="text-[#1e40af]">Media</span>
          <span className="text-[#fb923c]">newsqo</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[#1e40af]">PRESS DISTRIBUTION DESK</span>
      </div>
    </div>
  );
}
