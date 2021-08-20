import React from "react";

export default function Card({
  id,
  link,
  image,
  title,
  description,
  technologies,
  summary,
}) {
  let innerTitle;
  if (link.href) {
    innerTitle = (
      <a href={link.href} rel="noreferrer" target="_blank">
        {title}
      </a>
    );
  } else {
    innerTitle = title;
  }

  return (
    <article key={id}>
      <a href={link.href} className="image" rel="noreferrer" target="_blank">
        <img src={image.src} alt={image.alt} />
      </a>
      <div className="inner">
        <h4>{innerTitle}</h4>
        <p>{description}</p>

        <h5>Technologies I've used: </h5>
        <ul>
          {technologies.map((technology) => (
            <li key={technology.id}>{technology.name}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </article>
  );
}
