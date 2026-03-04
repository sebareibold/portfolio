import ProfileSidebar from '@/components/ProfileSidebar';
import ProjectsSection from '@/components/ProjectsSection';

const Home = () => {
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
