import React, { useEffect, useState } from "react";
const Crawler = require("simplecrawler");

export default function Sitemap({ url }) {
  const [sitemap, setSitemap] = useState([]);
  useEffect(() => {
    // url = "https://sriharidas.github.io/SD-206263/";
    let crawler = Crawler(url).on(
      "fetchcomplete",
      (queueItem, responseBuffer, response) => {
        try {
          if (
            response.url.includes("html") ||
            (response.url.includes("htm") && response.url.includes(url))
          ) {
            console.log(response.url);
            setSitemap((prevState) => [...prevState, response.url]);
          }
        } catch (err) {
          alert(err);
        }
      }
    );

    crawler.start();
  }, [url]);
  return (
    <>
      {sitemap.length > 0 && (
        <ul>
          {sitemap.map((url, indx) => (
            <li key={indx}>{url}</li>
          ))}
        </ul>
      )}
    </>
  );
}
