import { useState } from "react";

// import English from "../../Assets/IMG/Flags/GreatBritain.png";
import English from "../../Assets/IMG/Flags/English.svg";
import French from "../../Assets/IMG/Flags/France.png";
import Chinese from "../../Assets/IMG/Flags/China.png";
import Italian from "../../Assets/IMG/Flags/Italy.png";
import Japanese from "../../Assets/IMG/Flags/Japan.png";
import Portuguese from "../../Assets/IMG/Flags/Portugal.png";
import Spanish from "../../Assets/IMG/Flags/Spain.png";
import Avatar from "../../Assets/IMG/Avatar.jpg";

import "./styles.scss";

interface Language {
  name: string;
  image: string;
}
const languages: Language[] = [
  { name: "English", image: English },
  { name: "French", image: French },
  { name: "Chinese", image: Chinese },
  { name: "Italian", image: Italian },
  { name: "Japanese", image: Japanese },
  { name: "Portuguese", image: Portuguese },
  { name: "Spanish", image: Spanish },
];
export default function TopNav() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);
  return (
    <div className="top-nav-container flex-row align-center justify-between">
      <span className="text-dark px-25 fw-600">Dashboard</span>
      <div className="search-container flex-row align-center">
        <span className="icon">
          <i className="far fa-search" />
        </span>
        <input spellCheck={false} type="text" placeholder="Search here..." />
      </div>
      <div className="flex-row align-center">
        <div className="flex-row language-row align-center">
          <img src={currentLanguage.image} alt="" className="flag" />
          <span className="text-dark px-14">{currentLanguage.name}</span>
          <span className="text-gray arrow pointer">
            {isLanguageMenuOpen ? (
              <i className="far fa-angle-up" />
            ) : (
              <i className="far fa-angle-down" />
            )}
          </span>
        </div>
        <span className="flex-row align-center justify-center notification pointer">
          <div className="icon">
            <i className="fal fa-bell"></i>
          </div>
        </span>
        <div className="flex-row user pointer">
          <img src={Avatar} alt="" />
          <div className="flex-col">
            <span className="text-dark px-16">theajstars</span>
            <span className="text-gray px-13">Overlord</span>
          </div>
          <span className="icon px-20 text-dark pointer">
            <i className="fal fa-angle-down" />
          </span>
        </div>
      </div>
    </div>
  );
}
