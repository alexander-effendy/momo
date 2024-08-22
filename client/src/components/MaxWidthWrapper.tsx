import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className, 
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div 
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl min-h-screen px-10 md:px-16',
        className
    )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;