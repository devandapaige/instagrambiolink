import "../App.css";
import Header from "./Header";
import SubHeaderPic from "./SubHeaderPic";
import SocialIcons from "./SocialIcons";
import RegularLinks from "./RegularLinks";
import AffiliateLinks from "./AffiliateLinks";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeaderPic />
      <SocialIcons />
      <RegularLinks />
      <AffiliateLinks />
      <Footer />
    </div>
  );
}

export default App;
