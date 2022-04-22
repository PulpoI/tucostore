import React from "react";
import "./Home.css";
import Main from "../../components/Main";

import foto1 from "../../assets/image_1.jpg";
import foto2 from "../../assets/image_2.jpg";
import foto3 from "../../assets/image_4.jpg";

function Home() {
  return (
    <div>
      <div className="main   ">
        <Main className="main-img" foto1={foto1} foto2={foto2} foto3={foto3} />
      </div>
    </div>
  );
}

export default Home;
