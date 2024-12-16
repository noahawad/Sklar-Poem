import React from "react";

const Index = () => {
  return (
    <div className="poem-container min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="max-w-2xl mx-auto animate-fade-in">
        <article className="bg-black/90 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-lg">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-white">
            The Path Unseen
          </h1>
          <h2 className="font-serif text-xl text-center mb-8 text-white/80 italic">
            by Noah Awad
          </h2>
          <div className="space-y-6 font-serif text-lg sm:text-xl text-white/90 leading-relaxed poem-text">
            <p>
              Two paths diverged in a world remade,<br />
              And sorry I could not travel both<br />
              And be one traveler, long I stood<br />
              And looked down one as far as I could<br />
              To where it bent in the undergrowth;
            </p>
            <p>
              Two paths diverged in a world remade,<br />
              One forged by science, bright and clear,<br />
              The other cloaked in faith's charade,<br />
              Where progress bent beneath the blade,<br />
              And knowledge drowned in fear.
            </p>
            <p>
              They chose the shadowed trail instead,<br />
              Where reason's light could never thrive.<br />
              Books were burned, and minds were led<br />
              By ancient laws the zealots fed,<br />
              To keep the lie alive.
            </p>
            <p>
              The labs fell silent, their doors locked tight,<br />
              The cure for pain a banned refrain.<br />
              No sterile tools, no healing light,<br />
              No saving hands to mend the night—<br />
              Just suffering ordained.
            </p>
            <p>
              Yet still, some spark refused to fade,<br />
              A secret whispered, deep and slow:<br />
              The truth that science once conveyed<br />
              Could not be killed, nor fully stayed,<br />
              Its roots begin to grow.
            </p>
            <p>
              And so, beneath the crimson tide,<br />
              The seeds of reason find their ground.<br />
              Though darkness claims the world outside,<br />
              Through hidden acts, and quiet pride,<br />
              The path unseen is found.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Index;