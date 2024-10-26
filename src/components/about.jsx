import "./about.css";
import videoSrc from "/src/assets/video.mp4";

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
            <video src={videoSrc} className="video" controls></video>
                
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
            <div className="history">
                <h2>History</h2>
                <p>Our organization’s history is one of growth, resilience, and a relentless pursuit of excellence. Since our founding, we have continuously evolved, adapting to the changing needs of our communities and the world at large. Some key milestones in our journey include:</p>
                <ul><li><b>2012:</b> Launched our first initiative, impacting over 10,000 lives through grassroots programs focused on education and community building.</li>
                <li><b>2015:</b>Expanded our reach internationally, forming partnerships with organizations and stakeholders across different sectors.</li>
                <li><b>2018:</b>Introduced our innovation lab, where our experts and partners collaborate to develop sustainable solutions that address pressing global challenges.</li>
                <li><b>2020-Present:</b>We have continued to grow, launching new initiatives that span environmental sustainability, social justice, and technology access, consistently striving to make a larger, more meaningful impact.</li></ul>
                <p>Our journey is fueled by the belief that small actions, combined with dedication and persistence, can lead to monumental change.</p>
                <img src="/src/assets/turtle.jpg" alt="turtle" />
            </div>
            <div className="mandate">
                <h2>Our Mandate</h2>
                <p>At the heart of our organization lies a steadfast commitment to our mandate, which serves as the guiding framework for all our initiatives and activities. Our mandate is not just a set of goals; it is a holistic approach aimed at fostering sustainable development and empowering communities across the globe. Below are the key components of our mandate:</p>
                
                <ul>
                    <li><b>Empower Communities:</b> We believe that real change begins at the grassroots level. Our primary focus is on empowering communities by providing them with the necessary tools and resources to make informed decisions. Through workshops, training sessions, and resource-sharing, we encourage community engagement and active participation in projects that directly impact their lives. By fostering a sense of ownership, we help individuals and groups to become change-makers in their own right.</li>
                    <li><b>Promote Sustainable Development: </b>Sustainability is a cornerstone of our operations. We are committed to developing initiatives that not only address current needs but also ensure the well-being of future generations. Our approach involves creating environmentally sustainable solutions that are economically viable, thereby balancing the need for development with the responsibility of preserving natural resources. We strive to promote practices that support the health of our planet while driving economic growth.</li>
                    <li><b>Drive Innovation: </b>In an ever-evolving world, innovation is key to addressing complex challenges. We invest significantly in research and development to create cutting-edge solutions tailored to the unique issues faced by communities. Our collaborations with technology innovators enable us to harness new technologies, facilitating the development of programs that leverage data and digital tools for social good. By staying at the forefront of innovation, we can effectively tackle the pressing challenges of today.</li>
                    <li><b>Enhance Collaboration: </b>Collaboration is essential for maximizing impact. We actively seek partnerships with local organizations, governments, and other stakeholders to align our efforts and resources. By building a network of collaborators, we facilitate knowledge sharing and cooperation across various sectors. This synergy not only amplifies our collective impact but also ensures that initiatives are culturally relevant and well-informed by local insights.</li>
                    <li><b>Ensure Inclusivity: </b>Inclusivity is fundamental to our mandate. We are dedicated to prioritizing the involvement of marginalized and underrepresented groups in our decision-making processes. Our programs are designed to address the specific needs of these populations, ensuring that everyone has a voice and the opportunity to participate in initiatives that affect their lives. We believe that diversity enriches our work and leads to more effective solutions.</li>
                    <li><b>Advocate for Policy Change: </b>Our organization recognizes the importance of influencing policy to create systemic change. We engage with policymakers to advocate for legislation and regulations that support community needs and reflect our values of sustainability and equity. Through research and advocacy, we aim to raise awareness of critical issues affecting communities, ensuring that their voices are heard in the halls of power.</li>
                    <li><b>Uphold Integrity and Transparency: </b>Integrity and transparency are non-negotiable principles in our organization. We maintain open communication with stakeholders about our processes, decisions, and outcomes. Our commitment to ethical practices in all our operations and partnerships fosters trust and accountability, ensuring that we remain responsible stewards of the resources and support entrusted to us.</li>
                    <li><b>Foster Education and Awareness: </b>Education is a powerful tool for change. We provide educational resources and training that empower individuals with the knowledge and skills needed to navigate their challenges. By promoting awareness of social, economic, and environmental issues, we equip communities to engage critically with the world around them and advocate for their rights and needs.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;