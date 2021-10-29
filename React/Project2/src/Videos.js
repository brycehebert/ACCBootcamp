import React, { Component } from "react";

class Videos extends Component {
  render() {
    const { videos } = this.props;
    const baseURL = "https://www.youtube.com/embed/";

    const arr = videos.map((ele, index) => {
      return (
        <div key={index}>
          <h3>{ele.description}</h3>
          <iframe width={ele.width} height={ele.height} src={baseURL + ele.videoId} title={ele.description} />
        </div>
      );
    });

    return (
      <div>
        {arr}
      </div>
    );
  }
}

export default Videos;
