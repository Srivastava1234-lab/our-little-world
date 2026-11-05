
"use client";

import { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";
import { birthday } from "./data";

const memories = [
  {
    image: "/images/photo1.jpg",
    date: "THE BEGINNING",
    title: "Our first memory",
    description: "The beginning of something beautiful. ❤️",
  },
  {
    image: "/images/photo2.jpg",
    date: "MY FAVORITE DAY",
    title: "Just us",
    description: "Anywhere is my favorite place with you.",
  },
  {
    image: "/images/photo3.png",
    date: "LITTLE MOMENTS",
    title: "Your smile",
    description: "One of the million reasons I love you.",
  },
    {
    image: "/images/photo6.JPG",
    date: "ALWAYS",
    title: "My favorite person",
    description: "And the best is still yet to come.",
  },
  {
    image: "/images/photo5.jpg",
    date: "MY HAPPY PLACE",
    title: "Close to you",
    description: "You're home to me, no matter where we are.",
  },
  {
    image: "/images/photo4.jpg",
    date: "OUR ADVENTURES",
    title: "Side by side",
    description: "Making memories, one day at a time.",
  },
];

const milestones = [
    {
    date: "THE DAY IT ALL BEGAN",
    title: "When our story started",
    description:
      "I didn't know it then, but meeting you would become one of the best things that ever happened to me.",
    image: "/images/photo7.jpg",
  },
  {
    date: "A LITTLE LATER",
    title: "Falling for you",
    description:
      "Somewhere between our conversations, laughs, and little moments, you became my favorite person.",
    image: "/images/photo8.jpg",
  },
  {
    date: "THE BEAUTIFUL MOMENTS",
    title: "Making memories together",
    description:
      "Every smile, every adventure, and every second spent with you became a memory I wish I could relive forever.",
    image: "/images/photo14.jpg",
  },
  {
    date: "THE LITTLE THINGS",
    title: "Happiness in your presence",
    description:
      "It's the simple moments with you that mean the most. Even doing nothing feels special when I'm with you.",
    image: "/images/photo11.jpg",
  },
  {
    date: "MY FAVORITE PERSON",
    title: "You make everything better",
    description:
      "Your smile has a way of making my hardest days brighter, and your presence makes everything feel right.",
    image: "/images/photo9.jpg",
  },
  {
    date: "EVERY SECOND COUNTS",
    title: "Moments I treasure",
    description:
      "If I could pause time during any moment, it would be the ones where I'm right beside you.",
    image: "/images/photo10.jpg",
  },
  {
    date: "CLOSER THAN EVER",
    title: "Growing together",
    description:
      "Through every laugh, every challenge, and every experience, I'm grateful that we get to grow together.",
    image: "/images/photo12.jpg",
  },
  {
    date: "MY HAPPIEST PLACE",
    title: "Where I belong",
    description:
      "No matter where life takes us, being with you will always feel like being exactly where I'm meant to be.",
    image: "/images/photo13.jpg",
  },
  {
    date: "A LOVE WORTH KEEPING",
    title: "My favorite chapter",
    description:
      "Our story is filled with moments I'll always hold close, and somehow, every new memory becomes my favorite.",
    image: "/images/photo15.jpg",
  },
  {
    date: "FOREVER AND ALWAYS",
    title: "Still choosing you",
    description:
      "I wouldn't trade our story for anything. I can't wait to discover all the beautiful chapters we have yet to write together.",
    image: "/images/photo16.jpg",
  },

];

const reasons = [
  {
    icon: "☀️",
    title: "Your smile",
    text: "It makes even my most ordinary days feel special.",
  },
  {
    icon: "🫶",
    title: "Your heart",
    text: "The kindness and warmth you bring into my life.",
  },
  {
    icon: "😂",
    title: "Your laugh",
    text: "My favorite sound, especially when we're laughing together.",
  },
  {
    icon: "🏡",
    title: "The way you feel like home",
    text: "With you, I can just be myself.",
  },
  {
    icon: "💌",
    title: "Our little moments",
    text: "The tiny things that somehow become my favorite memories.",
  },
  {
    icon: "🌷",
    title: "Simply you",
    text: "I could make a thousand lists and still never say it all.",
  },
];

export default function Home() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <a className="brand" href="#home">
          <span>♡</span> our little world
        </a>

        <a className="nav-link" href="#memories">
          Memories
        </a>
        <a className="nav-link" href="#timeline">
          Our story
        </a>
        <a className="nav-link" href="#letter">
          A letter for you
        </a>

        <MusicPlayer src={birthday.song} />
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-glow" />

        <span className="floating-heart heart-one">♡</span>
        <span className="floating-heart heart-two">♥</span>
        <span className="floating-heart heart-three">✧</span>

        <div className="hero-content">
          <p className="eyebrow">A LITTLE CORNER OF THE INTERNET, JUST FOR YOU</p>

          <p className="hero-pretitle script">Happy birthday, my love</p>

          <h1>
            To my favorite
            <br />
            person in <span>the world.</span>
          </h1>

          <p className="hero-description">
            A little collection of our moments, my favorite memories,
            <br className="desktop-break" />
            and all the things I sometimes forget to say.
          </p>

          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src="/images/our-favorite-photo.JPG"
                alt="One of our favorite memories"
              />
              <span className="photo-heart">♥</span>
            </div>
            <p className="photo-caption script">You + Me, Always</p>
          </div>

          <a href="#memories" className="primary-button">
            Let&apos;s take a little trip down memory lane <span>♡</span>
          </a>

          <p className="hero-footnote">
            MADE WITH ALL MY LOVE, JUST FOR YOU
          </p>
        </div>

        <a href="#memories" className="scroll-cue" aria-label="Scroll to memories">
          ↓
        </a>
      </section>

      {/* Memories gallery */}
      <section className="section memories-section" id="memories">
        <div className="section-heading">
          <p className="eyebrow">LITTLE PIECES OF US</p>
          <h2>
            Moments I&apos;d <span>live twice.</span>
          </h2>
          <p>
            The big adventures, the silly selfies, and all the ordinary
            moments that became extraordinary because they were with you.
          </p>
        </div>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <button
              className="memory-card"
              key={memory.image}
              style={
                { "--rotation": `${index % 2 === 0 ? -1 : 1}deg` } as React.CSSProperties
              }
              onClick={() => setSelectedPhoto(memory.image)}
              aria-label={`Open photo: ${memory.title}`}
            >
              <div className="memory-image">
                <img src={memory.image} alt={memory.title} loading="lazy" />
                <span className="image-heart">♡</span>
              </div>

              <div className="memory-caption">
                <span className="memory-date">{memory.date}</span>
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="gallery-note script">
          And a million more memories to make...
        </p>
      </section>

      {/* Romantic quote */}
      <section className="quote-section">
        <span className="big-quote">“</span>
        <p className="quote-text">
          In a world full of people,
          <br />
          somehow <span>my heart found you.</span>
        </p>
        <p className="script">And I&apos;d find you all over again.</p>
        <span className="quote-decoration">♡</span>
      </section>

      {/* Relationship timeline */}
      <section className="section timeline-section" id="timeline">
        <div className="section-heading">
          <p className="eyebrow">CHAPTERS OF US</p>
          <h2>
            Our little <span>love story.</span>
          </h2>
          <p>
            If our story were a book, these would be some of my favorite pages.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />

          {milestones.map((milestone, index) => (
            <article
              className={`timeline-item ${index % 2 === 1 ? "timeline-right" : ""}`}
              key={milestone.title}
            >
              <span className="timeline-dot">♥</span>
              <div className="timeline-card">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  loading="lazy"
                />
                <div className="timeline-copy">
                  <span className="memory-date">{milestone.date}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reasons I love you */}
      <section className="section reasons-section" id="reasons">
        <div className="section-heading">
          <p className="eyebrow">A VERY SHORT LIST</p>
          <h2>
            Why I love <span>you.</span>
          </h2>
          <p>
            I could write a thousand reasons. Here are just a few to start.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <span className="reason-icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <span className="reason-heart">♡</span>
            </article>
          ))}
        </div>
      </section>

      {/* Love letter */}
      <section className="letter-section" id="letter">
        <div className="letter-intro">
          <p className="eyebrow">SOMETHING FROM MY HEART</p>
          <h2>
            A little letter <span>for you.</span>
          </h2>
          <p>
            The kind of things I want you to remember, today and always.
          </p>
        </div>

        <div className="letter-paper">
          <span className="letter-flower">❀</span>

          <p className="letter-dear script">My sweetest girl,</p>

          {!letterOpen ? (
            <>
              <p className="letter-teaser">
                There&apos;s something I&apos;ve been wanting to tell you.
                A few words, a little piece of my heart, and a reminder
                of just how much you mean to me...
              </p>

              <button
                className="letter-button"
                onClick={() => setLetterOpen(true)}
              >
                Open your letter <span>♡</span>
              </button>
            </>
          ) : (
            <div className="letter-body">
              <p>
                Happy birthday, my love.
              </p>
              <p>
                I wish I could put into words how much happier my life is
                with you in it. You have become such a special part of my
                world, and even the smallest moments with you mean more
                to me than you probably realize.
              </p>
              <p>
                Thank you for being you. Thank you for the laughs, the
                memories, the conversations, and all the little things
                that make what we have feel so special.
              </p>
              <p>
                On your birthday, I hope you see even a little of what I
                see when I look at you: someone wonderful, someone worth
                celebrating, and someone who deserves so much happiness.
              </p>
              <p>
                I can&apos;t promise every day will be perfect, but I can promise
                that I will keep cherishing the time we share and looking
                forward to everything we have yet to experience together.
              </p>
              <p>
                Today is your day. I hope it brings you the biggest smile,
                the warmest hugs, and all the love your heart can hold.
              </p>
              <p className="letter-signature script">
                All my love, always. ♡
              </p>
            </div>
          )}

          <span className="letter-stamp">sealed with love</span>
        </div>
      </section>

      {/* Birthday video */}
      <section className="video-section" id="video">
        <div className="video-heading">
          <p className="eyebrow">PRESS PLAY, MY LOVE</p>
          <h2>
            A little movie of <span>us.</span>
          </h2>
          <p>
            Because some memories deserve to be relived, not just remembered.
          </p>
        </div>

        <div className="video-card">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/video-cover.jpg"
          >
            <source src="/videos/our-memories.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
        </div>

        <p className="hero-footnote" style={{ textAlign: "center" }}>
          OUR LITTLE COLLECTION OF FOREVER MOMENTS
        </p>
      </section>

      {/* Final birthday surprise */}
      <section className="finale-section" id="surprise">
        <div className="finale-glow" />

        <div className="final-heart">♥</div>

        <p className="finale-script script">One last little thing...</p>

        <h2>
          You make my world
          <br />
          <span>so much brighter.</span>
        </h2>

        <p className="finale-message">
          If I could give you one thing for your birthday, it would be the
          chance to see yourself through my eyes, even for a moment.
          Then you&apos;d understand why you mean so much to me.
        </p>

        <button
          className="primary-button finale-button"
          onClick={() => setSurpriseOpen(!surpriseOpen)}
        >
          {surpriseOpen ? "One more hug? ♡" : "One last surprise ♡"}
        </button>

        {surpriseOpen && (
          <div className="surprise-message">
            <span>💌</span>
            <p className="script">Happy birthday, my favorite human.</p>
            <p>
              Here&apos;s to more late-night talks, terrible jokes, spontaneous
              adventures, little kisses, and a thousand ordinary days
              that feel extraordinary because they&apos;re ours.
            </p>
            <p className="script">I love you. Today, tomorrow, and always. ♡</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with</p>
        <span>♥</span>
        <p>for my favorite person in the whole world.</p>
        <span>·</span>
        <p>Our little world, forever.</p>
      </footer>

      {/* Fullscreen photo viewer */}
      {selectedPhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
          >
            ✕
          </button>

          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto} alt="A favorite memory together" />
            <p className="script">A little moment, a lot of love. ♡</p>
          </div>
        </div>
      )}
    </main>
  );
}