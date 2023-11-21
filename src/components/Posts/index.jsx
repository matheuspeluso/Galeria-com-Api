import {PostCard} from "../PostCard"

import "./styles.css"

export const Posts = ({posts}) =>{

    return(
        <div className="posts">
        {posts.map(post => (
          <PostCard
          key={post.id}
          id = {post.id}
          title= {post.title}
          body = {post.body}
          cover = {post.cover}
          />
        ))}


        {/* <h2>olá mundo!</h2>
        <p onClick={this.handlePClick}>
            {name} tem {age} anos.
        </p>
        <h2>Meu contador: {counter}</h2>

        <a href="julianaleandroquiropraxia.com.br" onClick={this.handleAClick}>Este é o Link</a> */}
      </div>
    )
}
