import { useState, useCallback } from 'react';
import { ENV } from '../config/env';
import WelcomeAnimation from '../components/WelcomeAnimation';
import ProfileSidebar from '../components/ProfileSidebar';
import ProjectsSection from '../components/ProjectsSection';

const Home = () => {
  const [welcomeComplete, setWelcomeComplete] = useState(
    !ENV.SHOW_WELCOME_ANIMATION
  );

  const handleWelcomeComplete = useCallback(() => {
    setWelcomeComplete(true);
  }, []);

  // Show welcome animation if enabled and not complete
  if (!welcomeComplete) {
    return <WelcomeAnimation onComplete={handleWelcomeComplete} />;
  }

  return (
    <>
      {/* ===== LEFT COLUMN - Profile Sidebar ===== */}
      <div className="glass-card-static overflow-hidden">
        <ProfileSidebar />
      </div>

      {/* ===== RIGHT COLUMN - Projects ===== */}
      <div className="glass-card-static flex flex-col min-h-0 overflow-hidden">
        <ProjectsSection />
      </div>
    </>
  );
};

export default Home;
