import "./profil.css";
import Sidebar from "./Sidebar/Sidebar";

const Profil = () => {
  // return (

  // <Sidebar/>
  // );

  const [activeContent, setActiveContent] = useState("personal");

  const renderContent = () => {
    switch (activeContent) {
      case "personal":
        return <PersonalInfoContent />;
      case "history":
        return <TourHistoryContent />;
      case "saved":
        return <SavedFiltersContent />;
      default:
        return <PersonalInfoContent />;
    }
  };

  return (
    <div className="user-profile-page-container">
      <Sidebar
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <div className="profilPage-profile-content">{renderContent()}</div>
    </div>
  );
};

export default Profil;
