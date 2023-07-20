import React from "react";
import blogData from "../data/blog";

//console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
    </div>

  );

}
function Header(props) {
  return (
    <div>
      <header>
        <h1>{blogData.name}</h1>
      </header>
    </div>
  )

}
function About(props) {
  <img src="https://via.placeholder.com/215" alt="" />
  return (
    <div>
      <aside>
        <img src={blogData.image} alt="blog logo" />
        <p>{blogData.about}</p>
      </aside>
    </div>
  )

}

const ArticleList = () => {
  const { posts } = blogData;

  return (
    <main>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
};

function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{preview}</p>
      <p>{minutes} min read</p>
    </article>
  );
}export default App;