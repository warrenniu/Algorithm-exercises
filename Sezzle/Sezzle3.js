import cx from "classnames";
import { Component } from "react";

export default class LikeDislike extends Component {
  state = {
    likes: 100,
    dislikes: 25,
  };

  increaseLikes = () => {
    let newLikes = this.state.likes + 1;
    let newDislikes = this.state.dislikes - 1;
    this.setState({ likes: newLikes, dislikes: newDislikes });
  };

  decreaseLikes = () => {
    let newDislikes = this.state.dislikes + 1;
    let newLikes = this.state.likes - 1;
    this.setState({ likes: newLikes, dislikes: newDislikes });
  };

  render() {
    return (
      <>
        <div>
          <h2>
            <Like
              increaseLikes={this.increaseLikes}
              likes={this.state.likes}
            ></Like>
            <Dislike
              decreaseLikes={this.decreaseLikes}
              dislikes={this.state.dislikes}
            ></Dislike>
          </h2>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
      </>
    );
  }
}

class Like extends Component {
  state = {
    clicked: false,
  };

  onClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.onClick();
            this.props.increaseLikes();
          }}
          className={this.state.clicked ? "like-button liked" : "like-button"}
        >
          Like | <span className="likes-counter">{this.props.likes}</span>
        </button>
      </>
    );
  }
}

class Dislike extends Component {
  state = {
    clicked: false,
  };

  onClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.onClick();
            this.props.decreaseLikes();
          }}
          className={
            this.state.clicked ? "dislike-button disliked" : "dislike-button"
          }
        >
          Dislike |{" "}
          <span className="dislikes-counter">{this.props.dislikes}</span>
        </button>
      </>
    );
  }
}

// import cx from "classnames";
// import { Component } from "react";

// export default class LikeDislike extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <h2>
//             <Like></Like>
//             <Dislike></Dislike>
//           </h2>
//         </div>
//         <style>{`
//                     .like-button, .dislike-button {
//                         font-size: 1rem;
//                         padding: 5px 10px;
//                         color:   #585858;
//                     }

//                     .liked, .disliked {
//                         font-weight: bold;
//                         color: #1565c0;
//                     }
//                 `}</style>
//       </>
//     );
//   }
// }

// class Like extends Component {
//   state = {
//     likes: 100,
//     clicked: false,
//   };

//   onClick = () => {
//     let newCount = this.state.clicked ? this.state.likes - 1 : this.state.likes + 1;
//     this.setState((prevState) => ({
//       likes: newCount,
//       clicked: !prevState.clicked,
//     }));
//   };
//   render() {

//     return (
//       <>
//         <button
//           onClick={this.onClick}
//           className={this.state.clicked ? "like-button liked" : "like-button"}
//         >
//           Like | <span className="likes-counter">{this.state.likes}</span>
//         </button>
//       </>
//     );
//   }
// }

// class Dislike extends Component {
//   state = {
//     dislikes: 25,
//     clicked: false,
//   };

//   onClick = () => {
//     let newCount = this.state.clicked ? this.state.dislikes - 1 : this.state.dislikes + 1;
//     this.setState((prevState) => ({
//       dislikes: newCount,
//       clicked: !prevState.clicked,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.onClick} className={this.state.clicked ? "dislike-button disliked" : "dislike-button"}>
//           Dislike |{" "}
//           <span className="dislikes-counter">{this.state.dislikes}</span>
//         </button>
//       </>
//     );
//   }
// }
