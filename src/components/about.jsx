import "./about.css";
import Carousel from "./carousel";
import videoSrc from "/src/assets/video.mp4";

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="story">
          <div className="about-description">
            <h2>Our Journey</h2>
            <p>
              Our journey began with a simple yet ambitious goal: to transform
              how people connect with ideas and with each other. Founded in 2010
              by a small group of visionaries, we started as a modest team,
              united by a shared belief that innovation and collaboration could
              bridge gaps, spark progress, and uplift communities worldwide. Our
              initial projects focused on developing local solutions with global
              potential, aiming to create practical resources that could benefit
              individuals and organizations alike.</p><br />  <p> From the outset, we
              prioritized understanding the unique challenges faced by different
              communities, adapting our methods to suit diverse needs. This
              adaptable, people-first approach led us to partner with grassroots
              organizations, government bodies, and other key stakeholders. Each
              collaboration expanded our capabilities, and we developed an array
              of tools and strategies that continue to empower communities
              across the globe. Over the years, our growth has been fueled by
              our commitment to lasting impact. Today, we stand as a leader in
              our field, with a track record of successful initiatives that
              blend technology, innovation, and human insight to address some of
              the world’s most pressing issues.</p><br />  <p> Our journey is not just a
              timeline of milestones but a testament to the power of collective
              effort. As we look to the future, we remain devoted to advancing
              solutions that are sustainable, inclusive, and transformative.
              With each new project, we reaffirm our commitment to empowering
              individuals, driving progress, and inspiring a world where
              meaningful change is within reach for all.
            </p>
          </div>
          <div className="video">
            <video src={videoSrc} className="video" controls></video>
          </div>

        </div>
      </div>

      <h2>Core Values And Mission</h2>
      <div className="values">
        <div className="values-card">
          <h3>Integrity</h3>
          <p>
            We uphold transparency and ethical conduct in all our operations,
            building trust through honesty and accountability.
          </p>
        </div>
        <div className="values-card">
          <h3>Innovation</h3>
          <p>
            We constantly seek new ideas, pushing boundaries to deliver
            solutions that are both practical and transformative.
          </p>
        </div>
        <div className="values-card">
          <h3>Collaboration</h3>
          <p>
            We believe in the power of teamwork, forming partnerships across
            sectors and fostering inclusive environments to maximize our
            collective impact.
          </p>
        </div>
        <div className="values-card">
          <h3>Sustainability</h3>
          <p>
            Our projects are designed with long-term goals in mind, prioritizing
            practices that protect and preserve resources for future
            generations.
          </p>
        </div>
        <div className="values-card">
          <h3>Empowerment</h3>
          <p>
            We strive to provide individuals with the tools, resources, and
            opportunities they need to thrive, ensuring that progress is
            inclusive and far-reaching.
          </p>
        </div>
        <div className="values-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to drive positive change that empowers individuals
            and strengthens communities through forward-thinking, sustainable
            solutions. We envision a world where technology, innovation, and
            equity combine to unlock opportunities for all, creating a future
            marked by shared growth and resilience.
          </p>
        </div>
      </div>
      <div className="history">
        <h2>History</h2>
        <p>
          Our organization’s history is one of growth, resilience, and a
          relentless pursuit of excellence. Since our founding, we have
          continuously evolved, adapting to the changing needs of our
          communities and the world at large. Some key milestones in our journey
          include:
        </p>
        <ul>
        <br />
          <li>
            <b>2012:</b> Launched our first initiative, impacting over 10,000
            lives through grassroots programs focused on education and community
            building.
          </li>
          <br />
          <li>
            <b>2015:</b>Expanded our reach internationally, forming partnerships
            with organizations and stakeholders across different sectors.
          </li>
          <br /> 
          <li>
            <b>2018:</b>Introduced our innovation lab, where our experts and
            partners collaborate to develop sustainable solutions that address
            pressing global challenges.
          </li>
          <br /> 
          <li>
            <b>2020-Present:</b>We have continued to grow, launching new
            initiatives that span environmental sustainability, social justice,
            and technology access, consistently striving to make a larger, more
            meaningful impact.
          </li>
          <br /> 
        </ul>
        <p>
          Our journey is fueled by the belief that small actions, combined with
          dedication and persistence, can lead to monumental change.
        </p>
        <img src="/src/assets/turtle.jpg" alt="turtle" />
      </div>
      <div className="mandate">
        <h2>Our Mandate</h2>
        <p>
          At the heart of our organization lies a steadfast commitment to our
          mandate, which serves as the guiding framework for all our initiatives
          and activities. Our mandate is not just a set of goals; it is a
          holistic approach aimed at fostering sustainable development and
          empowering communities across the globe. Below are the key components
          of our mandate:
        </p>

        <Carousel />
      </div>
    </div>
  );
}

export default About;
