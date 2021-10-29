import React, { Component } from "react";
import "./App.css";
import Videos from "./Videos"

class App extends Component {
  render() {
    const videos = [
      {
        description: "Steve Jobs on Microsoft",
        width: 360,
        height: 240,
        videoId: "upzKj-1HaKw"
      },
      {
        description: "Steve Jobs Lived By These 5 Philosophies for Success.",
        width: 480,
        height: 360,
        videoId: "jcFbGsl8DDI"
      },
      {
        description: "Steve Jobs: How a Dreamer Changed the World",
        width: 480,
        height: 360,
        videoId: "5fI3zz2cp3k"
      }
    ];
    return (
      <div className="App">
        <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>

        <img src="assets/steve1.jpg" alt="Steve Jobs holding a macbook computer." />

        <p>
          Steve Jobs was the co-founder of Apple Inc. He is widely considered to be a brilliant businessman, as well as
          one of the greatest tech visionaries of our time.
        </p>

        <p>
          The story of his life is nothing short of fascinating. After dropping out of college, he started Apple with
          his friend <a href="https://en.wikipedia.org/wiki/Steve_Wozniak">Steve Wozniak</a> in 1976 at the age of 21.
          The duo gained wealth and fame a year later for the <a href="https://en.wikipedia.org/wiki/Apple_II">Apple II</a>, one of the first highly successful
          mass-produced personal computers. This was by the very successful Macintosh in 1984, the first mass-produced
          computer with a GUI (graphical user interface). After being ousted from Apple in 1985, he went on to oversee
          the creation of two new companies: NeXT and <a href="https://en.wikipedia.org/wiki/Pixar">Pixar.</a> With the
          success of the movie Toy Story, Steve became a billionaire.
        </p>

        <p>
          In 1997, Steve returned to Apple. Bill Gates and Microsoft dominated the computer industry, and Apple was
          on the brink of extinction. Nonetheless, <a href="https://en.wikipedia.org/wiki/Reality_distortion_field">Steve was a fantastic salesman,</a> and used
          his business acumen to slowly bring the company back to profitability.
        </p>
        <hr />

        <h1>Steve Jobs Resources</h1>
        <p>Apple's tribute to Steve Jobs:</p>
        <p>
          <a href="http://www.apple.com/stevejobs/">Remembering Steve</a>
        </p>
        <p>The Steve Jobs Biography</p>
        <p>
          <a href="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537">Steve Jobs</a>
        </p>
        <p>The Steve Jobs Movie</p>
        <p>
          <a href="http://www.imdb.com/title/tt2080374/">Steve Jobs on IMDB</a>
        </p>
        <hr />

        <h1>Check out these Steve Jobs Videos</h1>
        <Videos videos={videos} />
      </div>
    );
  }
}

export default App;
