import { useState } from "react";
import SectionStart from "./SectionStart";
import tab1 from '../assets/images/illustration-features-tab-1.svg'
import tab2 from '../assets/images/illustration-features-tab-2.svg'
import tab3 from '../assets/images/illustration-features-tab-3.svg' 

const Features = () => {
  const [idx, setIdx] = useState(0);
  const headings = [
    "Bookmark in one click",
    "Intelligent search",
    "Share your bookmarks",
  ];
  const content = [
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  ];
  const imgToggleSrc = [tab1, tab2, tab3];

  return (
    <div>
      <div id="features-blub" className="container">
        <div className="features grid-section">
          <SectionStart
            sectionHeading="Features"
            desc="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
          />

          <div className="toggle-control">
            <ul role="list">
              <li>
                <button className="features-btn" onClick={() => setIdx(0)}>
                  Simple Bookmarking
                </button>
              </li>
              <li>
                <button className="features-btn" onClick={() => setIdx(1)}>
                  Speedy Searching
                </button>
              </li>
              <li>
                <button className="features-btn" onClick={() => setIdx(2)}>
                  Easy Sharing
                </button>
              </li>
            </ul>

            <div className="toggle-section">
              <div className="img-toggle">
                <img src={imgToggleSrc[idx]} alt="" />
              </div>
              <div className="content-toggle">
                <h3>{headings[idx]}</h3>
                <p>{content[idx]}</p>
                <button className="btn primary-btn">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
