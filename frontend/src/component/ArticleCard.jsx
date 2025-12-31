import { useState } from "react";


export default function ArticleCard({ article }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <h2>{article.title}</h2>

      <span className={article.isAiUpdated ? "badge ai" : "badge"}>
        {article.isAiUpdated ? "AI Updated" : "Original"}
      </span>

      <button onClick={() => setOpen(!open)}>
        {open ? "Hide Details" : "View Details"}
      </button>

      {open && (
        <div>
          <h3>Original Content</h3>
          <p>{article.originalContent}</p>

          {article.updatedContent && (
            <>
              <h3>AI Updated Content</h3>
              <p>{article.updatedContent}</p>
            </>
          )}

          {article.references && (
            <>
              <h3>References</h3>
              <ul>
                {article.references.map((ref, i) => (
                  <li key={i}>
                    <a href={ref} target="_blank">{ref}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
