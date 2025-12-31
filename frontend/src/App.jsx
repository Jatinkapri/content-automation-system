import { useEffect, useState } from "react";
import { getArticles } from "./services/api";
import ArticleCard from "./components/ArticleCard";
import "./styles.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then(res => setArticles(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1>BeyondChats Article Dashboard</h1>

      {loading && <p>Loading articles...</p>}

      {!loading && articles.length === 0 && (
        <p>No articles available</p>
      )}

      {!loading &&
        articles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
    </div>
  );
}

