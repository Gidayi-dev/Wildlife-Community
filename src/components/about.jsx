import "./about.css";

function About() {
    return (
        <div className="about-container">
        <div className="about-section">
            <div className="story">
            <div className="about-description">
                <h2>Our Journey</h2>
                <p>
                Our journey began with a simple yet ambitious goal: to transform how people connect with ideas and with each other. Founded in 2010 by a small group of visionaries, we started as a modest team, united by a shared belief that innovation and collaboration could bridge gaps, spark progress, and uplift communities worldwide. Our initial projects focused on developing local solutions with global potential, aiming to create practical resources that could benefit individuals and organizations alike.

From the outset, we prioritized understanding the unique challenges faced by different communities, adapting our methods to suit diverse needs. This adaptable, people-first approach led us to partner with grassroots organizations, government bodies, and other key stakeholders. Each collaboration expanded our capabilities, and we developed an array of tools and strategies that continue to empower communities across the globe. Over the years, our growth has been fueled by our commitment to lasting impact.

Today, we stand as a leader in our field, with a track record of successful initiatives that blend technology, innovation, and human insight to address some of the world’s most pressing issues. Our journey is not just a timeline of milestones but a testament to the power of collective effort. As we look to the future, we remain devoted to advancing solutions that are sustainable, inclusive, and transformative. With each new project, we reaffirm our commitment to empowering individuals, driving progress, and inspiring a world where meaningful change is within reach for all.
                </p>
            </div>
            <div className="video">
                <video controls width="100%">
                    <source src="path/to/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>                
            </div>
            </div>
            </div>
            
                <h2>Core Values And Mission</h2>
                <div className="values">
                <div className="values-card">
                    <h3>Integrity</h3>
                    <p>We uphold transparency and ethical conduct in all our operations, building trust through honesty and accountability.</p>
                </div>
                <div className="values-card">
                    <h3>Innovation</h3>
                    <p>We constantly seek new ideas, pushing boundaries to deliver solutions that are both practical and transformative.</p>
                </div>
                <div className="values-card">
                    <h3>Collaboration</h3>
                    <p>We believe in the power of teamwork, forming partnerships across sectors and fostering inclusive environments to maximize our collective impact.</p>
                </div>
                <div className="values-card">
                    <h3>Sustainability</h3>
                    <p>Our projects are designed with long-term goals in mind, prioritizing practices that protect and preserve resources for future generations.</p>
                </div>
                <div className="values-card">
                    <h3>Empowerment</h3>
                    <p>We strive to provide individuals with the tools, resources, and opportunities they need to thrive, ensuring that progress is inclusive and far-reaching.</p>
                </div>
                <div className="values-card">
                    <h3>Our Mission</h3>
                <p>Our mission is to drive positive change that empowers individuals and strengthens communities through forward-thinking, sustainable solutions. We envision a world where technology, innovation, and equity combine to unlock opportunities for all, creating a future marked by shared growth and resilience.</p>
                </div>
            
            </div>
        </div>
    );
}

export default About;