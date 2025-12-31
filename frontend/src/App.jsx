import { useEffect, useState } from "react";
import { getArticles } from "./services/api";
import ArticleCard from "./components/ArticleCard";
import "./styles.css";


export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(res => setArticles(res.data));
  }, []);

  return (
    <div>
      <h1>BeyondChats Articles</h1>

      {articles.map(article => (
        <div key={article._id}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
}
