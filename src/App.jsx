import React from "react";
import "./App.css";
import { useState } from "react";

const animeDB = {
  action: [
    {
      name: "Demon Slayer",
      description:
        "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
      rating: "8.7/10"
    },
    {
      name: "Jujutsu Kaisen",
      description:
        "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
      rating: "8.6/10"
    },
    {
      name: "Attack on Titan",
      description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction. ",
      rating: "9/10"
    }
  ],
  comic: [
    {
      name: "Gintama",
      description:
        "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can.",
      rating: "8.7/10"
    },
    {
      name: "The Disastrous Life of Saiki K",
      description:
        "Saiki Kusuo is a powerful psychic who hates attracting attention, yet he is surrounded by colorful characters who always find a way to remove him from his everyday life..",
      rating: "8.4/10"
    },
    {
      name: "Daily Lives of High School Boys",
      description:
        "A sketch comedy about three friends attending an all boys school.",
      rating: "7.8/10"
    }
  ],
  sports: [
    {
      name: "Haikyu!!",
      description:
        "Determined to be like the volleyball championship's star player -The Small Giant, Shoyo joins his school's volleyball club.",
      rating: "8.7/10"
    },
    {
      name: "Slam Dunk",
      description:
        "About Sakuragi Hanamichi, a freshman of Shohoku High School who joins the basketball team because of the girl he has a crush on, Haruko. Although he is newbie in this sport, he is no ordinary basketball player.",
      rating: "8.7/10"
    },
    {
      name: "Hajime no ippo",
      description:
        "Ippo, a teenage boy with a pure heart and unrelenting determination, discovers a passion for boxing after veteran fighter Takamura saves him from bullies.",
      rating: "8.6/10"
    }
  ],
  Crime: [
    {
      name: "Death Note",
      description:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it. ",
      rating: "9/10"
    },
    {
      name: "UN-GO",
      description: "In a post-war Japan, an experienced detective takes on cases with the help of his supernatural assistant.",
      rating: "6/10"
    },
    {
      name: "Psycho-Pass",
      description:
        "Believing in humanity and order, policewoman Akane Tsunemori obeys the ruling, computerized, precognitive Sibyl System. But when she faces a criminal mastermind who can elude this perfect system, she questions both Sibyl and herself.",
      rating: "7.2/5"
    }
  ]
};

const genreStyle = {
  cursor: "pointer",
  background: "#E5DFEB",
  borderRadius: "0.5rem",
  padding: "0.5rem  1rem",
  border: "1px solid black",
  margin: "1rem 0.3rem"
};

const animeStyle = {
  listStyle: "none",
  padding: "1rem",
  border: "1px solid #D1D5DB",
  width: "70%",
  margin: "1rem 0rem",
  borderRadius: "0.5rem",
  background: "#fcf5f0"

};

const headerTextStyle = {
  fontWeight: "bold",
  lineHeight: "20px"

};


export default function App() {
  var [selectedGenre, setGenre] = useState("action");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={(headerTextStyle, { paddingBottom: "1rem" })}>
        Anime Recommendation App
      </h1>
      <p style={headerTextStyle}>
        Checkout the list of my top favourite anime.
      </p>
      <p style={headerTextStyle}>Select the Gernre from below:</p>

      <div>
        {Object.keys(animeDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} style={genreStyle}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((anime) => (
            <li key={anime.name} style={animeStyle}>
              {" "}
              <div style={{ fontSize: "larger" }}> {anime.name} </div>
              <div style={{ fontSize: "smaller", margin: "1rem" }}>
                {" "}
                {anime.description}{" "}
              </div>
              <div style={{ fontSize: "smaller", margin: "0 2rem" }}>
                {" "}
                {anime.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
