import React from "react";
import "../assets/style/Home.css";
import UseRef from "./UseRef";

const Home = () => {
  return (
    <div className="home-image">
      <div className="heading">
        <h1 className="home-heading">Biyani House</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam
        aut nesciunt dolores quo provident beatae porro incidunt quis
        aspernatur. Quam excepturi neque aperiam iure reiciendis tenetur facilis
        dolorem dolor laudantium quibusdam consequuntur nisi, laboriosam
        voluptatem porro ex amet! Ex velit ducimus ea placeat architecto! Ab
        quae qui ex culpa?
      </p>
      </div>
      <UseRef/>
    </div>
  );
};

export default Home;
