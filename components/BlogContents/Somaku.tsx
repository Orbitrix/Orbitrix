import BlogSearchBox from "../BlogSearchBox";

const Somaku = () => {
  return (
    <div className="pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-50">
      <section className="px-6 lg:col-span-2">
        <p className="font-outfit text-[17px]">
          Building Somaku: Every Conversation Makes It Better
        </p>

        <p className="font-jsl text-gray-600 mt-2 text-[15px] leading-6.5">
          Great technology isn't built in a day. Behind every intelligent system
          are countless hours of testing, learning, refining, and listening. At
          Orbitrix, we believe the best innovations are shaped not only by the
          people who build them but also by the people who use them.
        </p>

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          That's exactly where we are with Somaku .
        </p>

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          Progress, One Test at a Time: We've successfully completed the first
          testing phase of Somaku, and the results have been invaluable. Beyond
          identifying areas for improvement, the feedback has given us deeper
          insight into how people naturally interact with AI, what they expect,
          and how we can create a more intuitive experience. Every comment,
          suggestion, and observation is helping shape a better product.
        </p>

        <img src="/somaku-logo-cropped.jpeg" className="mt-8 w-full" />

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          What's Happening Now?
        </p>

        <p className="font-jsl text-gray-600 mt-1 text-[15px] leading-6.5">
          We're currently in our second testing phase. This stage is focused on
          refining performance, improving interactions, and ensuring Somaku
          delivers an experience that feels natural, reliable, and useful.
          Building AI isn't just about making it smarter. It's about making it
          work better for the people who rely on it.
        </p>

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          Looking Ahead Somaku is growing with every test, every iteration, and
          every lesson we learn. We're not interested in rushing to launch.
          We're committed to building something thoughtful, dependable, and
          genuinely valuable for the people it's designed to serve. The journey
          continues, and we're excited to share more as Somaku evolves.
          Orbitrix: Building technology that understands people.
        </p>

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          The Orbitrix drones solve real Nigerian problems. Farmers need
          accurate weather forecasts—Orbitrix drones profile atmospheric
          conditions that improve rainfall predictions. Researchers need data
          from remote areas—Orbitrix drones go where ground stations can’t.
          Industries need aerial monitoring—Orbitrix drones stay up long enough
          to actually complete the job.
        </p>

        {/* <img src="/drone3.jpg" className="mt-8 w-full" /> */}

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          When people see an Orbitrix drone take off for a multi-day mission,
          they ask how it’s possible.
        </p>

        <p className="font-jsl text-gray-600 mt-1  text-[15px] leading-6.5">
          The answer is simple: Orbitrix engineers refused to accept the
          limitations everyone else assumed were fixed. We built what we needed
          because waiting for someone else to build it wasn’t an option.
        </p>

        <p className="font-outfit text-gray-900 font-medium mt-6 text-[16px]">
          Orbitrix: Building the future with people in mind.
        </p>
      </section>

      <section className="max-lg:px-6 max-lg:mt-20">
        <BlogSearchBox />
      </section>
    </div>
  );
};

export default Somaku;
