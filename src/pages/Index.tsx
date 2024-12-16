import React from "react";

const Index = () => {
  return (
    <div className="poem-container min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="max-w-2xl mx-auto animate-fade-in">
        <article className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-lg">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">
            The Road Not Taken
          </h1>
          <h2 className="font-serif text-xl text-center mb-8 text-gray-600 italic">
            by Robert Frost
          </h2>
          <div className="space-y-6 font-serif text-lg sm:text-xl text-gray-700 leading-relaxed poem-text">
            <p>
              Two roads diverged in a yellow wood,<br />
              And sorry I could not travel both<br />
              And be one traveler, long I stood<br />
              And looked down one as far as I could<br />
              To where it bent in the undergrowth;
            </p>
            <p>
              Then took the other, as just as fair,<br />
              And having perhaps the better claim,<br />
              Because it was grassy and wanted wear;<br />
              Though as for that the passing there<br />
              Had worn them really about the same,
            </p>
            <p>
              And both that morning equally lay<br />
              In leaves no step had trodden black.<br />
              Oh, I kept the first for another day!<br />
              Yet knowing how way leads on to way,<br />
              I doubted if I should ever come back.
            </p>
            <p>
              I shall be telling this with a sigh<br />
              Somewhere ages and ages hence:<br />
              Two roads diverged in a wood, and I—<br />
              I took the one less traveled by,<br />
              And that has made all the difference.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Index;