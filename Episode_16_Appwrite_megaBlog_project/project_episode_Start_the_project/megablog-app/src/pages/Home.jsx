import React, { useEffect, useState } from "react";
import service from "../appwrite/configuration";
import { Container, PostCard } from "../components/imports";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <Container>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-100">
            Login to read posts
          </h1>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* ───────────────────────── Hero Section ───────────────────────── */}
      <section className="relative  pb-12 pt-6 sm:pt-12 lg:pt-16">
        <Container>
          <div className="relative w-full overflow-hidden rounded-xl">
            <img
              src="/images/homepage_image.png"
              alt="hero banner"
              className="w-full h-auto object-cover rounded-none"
            />
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Posts Section ───────────────────────── */}
      <section className=" py-16">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
            Recent blog posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;

