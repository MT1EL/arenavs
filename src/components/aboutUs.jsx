import React from "react";
import firstImage from "../images/Home&About/about-1.png";
import secondImage from "../images/Home&About/about-2.png";
import Token1 from "../images/Home&About/1.svg";
import Token2 from "../images/Home&About/2.svg";
import Token3 from "../images/Home&About/3.svg";
import Token4 from "../images/Home&About/4.svg";
import Token5 from "../images/Home&About/5.svg";
import Token6 from "../images/Home&About/6.svg";
import whitePaper from "../images/Home&About/whitepaper.svg";
import deck from "../images/Home&About/deck.svg";
function AboutUs() {
  return (
    <section className="AboutSection" id="AboutUs">
      <svg
        className="aboutUsHeader"
        width="220"
        height="80"
        viewBox="0 0 220 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.024 52.288C33.184 52.288 32.584 52 32.224 51.424C31.864 50.848 31.876 50.152 32.26 49.336L41.764 28.276C42.076 27.58 42.448 27.088 42.88 26.8C43.336 26.488 43.852 26.332 44.428 26.332C44.98 26.332 45.472 26.488 45.904 26.8C46.36 27.088 46.744 27.58 47.056 28.276L56.596 49.336C56.98 50.176 57.004 50.884 56.668 51.46C56.332 52.012 55.756 52.288 54.94 52.288C54.268 52.288 53.74 52.132 53.356 51.82C52.996 51.484 52.672 50.98 52.384 50.308L50.584 46.132H38.2L36.436 50.308C36.124 51.004 35.8 51.508 35.464 51.82C35.128 52.132 34.648 52.288 34.024 52.288ZM44.356 31.624L39.784 42.46H49L44.428 31.624H44.356ZM70.2811 52.36C68.9851 52.36 67.8331 52.084 66.8251 51.532C65.8171 50.956 65.0611 50.188 64.5571 49.228V49.984C64.5571 51.52 63.8251 52.288 62.3611 52.288C60.8731 52.288 60.1291 51.52 60.1291 49.984V28.6C60.1291 27.088 60.8731 26.332 62.3611 26.332C63.8731 26.332 64.6291 27.088 64.6291 28.6V36.988C65.1571 36.1 65.9131 35.392 66.8971 34.864C67.9051 34.312 69.0331 34.036 70.2811 34.036C71.8411 34.036 73.1971 34.408 74.3491 35.152C75.5011 35.896 76.4011 36.952 77.0491 38.32C77.6971 39.664 78.0211 41.284 78.0211 43.18C78.0211 45.052 77.6971 46.684 77.0491 48.076C76.4011 49.444 75.4891 50.5 74.3131 51.244C73.1611 51.988 71.8171 52.36 70.2811 52.36ZM69.0211 48.94C70.3651 48.94 71.4451 48.46 72.2611 47.5C73.0771 46.516 73.4851 45.076 73.4851 43.18C73.4851 41.26 73.0771 39.832 72.2611 38.896C71.4451 37.936 70.3651 37.456 69.0211 37.456C67.6771 37.456 66.5971 37.936 65.7811 38.896C64.9651 39.832 64.5571 41.26 64.5571 43.18C64.5571 45.076 64.9651 46.516 65.7811 47.5C66.5971 48.46 67.6771 48.94 69.0211 48.94ZM89.743 52.36C87.919 52.36 86.335 51.988 84.991 51.244C83.647 50.5 82.603 49.444 81.859 48.076C81.115 46.684 80.743 45.052 80.743 43.18C80.743 41.308 81.115 39.688 81.859 38.32C82.603 36.952 83.647 35.896 84.991 35.152C86.335 34.408 87.919 34.036 89.743 34.036C91.567 34.036 93.151 34.408 94.495 35.152C95.839 35.896 96.883 36.952 97.627 38.32C98.371 39.688 98.743 41.308 98.743 43.18C98.743 45.052 98.371 46.684 97.627 48.076C96.883 49.444 95.839 50.5 94.495 51.244C93.151 51.988 91.567 52.36 89.743 52.36ZM89.743 48.94C91.087 48.94 92.167 48.46 92.983 47.5C93.799 46.516 94.207 45.076 94.207 43.18C94.207 41.26 93.799 39.832 92.983 38.896C92.167 37.936 91.087 37.456 89.743 37.456C88.399 37.456 87.319 37.936 86.503 38.896C85.687 39.832 85.279 41.26 85.279 43.18C85.279 45.076 85.687 46.516 86.503 47.5C87.319 48.46 88.399 48.94 89.743 48.94ZM108.829 52.36C104.509 52.36 102.349 49.936 102.349 45.088V36.376C102.349 34.864 103.093 34.108 104.581 34.108C106.093 34.108 106.849 34.864 106.849 36.376V45.16C106.849 46.408 107.101 47.332 107.605 47.932C108.109 48.532 108.913 48.832 110.017 48.832C111.217 48.832 112.201 48.424 112.969 47.608C113.737 46.768 114.121 45.664 114.121 44.296V36.376C114.121 34.864 114.865 34.108 116.353 34.108C117.865 34.108 118.621 34.864 118.621 36.376V49.984C118.621 51.52 117.889 52.288 116.425 52.288C114.961 52.288 114.229 51.52 114.229 49.984V49.372C113.053 51.364 111.253 52.36 108.829 52.36ZM131.369 52.36C126.713 52.36 124.385 50.056 124.385 45.448V37.78H122.513C121.313 37.78 120.713 37.216 120.713 36.088C120.713 34.96 121.313 34.396 122.513 34.396H124.385V31.12C124.385 29.608 125.141 28.852 126.653 28.852C128.141 28.852 128.885 29.608 128.885 31.12V34.396H132.701C133.901 34.396 134.501 34.96 134.501 36.088C134.501 37.216 133.901 37.78 132.701 37.78H128.885V45.196C128.885 46.348 129.137 47.212 129.641 47.788C130.145 48.364 130.961 48.652 132.089 48.652C132.497 48.652 132.857 48.616 133.169 48.544C133.481 48.472 133.757 48.424 133.997 48.4C134.285 48.376 134.525 48.472 134.717 48.688C134.909 48.88 135.005 49.288 135.005 49.912C135.005 50.392 134.921 50.824 134.753 51.208C134.609 51.568 134.333 51.82 133.925 51.964C133.613 52.06 133.205 52.144 132.701 52.216C132.197 52.312 131.753 52.36 131.369 52.36ZM157.875 52.36C154.395 52.36 151.731 51.46 149.883 49.66C148.059 47.836 147.147 45.148 147.147 41.596V28.672C147.147 27.112 147.915 26.332 149.451 26.332C150.987 26.332 151.755 27.112 151.755 28.672V41.56C151.755 43.84 152.271 45.556 153.303 46.708C154.359 47.836 155.883 48.4 157.875 48.4C161.931 48.4 163.959 46.12 163.959 41.56V28.672C163.959 27.112 164.727 26.332 166.263 26.332C167.775 26.332 168.531 27.112 168.531 28.672V41.596C168.531 45.148 167.631 47.836 165.831 49.66C164.031 51.46 161.379 52.36 157.875 52.36ZM179.917 52.36C178.885 52.36 177.793 52.252 176.641 52.036C175.489 51.82 174.457 51.448 173.545 50.92C173.041 50.632 172.729 50.284 172.609 49.876C172.489 49.444 172.501 49.048 172.645 48.688C172.813 48.304 173.077 48.028 173.437 47.86C173.821 47.692 174.265 47.728 174.769 47.968C175.729 48.424 176.629 48.748 177.469 48.94C178.309 49.108 179.137 49.192 179.953 49.192C181.105 49.192 181.957 49 182.509 48.616C183.085 48.208 183.373 47.68 183.373 47.032C183.373 46.024 182.629 45.376 181.141 45.088L177.541 44.404C174.493 43.828 172.969 42.244 172.969 39.652C172.969 38.5 173.281 37.504 173.905 36.664C174.553 35.824 175.441 35.176 176.569 34.72C177.697 34.264 178.993 34.036 180.457 34.036C182.569 34.036 184.453 34.504 186.109 35.44C186.565 35.68 186.829 36.016 186.901 36.448C186.997 36.856 186.949 37.252 186.757 37.636C186.589 37.996 186.313 38.26 185.929 38.428C185.545 38.572 185.101 38.524 184.597 38.284C183.853 37.9 183.133 37.624 182.437 37.456C181.765 37.288 181.117 37.204 180.493 37.204C179.317 37.204 178.441 37.408 177.865 37.816C177.313 38.224 177.037 38.764 177.037 39.436C177.037 40.492 177.721 41.14 179.089 41.38L182.689 42.064C184.249 42.352 185.425 42.88 186.217 43.648C187.033 44.416 187.441 45.448 187.441 46.744C187.441 48.496 186.757 49.876 185.389 50.884C184.021 51.868 182.197 52.36 179.917 52.36Z"
          fill="#05121B"
        ></path>
        <path
          d="M219.5 26.8755V52.1991C219.5 56.5698 219.499 59.7996 219.175 62.2971C218.853 64.7805 218.219 66.4723 216.999 67.8011C215.779 69.13 214.148 69.9067 211.701 70.4401C209.241 70.9765 206.023 71.2538 201.668 71.6277L115.774 79.0024C112.859 79.2526 111.431 79.3749 110 79.3749C108.569 79.3749 107.141 79.2526 104.226 79.0024L18.3319 71.6277C13.9772 71.2538 10.7594 70.9765 8.29873 70.4401C5.85205 69.9067 4.22072 69.13 3.00106 67.8011C1.7814 66.4723 1.14704 64.7805 0.824933 62.2971C0.500984 59.7996 0.5 56.5698 0.5 52.1991V26.8755C0.5 22.4641 0.500994 19.2041 0.829149 16.6855C1.15545 14.181 1.79804 12.4781 3.03338 11.1456C4.26872 9.81314 5.91828 9.04374 8.3909 8.52918C10.8776 8.0117 14.1282 7.76445 18.5269 7.43121L104.901 0.887722C107.475 0.692704 108.737 0.597427 110 0.597427C111.263 0.597427 112.525 0.692704 115.099 0.887723L201.473 7.43121C205.872 7.76445 209.122 8.0117 211.609 8.52918C214.082 9.04374 215.731 9.81314 216.967 11.1456C218.202 12.4781 218.845 14.181 219.171 16.6855C219.499 19.2041 219.5 22.4641 219.5 26.8755Z"
          stroke="url(#paint0_linear_126_10275)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_126_10275"
            x1="110"
            y1="0"
            x2="110"
            y2="84.6154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#006CA2"></stop>
            <stop offset="1" stop-color="#006CA2" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="gridContainer">
        <div className="grid">
          <div className="gridparagraphs">
            <p className="aboutHeader">Arena Master</p>

            <p className="aboutParagraph">
              Arena Master is a skill-based battle-style game that runs both on
              Android & iOS devices. The game aims to provide a real-life gaming
              experience for people in the gaming domain, blockchain technology
              and the world as a whole. Arena Master players will be rewarded
              with tokens for winning PVP and PVE battles, participating in
              tournaments, staking, and engaging referrals
            </p>
          </div>{" "}
          <img
            className="gridImage"
            src={firstImage}
            alt="mobiles with arenavs opened"
          />
        </div>
        <div className="grid">
          <p className="aboutParagraph aboutParagraph2">
            The Game was developed under the memorandum of game development
            studio Sambrela and Game X Change - a global gaming exchange for the
            movements of assets (NFT's) and in-game currency across the gaming
          </p>
          <img
            className="gridImage image2"
            src={secondImage}
            alt="arenavs soliders"
          />
        </div>
      </div>
      <div className="AMTTokens">
        <div className="borderDiv">
          <p className="AMTHeader">AMT token Utility</p>

          <div className="innedBorderDiv">
            <div className="items">
              <div className="flex">
                <div>
                  <img src={Token1} alt="firstToken" />
                </div>
                <p>Competing in PVE battles to win leaderboard prizes</p>
              </div>
              <div className="flex">
                <div>
                  <img src={Token2} alt="secondToken" />
                </div>
                <p>Competing in PVP battles against players</p>
              </div>

              <div className="flex">
                <div>
                  <img src={Token3} alt="thirdToken" />
                </div>
                <p>NFT Rewards</p>
              </div>
              <div className="flex">
                <div>
                  <img src={Token4} alt="fifthToken" />
                </div>
                <p>Single Asset staking</p>
              </div>
              <div className="flex">
                <div>
                  <img src={Token5} alt="sixthToken" />
                </div>
                <p>In-game rewards</p>
              </div>

              <div className="flex">
                <div>
                  <img src={Token6} alt="seventhToken" />
                </div>
                <p>In-game bonuses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="paperArenaCards">
          <img
            src={whitePaper}
            alt="whitePaper"
            href="https://drive.google.com/file/d/15y0zXMYYsKLTVZeGApapIDKnw4J4X_hV/view"
          />
          <img
            src={deck}
            alt="arena master dec dsadas"
            href="https://drive.google.com/file/d/1XVRxQTqd9h2_kf2dDj7KYOKoEx3CRpVe/view"
          />
        </div>
      </div>
      <div className="video">
        <div className="videoBorder">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DC9RGT7PUD0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
