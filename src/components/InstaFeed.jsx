import React from "react";

const InstagramPosts = () => {
  const posts = [
    "https://www.instagram.com/reel/DH_Au0jtpjE/",
    "https://www.instagram.com/reel/DH8PYGlN42N/",
    "https://www.instagram.com/reel/DHgYMdBt-wq/",
    "https://www.instagram.com/reel/DHdzW12NjMZ/",
    "https://www.instagram.com/reel/DHao0ksNSBC/",
    "https://www.instagram.com/reel/DHObA6UNHG6/",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post, index) => (
        <div key={index} className="w-full">
          <iframe
            src={`${post}embed`}
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            allow="encrypted-media"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
