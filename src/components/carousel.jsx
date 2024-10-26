import React, { useState } from 'react';
import './Carousel.css'; 

const items = [
    {
        title: "Empower Communities",
        description: "We believe that real change begins at the grassroots level. Our primary focus is on empowering communities by providing them with the necessary tools and resources to make informed decisions. Through workshops, training sessions, and resource-sharing, we encourage community engagement and active participation in projects that directly impact their lives. By fostering a sense of ownership, we help individuals and groups to become change-makers in their own right."
    },
    {
        title: "Promote Sustainable Development",
        description: "Sustainability is a cornerstone of our operations. We are committed to developing initiatives that not only address current needs but also ensure the well-being of future generations. Our approach involves creating environmentally sustainable solutions that are economically viable, thereby balancing the need for development with the responsibility of preserving natural resources. We strive to promote practices that support the health of our planet while driving economic growth."
    },
    {
        title: "Drive Innovation",
        description: "In an ever-evolving world, innovation is key to addressing complex challenges. We invest significantly in research and development to create cutting-edge solutions tailored to the unique issues faced by communities. Our collaborations with technology innovators enable us to harness new technologies, facilitating the development of programs that leverage data and digital tools for social good. By staying at the forefront of innovation, we can effectively tackle the pressing challenges of today."
    },
    {
        title: "Enhance Collaboration",
        description: "Collaboration is essential for maximizing impact. We actively seek partnerships with local organizations, governments, and other stakeholders to align our efforts and resources. By building a network of collaborators, we facilitate knowledge sharing and cooperation across various sectors. This synergy not only amplifies our collective impact but also ensures that initiatives are culturally relevant and well-informed by local insights."
    },
    {
        title: "Ensure Inclusivity",
        description: "Inclusivity is fundamental to our mandate. We are dedicated to prioritizing the involvement of marginalized and underrepresented groups in our decision-making processes. Our programs are designed to address the specific needs of these populations, ensuring that everyone has a voice and the opportunity to participate in initiatives that affect their lives. We believe that diversity enriches our work and leads to more effective solutions."
    },
    {
        title: "Advocate for Policy Change",
        description: "Our organization recognizes the importance of influencing policy to create systemic change. We engage with policymakers to advocate for legislation and regulations that support community needs and reflect our values of sustainability and equity. Through research and advocacy, we aim to raise awareness of critical issues affecting communities, ensuring that their voices are heard in the halls of power."
    },
    {
        title: "Uphold Integrity and Transparency",
        description: "Integrity and transparency are non-negotiable principles in our organization. We maintain open communication with stakeholders about our processes, decisions, and outcomes. Our commitment to ethical practices in all our operations and partnerships fosters trust and accountability, ensuring that we remain responsible stewards of the resources and support entrusted to us."
    },
    {
        title: "Foster Education and Awareness",
        description: "Education is a powerful tool for change. We provide educational resources and training that empower individuals with the knowledge and skills needed to navigate their challenges. By promoting awareness of social, economic, and environmental issues, we equip communities to engage critically with the world around them and advocate for their rights and needs."
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={prevSlide}>&lt;</button>
            <div className="carousel-slide">
                <h2>{items[currentIndex].title}</h2>
                <p>{items[currentIndex].description}</p>
            </div>
            <button className="carousel-button" onClick={nextSlide}>&gt;</button>
            <div className="carousel-indicator">
                {currentIndex + 1} of {items.length}
            </div>
        </div>
    );
};

export default Carousel;
