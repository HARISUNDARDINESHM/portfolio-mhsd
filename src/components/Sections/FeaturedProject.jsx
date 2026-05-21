import React from "react";
import { FaAward, FaCheckCircle, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import Card from "../UI/Card";
import Tilt from "react-parallax-tilt";
import "./FeaturedProject.css";

// Importing the actual award images from the legacy folder
import awardImg1 from "../../../legacy/cert2.jpeg";
import awardImg2 from "../../../legacy/withSP.jpeg";

const FeaturedProject = () => {
    return (
        <section className="section" id="featured-project">
            <h2 className="section-title"><FaAward style={{ marginRight: '10px' }} /> Highlighted Project</h2>
            <div className="featured-container container">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000} className="glass-card-3d">
                    <Card className="featured-card inner-3d-element" delay={0.2} style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
                        <div className="featured-header">
                            <div className="featured-title-wrapper">
                                <h3>REST - Police Week-Off Management System</h3>
                                <span className="badge"><FaStar /> SP Award Winner</span>
                            </div>
                        </div>

                        <div className="featured-content">
                            <div className="featured-text">
                                <p className="featured-intro">
                                    I developed a Web and Mobile application for the Kanyakumari District Police Department to digitize their weekly-off process. Working in a team of three, I handled everything from talking to officers to understand their needs to building the final software. The system is currently used by more than 2,000 police officers. It allows officers to request leave through a mobile or web app, while senior officials use a web dashboard to approve requests based on the available manpower.
                                </p>
                                <p className="featured-impact">
                                    Because this project successfully solved a major administrative challenge, I was honored to receive an award from the District Superintendent of Police (SP), Kanyakumari. This project taught me how to build scalable technology that serves the public and improves government operations.
                                </p>

                                <div className="featured-details">
                                    <div className="detail-section">
                                        <h4>The Problem</h4>
                                        <p>Before this app, police officers had to ask for leave manually. It was hard for senior officers to know how many people were on duty and how many were away.</p>
                                    </div>

                                    <div className="detail-section">
                                        <h4>How it Works</h4>
                                        <ul>
                                            <li><strong>Request:</strong> An officer uses the mobile or web app to ask for a weekly off.</li>
                                            <li><strong>Review:</strong> The senior officer checks the web dashboard to see if there are enough police available for duty that day.</li>
                                            <li><strong>Decision:</strong> Based on the manpower, the senior officer approves or denies the request.</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>My Role</h4>
                                        <ul>
                                            <li><strong>Planning:</strong> I met with the police to understand how their leave system works.</li>
                                            <li><strong>Building:</strong> I helped develop both the website and the mobile app.</li>
                                            <li><strong>Database:</strong> I organized the data so the app can handle 2,000+ users every day.</li>
                                        </ul>
                                    </div>

                                    <div className="detail-section">
                                        <h4>Features</h4>
                                        <ul className="feature-grid">
                                            <li><FaCheckCircle className="check-icon" /> <span><strong>Easy Application:</strong> Officers can apply for leave in just a few clicks.</span></li>
                                            <li><FaCheckCircle className="check-icon" /> <span><strong>Admin Dashboard:</strong> A clear view for higher authorities to manage their team.</span></li>
                                            <li><FaCheckCircle className="check-icon" /> <span><strong>Instant Updates:</strong> Officers get a notification as soon as their leave is approved.</span></li>
                                        </ul>
                                    </div>

                                    <div className="detail-section tech-used">
                                        <h4>Tech Used</h4>
                                        <div className="tech-tags">
                                            <span className="tech-tag">Next.js</span>
                                            <span className="tech-tag">MySQL</span>
                                            <span className="tech-tag">React Native</span>
                                            <span className="tech-tag">Express.js (Node.js)</span>
                                        </div>
                                    </div>
                                    
                                    <div className="featured-actions" style={{ marginTop: '2rem' }}>
                                        <a href="https://rest.kkipolice.site/" target="_blank" rel="noreferrer" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                            color: '#fff',
                                            padding: '0.8rem 1.8rem',
                                            borderRadius: '30px',
                                            fontWeight: '600',
                                            fontSize: '1.1rem',
                                            boxShadow: '0 4px 15px rgba(108, 92, 231, 0.4)',
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none'
                                        }}>
                                            <FaExternalLinkAlt /> View Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="featured-images">
                                <div className="image-wrapper">
                                    <img src={awardImg1} alt="Certificate of Appreciation" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x500?text=Please+add+award-certificate.jpg+to+assets' }} />
                                    <p className="image-caption">Certificate of Appreciation from SP</p>
                                </div>
                                <div className="image-wrapper">
                                    <img src={awardImg2} alt="Award Ceremony" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Please+add+award-ceremony.jpg+to+assets' }} />
                                    <p className="image-caption">Receiving the Award</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Tilt>
            </div>
        </section>
    );
};

export default FeaturedProject;
