import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { format } from 'date-fns';
import Navbar from './UI/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


// Dummy data for example purposes
const posts = [
  {
    title: "The Great Gatsby",
    date: new Date("2023-04-15"),
    description:
      "The Great Gatsby is a novel by American author F. Scott Fitzgerald. First published in 1925, it is set in the Jazz Age on Long Island and tells the story of a mysterious millionaire named Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    image: "/blank cover.jpg",
    slug: "the-great-gatsby",
  },
  {
    title: "The Catcher in the Rye",
    date: new Date("2023-05-01"),
    description:
      "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It is a story of Holden Caulfield, a teenage boy who is struggling with his transition into adulthood and dealing with the death of his brother.",
    image: "/blank cover.jpg",
    slug: "the-catcher-in-the-rye",
  },
  {
    title: "To Kill a Mockingbird",
    date: new Date("2023-05-01"),
    description:
      "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Set in the Deep South during the Great Depression, it tells the story of a young girl named Scout Finch as she grows up and learns about racial inequality and injustice.",
    image: "/blank cover.jpg",
    slug: "to-kill-a-mockingbird"
  },
  {
    title: "1984",
    date: new Date("2023-05-03"),
    description:
      "1984 is a dystopian novel by George Orwell published in 1949. Set in a totalitarian society, it follows the story of Winston Smith as he rebels against the oppressive government and tries to find a way to live freely.",
    image: "/blank cover.jpg",
    slug: "1984"
  },
  {
    title: "Pride and Prejudice",
    date: new Date("2023-05-05"),
    description:
      "Pride and Prejudice is a novel by Jane Austen published in 1813. Set in the English countryside, it follows the story of Elizabeth Bennet as she navigates the social norms and expectations of her time and falls in love with the brooding Mr. Darcy.",
    image: "/blank cover.jpg",
    slug: "pride-and-prejudice"
  },
  {
    title: "The Catcher in the Rye",
    date: new Date("2023-05-07"),
    description:
      "The Catcher in the Rye is a novel by J.D. Salinger published in 1951. Set in the 1940s, it follows the story of Holden Caulfield as he struggles with alienation and growing up in a society that he sees as superficial and phony.",
    image: "/blank cover.jpg",
    slug: "the-catcher-in-the-rye"
  },
  {
    title: "The Lord of the Rings",
    date: new Date("2023-05-09"),
    description:
      "The Lord of the Rings is a fantasy novel by J.R.R. Tolkien published in three volumes between 1954 and 1955. Set in the fictional world of Middle-earth, it follows the journey of hobbit Frodo Baggins as he tries to destroy the One Ring and defeat the evil Sauron.",
    image: "/blank cover.jpg",
    slug: "the-lord-of-the-rings"
  },
  {
    title: "The Hitchhiker's Galaxy",
    date: new Date("2023-05-11"),
    description:
      "The Hitchhiker's Guide to the Galaxy is a science fiction novel by Douglas Adams published in 1979. It follows the misadventures of human Arthur Dent and his alien friend Ford Prefect as they travel through space and time after Earth is destroyed to make way for a hyperspace bypass.",
    image: "/blank cover.jpg",
    slug: "the-hitchhikers-guide-to-the-galaxy"
  },{
    title: "The Picture of Dorian Gray",
    date: new Date("2023-05-15"),
    description:
      "The Picture of Dorian Gray is a novel by Oscar Wilde published in 1890. It follows the story of a young man named Dorian Gray who sells his soul to retain his youth and beauty, while a portrait of him ages and reflects the ugliness of his soul.",
    image: "/blank cover.jpg",
    slug: "the-picture-of-dorian-gray"
  },
  {
    title: "One Hundred Years of Solitude",
    date: new Date("2023-05-17"),
    description:
      "One Hundred Years of Solitude is a novel by Gabriel Garcia Marquez published in 1967. It tells the story of the Buendia family over several generations in the fictional town of Macondo, exploring themes of solitude, love, and the cyclical nature of time.",
    image: "/blank cover.jpg",
    slug: "one-hundred-years-of-solitude"
  },
  {
    title: "The Brothers Karamazov",
    date: new Date("2023-05-19"),
    description:
      "The Brothers Karamazov is a novel by Fyodor Dostoevsky published in 1880. It follows the story of the Karamazov family and explores themes of morality, faith, and the nature of God.",
    image: "/blank cover.jpg",
    slug: "the-brothers-karamazov"
  },
  {
    title: "The Stranger",
    date: new Date("2023-05-21"),
    description:
      "The Stranger is a novel by Albert Camus published in 1942. It follows the story of Meursault, an emotionally detached Algerian man who is accused and convicted of murder and sentenced to death.",
    image: "/blank cover.jpg",
    slug: "the-stranger"
  },
  {
    title: "Brave New World",
    date: new Date("2023-05-23"),
    description:
      "Brave New World is a dystopian novel by Aldous Huxley published in 1932. Set in a future society that has achieved stability and happiness through the suppression of human emotion, it explores themes of individuality, freedom, and the dangers of conformity.",
    image: "/blank cover.jpg",
    slug: "brave-new-world"
  },
  {
    title: "Wuthering Heights",
    date: new Date("2023-05-25"),
    description:
      "Wuthering Heights is a novel by Emily Bronte published in 1847. Set in the moors of Yorkshire, it follows the story of the passionate and destructive love between Catherine Earnshaw and Heathcliff, and the repercussions of their actions on the next generation.",
    image: "/blank cover.jpg",
    slug: "wuthering-heights"
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-4">New Book Releases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="block border border-gray-400 rounded-lg overflow-hidden hover:shadow-lg">
              <img src={post.image} alt={post.title} className="w-full" />
              <span className="book-title">{post.title}</span>
              <div className="p-4">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {format(post.date, "MMMM d, yyyy")}
                </p>
                <p className="text-gray-800">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>

  );
}
