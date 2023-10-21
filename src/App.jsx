import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Promo from "./components/Promo";

function App() {
  const [bannerActive, setBannerActive] = useState(false);
  const [promoActive, setPromoActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBannerActive(true);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/M7FIvfx5J10?si=akV99b7L4X9UcydF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Banner
          active={bannerActive}
          setActive={setBannerActive}
          setPromoActive={setPromoActive}
        />
        <Promo active={promoActive} setActive={setPromoActive} />
      </div>
    </div>
  );
}

export default App;
