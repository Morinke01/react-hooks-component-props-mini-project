import React from "react";
import Header from "./header";
import About from "./about";
import ArticleList from "./articleList";
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
export default App;