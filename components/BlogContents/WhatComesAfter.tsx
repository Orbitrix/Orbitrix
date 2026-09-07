import Image from "next/image";
import BlogSearchBox from "../BlogSearchBox";

const WhatComesAfter = () => {
  return (
    <div className="bg-gray-50 pt-10 mb-32 grid grid-cols-1 gap-10 md:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8 xl:px-20">
      <article className="px-6 lg:col-span-2">
        <h1 className="font-outfit text-2xl font-bold tracking-tight text-gray-900 md:text-3xl xl:text-4xl">
          What Comes After &ldquo;What If?&rdquo;
        </h1>

        {/* Intro */}
        <div className="mt-6 space-y-4 font-jsl text-[15px] leading-relaxed text-gray-600">
          <p>Innovation doesn&apos;t always begin with a blueprint.</p>
          <p>
            Sometimes, it begins with a question:{" "}
            <span className="font-outfit font-semibold text-gray-900">
              What if?
            </span>
          </p>
          <ul className="space-y-2 border-l-2 border-stone-300 pl-4 italic text-gray-700">
            <li>What if a familiar problem could be approached differently?</li>
            <li>
              What if technology could remove limitations instead of simply
              helping us work around them?
            </li>
            <li>
              What if the answer isn&apos;t immediately obvious, but worth
              exploring anyway?
            </li>
          </ul>
          <p>
            At Orbitrix, these questions are often where our work begins. Before
            there is a product, there is curiosity. Before there is a system,
            there is research. Before there is a solution, there are
            conversations, experiments, and countless attempts to understand the
            problem more deeply.
          </p>
          <p className="font-medium text-gray-900">
            Because having an idea is easy. Discovering what is worth building
            is the real work.
          </p>
        </div>

        <div className="relative my-8 h-64 w-full  rounded-xl sm:h-80 md:h-96">
          <Image
            src="/what-comes-after/image.jpg"
            alt="Orbitrix Ideation and Exploration"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        {/* Section: From Questions to Possibilities */}
        <section className="mt-10">
          <h2 className="font-outfit text-xl font-semibold text-gray-900">
            From Questions to Possibilities
          </h2>
          <div className="mt-3 space-y-3 font-jsl text-[15px] leading-relaxed text-gray-600">
            <p>An idea can look simple on paper. Then engineering begins.</p>
            <p>
              There are different approaches to consider, assumptions to
              challenge, technical limitations to understand, and prototypes to
              test. Sometimes, an approach that seemed perfect at first turns
              out not to be the right one.
            </p>
            <p className="font-medium text-gray-800">
              So we rethink. We adjust. We test again. That is not a setback.
              That is the process.
            </p>
            <p>
              At Orbitrix, we see innovation as an ongoing journey of
              exploration—one that is shaped by learning, experimentation, and
              the willingness to question what already exists. Our work spans
              different areas, from artificial intelligence and intelligent
              software systems to robotics, autonomous technologies, and
              emerging ideas still taking shape.
            </p>
          </div>

          <div className="mt-6 rounded-lg bg-stone-100 p-4 font-outfit text-center text-sm font-semibold tracking-wide text-gray-800">
            Question &bull; Explore &bull; Build &bull; Test &bull; Learn &bull;
            Improve &bull; Repeat
          </div>
        </section>

        {/* Section: The Value of Experimentation */}
        <section className="mt-10">
          <h2 className="font-outfit text-xl font-semibold text-gray-900">
            The Value of Experimentation
          </h2>
          <div className="mt-3 space-y-3 font-jsl text-[15px] leading-relaxed text-gray-600">
            <p>
              Not every experiment becomes a product. And we don&apos;t see that
              as failure.
            </p>
            <p>
              Sometimes, a prototype teaches us what doesn&apos;t work. A
              challenge reveals a better approach. An unexpected result opens
              the door to an entirely new idea.
            </p>
            <ul className="space-y-1.5 pl-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                <span>Every test gives us information.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                <span>Every iteration brings clarity.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                <span>Every lesson helps shape what comes next.</span>
              </li>
            </ul>
            <p>
              Because innovation is not about proving that the first idea was
              right. It is about finding what truly works.
            </p>
          </div>
        </section>

        <div className="relative my-8 h-64 w-full overflow-hidden rounded-xl sm:h-80 md:h-96">
          <Image
            src="/what-comes-after/image-2.jpg"
            alt="Orbitrix Prototyping and Testing"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
          />
        </div>

        <section className="mt-10">
          <h2 className="font-outfit text-xl font-semibold text-gray-900">
            Where Curiosity Leads
          </h2>
          <div className="mt-3 space-y-3 font-jsl text-[15px] leading-relaxed text-gray-600">
            <p>
              The interesting thing about building is that ideas rarely follow a
              straight path. One question leads to another. One experiment
              creates new possibilities. One discovery changes the direction of
              what comes next.
            </p>
            <p>That is why we give ideas room to evolve:</p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>Some become products.</li>
              <li>Some become research.</li>
              <li>Some become lessons.</li>
              <li>
                And some become the starting point for something we haven&apos;t
                imagined yet.
              </li>
            </ul>
            <p>
              We are comfortable with that uncertainty. Because the future is
              rarely built from certainty alone. It is built by people who are
              willing to ask better questions, challenge assumptions, and
              explore possibilities that others may overlook.
            </p>
          </div>
        </section>

        <section className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="font-outfit text-xl font-semibold text-gray-900">
            What Comes Next?
          </h2>
          <div className="mt-3 space-y-4 font-jsl text-[15px] leading-relaxed text-gray-600">
            <p>That remains one of the most exciting questions of all.</p>
            <p>
              At Orbitrix, we are constantly exploring, learning, testing, and
              building—not simply for the sake of creating technology, but to
              discover what technology can become when curiosity leads the way.
            </p>
            <p>
              Because sometimes, the most important step in innovation
              isn&apos;t having all the answers. Sometimes, it is simply being
              willing to ask:{" "}
              <span className="font-outfit font-semibold text-gray-900">
                What if?
              </span>
            </p>
          </div>

          <div className="mt-8 border-l-2 border-stone-400 pl-4">
            <p className="font-outfit text-lg font-bold text-gray-900">
              Orbitrix
            </p>
            <p className="font-jsl text-sm text-gray-600">
              Building what comes next.
            </p>
          </div>
        </section>
      </article>

      {/* Sidebar */}
      <aside className="px-6 max-lg:mt-12 lg:px-0">
        <div className="sticky top-10">
          <BlogSearchBox />
        </div>
      </aside>
    </div>
  );
};

export default WhatComesAfter;
