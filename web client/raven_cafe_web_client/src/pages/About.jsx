import React, { useEffect } from 'react';
import '../styles/About.scss';
// import topImage from '../assets/cafe 01.jpg';
import { Link } from 'react-router-dom';
import cheff01 from '../assets/cheff01.jpeg';
import cheff02 from '../assets/cheff02.jpeg';
import barista01 from '../assets/barista01.jpeg';
import barista02 from '../assets/barista02.jpeg';
import waitress01 from '../assets/waitress01.jpeg';
import waitress02 from '../assets/waitress02.jpeg';
import { useDispatch } from 'react-redux';
import { updateNavIndex } from '../services/navIndexSlice';

const About = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateNavIndex(4));
    },[]);

    return (
        <div className="aboutPage">
            <section id="topBanner">
                <img src={'https://images.pexels.com/photos/11905186/pexels-photo-11905186.jpeg?cs=srgb&dl=pexels-liza-bakay-11905186.jpg&fm=jpg&w=3130&h=2075'} alt="top banner" />
                <div className="bannerStyle"></div>
                <div className="infoContainer">
                    <p className="title">
                        #About Us
                    </p>
                    <p className="info">Welcome to our cafe's About page !!!. Here you can meet our team, see who holds which position and get in touch with us. You can contact us through the provided methods or use the message form to send us a message directly. Additionally, you can find our location on the map provided. We look forward to hearing from you !!!.</p>
                </div>
            </section>

            <section id="staff">
                <p className="title"># Our Staff</p>
                <div className="staffContainer">
                    <div className="card">
                        <img src={cheff01} alt="staff profile pic" />
                        <p className="info">Chief Chef</p>
                        <p className="title">Mr. James Smith</p>
                    </div>
                    <div className="card">
                        <img src={cheff02} alt="staff profile pic" />
                        <p className="info">Assistant Chef</p>
                        <p className="title">Mr. Daniel Lee</p>
                    </div>
                    <div className="card">
                        <img src={barista01} alt="staff profile pic" />
                        <p className="info">Chief Barista</p>
                        <p className="title">Mr. Kevin Jones</p>
                    </div>
                    <div className="card">
                        <img src={barista02} alt="staff profile pic" />
                        <p className="info">Assistant Barista</p>
                        <p className="title">Mr. Tyler Miller</p>
                    </div>
                    <div className="card">
                        <img src={waitress01} alt="staff profile pic" />
                        <p className="info">Waitress</p>
                        <p className="title">Ms. Emma Johnson</p>
                    </div>
                    <div className="card">
                        <img src={waitress02} alt="staff profile pic" />
                        <p className="info">Waitress</p>
                        <p className="title">Ms. Sophia Williams</p>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="contactContainer">
                    <div className="slide01">
                        <div className="infoContainer">
                            <p className="title">#Contact Us</p>
                            <p className="info">
                                If you have any questions or suggestions please contact us through below methods, or through <i>"#Leave a Meaasage"</i> section. We would love to hear from you.
                            </p>
                        </div>
                        <div className="reviewContainer">
                            <p className="info">
                                if you are looking for a place to leave a feedback, please leave a review in the FeedBack Page.
                            </p>
                            <Link to={'/feedBack'} className='feedBackLink'>To FeedBacks</Link>
                        </div>
                    </div>
                    <div className="slide02">
                        <p className="title">#Leave a Message</p>
                        <div className="fieldContainer">
                            <input type='text' id='subject' placeholder='Subject' />
                            <input type="email" id='email' placeholder='Email (Optional)' />
                            <textarea type="text" name="message" placeholder="Your Message" rows="8"></textarea>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;