import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from '@/components/ui/button';

import LeafIcon from '@/assets/LeafIcon';

const Home = () => {
  return (
    <div className="w-screen h-screen grid place-items-center font-bold text-2xl">
      Hello There! This is Home!
      
      <Button className="absolute left-5 top-5 border-[1px] bg-[] hover:bg-gray-200 select-none rounded-[10px]">Pomodoro</Button>
      <Sheet>
        <SheetTrigger>
          <LeafIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>nehimomo</SheetTitle>
            <SheetDescription>
              This web app is designed to help relax and focus.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
    </div>
  )
}

export default Home;