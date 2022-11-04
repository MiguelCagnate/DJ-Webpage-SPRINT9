import React from "react";

export const Sounds = () => {
  return (
    <div>
      <h1>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1098749083&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: "100",
          }}
        >
          <a
            href="https://soundcloud.com/milobembe"
            title="MILO BEMBE"
            target="_blank"
            style={{
              color: "#ccc",
              textDecoration: "none",
            }}
          >
            MILO BEMBE
          </a>
          ·
          <a
            href="https://soundcloud.com/milobembe/la_nuit"
            title="La Nuit"
            target="_blank"
            style={{
              color: "#ccc",
              textDecoration: "none",
            }}
          >
            La Nuit
          </a>
        </div>
      </h1>
    </div>
  );
};
