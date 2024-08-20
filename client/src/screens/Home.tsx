import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from '@/components/ui/button';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import LeafIcon from '@/assets/LeafIcon';
// import BlueForest from '@/assets/BlueForest.png';
// import SatelliteDish from '@/assets/SatelliteDish.png';
// import Dog from '@/assets/Dog.png';
// import Koala from '@/assets/Koala.png';
// import CalmPyramid from '@/assets/CalmPyramid.jpeg';
import WatermelonCat from '@/assets/WatermelonCat.png';

const Home = () => {
  return (
    <div 
      className="bg-[#bdfda2] w-screen h-screen bg-cover bg-no-repeat bg-center grid place-items-center font-bold text-2xl"
      style={{ 
        backgroundImage: `url(${WatermelonCat})`,
        backgroundSize: '70%' 
        
      }}
    >
      <Dialog>
        <DialogTrigger>
        <Button className="absolute left-5 top-5 text-green-800 border-[2px] border-green-500 hover:bg-green-500 hover:text-white select-none rounded-[10px]">Pomodoro</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>We are so sorry!</DialogTitle>
            <DialogDescription>
              This feature is not available yet as we are developing the web app. Stay tune!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

       
       
     
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