import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import "./Blog.css";
import galleryPhoto1 from "../../assets/gallery-1.jpg";
import galleryPhoto2 from "../../assets/gallery-2.jpg";
import galleryPhoto3 from "../../assets/gallery-3.jpg";
import galleryPhoto4 from "../../assets/gallery-4.jpg";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const galleryPhotos = [
    { id: 1, src: galleryPhoto1, alt: "Yoga Pose 1" },
    { id: 2, src: galleryPhoto2, alt: "Yoga Pose 2" },
    { id: 3, src: galleryPhoto3, alt: "Yoga Pose 3" },
    { id: 4, src: galleryPhoto4, alt: "Yoga Pose 4" },
  ];

  useEffect(() => {
    const query = '*[_type == "posts"][0..2]';

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>

        {/* Galerie von Fotos */}
        <div className="gallery-container">
          {galleryPhotos.map((photo) => (
            <div className="gallery-photo" key={photo.id}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="content-container">
          {posts.map((post) => (
            <div className="post" key={post._id}>
              <div className="tag">{post.label}</div>
              <a href="#">
                <img src={urlFor(post.thumbnail)} alt={post.title} />
              </a>

              <a href="#">
                <h3 className="post-title">{post.title}</h3>
              </a>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;