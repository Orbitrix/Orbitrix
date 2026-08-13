import BlogSearchBox from "../BlogSearchBox";

const AiStartsThinking = () => {
  return (
    <div className="pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-24">
      <section className="px-6 lg:col-span-2">
        <h1 className="font-outfit text-xl md:text-2xl font-semibold text-gray-900">
          What Happens When AI Starts Thinking Closer to Home?
        </h1>

        <p className="font-jsl text-gray-500 mt-3 text-[16px] italic leading-relaxed">
          For a while, we've been asking a simple question at Orbitrix: What
          would AI look like if it truly understood where we come from?
        </p>

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-7">
          Not just our words. Our context. Our expressions. Our everyday
          problems. The little things that make a question mean something
          different here. We didn't want to build another AI that simply answers
          questions. We wanted to ask a different question:
        </p>

        <p className="font-jsl text-gray-600 mt-4 text-[15px] leading-7">
          What happens when the questions come from here?
          <br />
          So, we started building. Then came the first test. People interacted
          with it, asked questions, tried different conversations, pushed its
          limits, and told us what worked and what didn't. <br />
          We listened. Some things needed to change. Some ideas needed refining.
          And some possibilities became clearer than we expected. Now, we're in
          the second phase of testing.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl bg-gray-200">
          <img
            src="/ai-starts-thinking (2).png"
            alt="A group of young Nigerian professionals interacting with smartphones and laptops at a shared desk, with a tablet displaying the SOMAKUAI logo."
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="font-jsl text-gray-600 mt-8 text-[15px] leading-7">
          Every conversation is teaching us something new about what AI can
          become when it is built with its users rather than simply built for
          them. We're not ready to show you everything yet. But we're getting
          closer. Because this isn't just about creating an AI that can talk.
          It's about creating one that understands the conversation. Something
          is taking shape at Orbitrix. And soon, you'll meet it. The
          conversation is about to get more Nigerian. Somakuai is coming. Stay
          curious.
        </p>

        <p className="font-outfit text-gray-900 font-medium mt-6 text-[16px]">
          Orbitrix: Building the future with people in mind.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl bg-gray-200">
          <img
            src="/ai-starts-thinking.png"
            alt="A glowing digital neural network network floating over a Lagos city intersection with yellow commercial buses during sunset."
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="max-lg:px-6 lg:mt-0 max-lg:mt-16">
        <div className="sticky top-10">
          <BlogSearchBox />
        </div>
      </section>
    </div>
  );
};

export default AiStartsThinking;
