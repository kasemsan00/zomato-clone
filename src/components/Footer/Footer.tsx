import LanguageSelect from "@/components/Footer/LanguageSelect";
import React, { useState } from "react";

const languageList = ["English", "Thai", "Italian"];

export default function Footer() {
  const [showList, setShowList] = useState({
    region: false,
    language: false,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = event.target as HTMLInputElement;
    if (element.name === "region") {
      setShowList({ ...showList, [element.name]: !showList.region });
    }
    if (element.name === "language") {
      setShowList({ ...showList, [element.name]: !showList.language });
    }
  };

  return (
    <div className="footer-section">
      <div>
        <div className="footer-title">zomato</div>
        <div className="footer-region">
          <div className="footer-region-select">
            <LanguageSelect show={showList.region} languageList={languageList} />
            <button onClick={handleClick} name="region" className="footer-change-region-button">
              India
            </button>
          </div>
          <div className="footer-change-language">
            <LanguageSelect show={showList.language} languageList={languageList} />
            <button onClick={handleClick} name="language" className="footer-change-region-button">
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
