import React, { Component } from "react";
import NewsFeedCard from "../../utils/NewsFeedCard";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img: "562x370",
          by: "By admin",
          date: "June 11 2018",
          heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt, recusandae saepe illo odit exercitationem voluptatibus similique sit architecto, tempora cupiditate. Error dolorem enim dolor voluptatibus perspiciatis porro eveniet reprehenderit.Praesentium minima provident hic est voluptatibus modi debitis ut reprehenderit ex aliquid corporis nesciunt velit nostrum maxime.",
          tags: ["Conference", "Comedy"]
        },
        {
          img: "563x371",
          by: "By admin",
          date: "June 11 2018",
          heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt, recusandae saepe illo odit exercitationem voluptatibus similique sit architecto, tempora cupiditate. Error dolorem enim dolor voluptatibus perspiciatis porro eveniet reprehenderit.Praesentium minima provident hic est voluptatibus modi debitis ut reprehenderit ex aliquid corporis nesciunt velit nostrum maxime.",
          tags: ["Conference", "Comedy"]
        },
        {
          img: "564x372",
          by: "By admin",
          date: "June 11 2018",
          heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt, recusandae saepe illo odit exercitationem voluptatibus similique sit architecto, tempora cupiditate. Error dolorem enim dolor voluptatibus perspiciatis porro eveniet reprehenderit.Praesentium minima provident hic est voluptatibus modi debitis ut reprehenderit ex aliquid corporis nesciunt velit nostrum maxime.",
          tags: ["Fun", "Comedy"]
        },
        {
          img: "561x369",
          by: "By admin",
          date: "June 11 2018",
          heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt, recusandae saepe illo odit exercitationem voluptatibus similique sit architecto, tempora cupiditate. Error dolorem enim dolor voluptatibus perspiciatis porro eveniet reprehenderit.Praesentium minima provident hic est voluptatibus modi debitis ut reprehenderit ex aliquid corporis nesciunt velit nostrum maxime.",
          tags: ["Comedy"]
        },
      ]
    };
  }

  render() {

    const items = this.state.items.map((item, i) => <NewsFeedCard key={i} item={item}/>)
    return (
      <div className="section-feeds">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="newsfeeds">
                {items}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
