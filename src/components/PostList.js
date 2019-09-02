import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:8080/assets/img1.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/assets/img2.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "http://localhost:8080/assets/img3.png"
        },
        date: "05 Jun 2019",
        content:
          "Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia",
        comments: [
          {
            id: 3,
            author: {
              name: "Clara Lisboa",
              avatar: "http://localhost:8080/assets/img4.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "http://localhost:8080/assets/img5.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Diego Fernandes",
          avatar: "http://localhost:8080/assets/img2.png"
        },
        date: "06 Jun 2019",
        content: "O Bootcamp GoStack da RocketSeat é muito show!! Bora codar!",
        comments: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "http://localhost:8080/assets/img1.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
