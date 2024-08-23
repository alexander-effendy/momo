import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from '@mui/material';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const About = () => {

  const mobile = useMediaQuery('(max-width:430px)');

  const navigate = useNavigate();
  return (
    <div className="w-screen bg-[#061b21] oveflow-y-auto your-scroll-container">
      <MaxWidthWrapper className=""> 
        <div className="text-2xl text-white bg-yellow-00">
          <section className="bg-blue-s200 mt-[110px]">
            <div className="about-header">About <span className="jersey-10-big">MOMO</span></div>
            <div className="about-paragraph">Welcome to Momo, your sanctuary for calm and focus.</div>
            <div className="about-paragraph">
              In a world full of distractions, we believe that productivity should not come at the expense of your peace of mind. Momo is designed with a singular purpose: to help you achieve deep focus and relaxation while working, studying, or engaging in any task that requires your undivided attention.
            </div>

            <div className="about-header">What Makes Momo Different?</div>
            <div className="about-paragraph">
              Unlike the countless Pomodoro apps out there, Momo isn’t just a timer—it's an experience. We’ve crafted Momo with aesthetics and mindfulness at its core, ensuring that every moment you spend here is as calming as it is productive.
            </div>

            <div className="about-header">
              Features
            </div>

            {!mobile &&
              <ul className="list-disc list-inside about-paragraph">
                <li><span className="about-list-bold">Pomodoro Timer</span>: Our timer follows the classic Pomodoro technique, helping you break your work into manageable intervals with built-in breaks to refresh your mind.</li>
                <li><span className="about-list-bold">Pomodoro Timer</span>: Choose from a selection of beautifully designed backgrounds, each crafted to create a serene atmosphere that aids in concentration and relaxation.</li>
                <li><span className="about-list-bold">Calming Music</span>: Elevate your focus with our curated playlist of soothing tracks. You can choose the perfect soundtrack for your session, ensuring that your environment is as harmonious as your workflow.</li>
                <li><span className="about-list-bold">Progress Tracking</span>: Keep track of your study or work sessions effortlessly. Momo allows you to monitor your Pomodoro progress over time, helping you stay on top of your goals and celebrate your achievements.</li>
            </ul>
            }

            {mobile &&
            <section>
              <div className="about-paragraph">
                <span className="about-list-bold">Pomodoro Timer</span>: Our timer follows the classic Pomodoro technique, helping you break your work into manageable intervals with built-in breaks to refresh your mind.
              </div>
              <div className="about-paragraph">
                <span className="about-list-bold">Pomodoro Timer</span>: Choose from a selection of beautifully designed backgrounds, each crafted to create a serene atmosphere that aids in concentration and relaxation.
              </div>
              <div className="about-paragraph">
                <span className="about-list-bold">Calming Music</span>: Elevate your focus with our curated playlist of soothing tracks. You can choose the perfect soundtrack for your session, ensuring that your environment is as harmonious as your workflow.
              </div>
              <div className="about-paragraph">
                <span className="about-list-bold">Progress Tracking</span>: Keep track of your study or work sessions effortlessly. Momo allows you to monitor your Pomodoro progress over time, helping you stay on top of your goals and celebrate your achievements.
              </div>
            </section>
            }

            <div className="about-header">
              Why Momo?
            </div>

            <div className="about-paragraph">
              At Momo, we understand that the environment in which you work or study plays a crucial role in your productivity. That’s why we’ve prioritized creating a UI that’s not just functional but also beautiful. Every element of Momo is designed to reduce stress, eliminate distractions, and help you find your flow.
            </div>

            <div className="about-paragraph">
              Whether you're a student trying to manage study sessions, a professional looking to maximize productivity, or simply someone who values a calm and focused workspace, Momo is here to support you every step of the way.
            </div>

            <div className="about-paragraph">
              Join us on this journey to a more peaceful and productive you. Welcome to Momo.
            </div>

            <div className="h-[200px]">

            </div>
          </section>
          <Button onClick={() => navigate('/')} className="absolute top-5 left-10 bg-[#566d57] hover:bg-[#374637] transition:duration-3000 rounded-xl">Back to home</Button>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default About;