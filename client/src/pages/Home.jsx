import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <section class="featured-pet">
                    <div class="image-block">
                        <img src="https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Featured Pet" />
                    </div>
                    <div class="details">
                        <h2>Bringing you closer to your favorite memories.</h2>
                    </div>
                </section>

                <section class="highlights">
                    <h2>A Note From Our Founder:</h2>
                    <p class="note">At Pawsh&reg, we believe every furry friend deserves a loving home. That's why we pour our hearts into matching the perfect pets with their forever families. And to show our appreciation, we're offering an exclusive deal: refer a friend who adopts, and you'll receive a Pawsh&reg gift basket filled with goodies for your own beloved companion!

                    </p>
                    <p>Offer good until 5/27/25; must be mentioned in referral form to qualify.</p>
                </section>

                <section class="adoption">
                    <div class="image-block">
                        <img src="https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdCUyMGluJTIwYXJtc3xlbnwwfDB8MHx8fDI%3D"
                            alt="Pets Available">
                    </div>
                    <h2>New Friends!</h2>
                    <a href="./adoption.html" class="button">Adopt Me</a>
                    <p>See our newest available pets! Will one be your new best friend?</p>
                </section>

                <section class="details">
                    <h2>Store Hours:</h2>
                    <p><span>Monday:</span> closed</p>
                    <p><span>Tuesday:</span> 10:00am - 8:00pm</p>
                    <p><span>Wednesday:</span> 10:00am - 8:00pm</p>
                    <p><span>Thursday:</span> 10:00am - 8:00pm</p>
                    <p><span>Friday:</span> 10:00am - 9:00pm</p>
                    <p><span>Saturday:</span> 10:00am - 9:00pm</p>
                    <p><span>Sunday:</span> 12:00pm - 6:00pm</p>
                </section>


                <section class="team">
                    <h2>Meet Our Team</h2>
                    <div class="member">

                        <p>"My vision to create an ethical, care-based bridge for families and fur friends to connect, has
                            forged unique bonds while maintaining high standards and integrity in every pairing."
                            <br />
                                ~ Param Javastrapni, Founder
                        </p>
                        <img src="https://images.pexels.com/photos/6497112/pexels-photo-6497112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Member 1">
                    </div>
                    <div class="member">

                        <p>"Not only do I ensure the safety and quality of all, I also spearhead the photography that we offer
                            our breeders and families to help their fur friends put their best paw forward!""
                            <br />
                                ~ Elemina Boolean, Manager
                        </p>
                        <img src="https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                    alt="Member 2" />
                    </div>
                </section>

                <section class="thanks">
                    <img src="https://images.unsplash.com/photo-1554830072-52d78d0d4c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwYWRvcHRpb258ZW58MHwxfDB8fHwy"
                        alt="thanks">
                        <br />
                            <p>Thank you on behalf of our fur friends and partners, for choosing Pawsh for your family!</p>
                        </section>

                        <section class="stories">
                            <h2>Adoption Stories</h2>
                            <div class="story">

                                <img src="https://images.pexels.com/photos/7752806/pexels-photo-7752806.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                    alt="Customer 1" />

                                    <p>"I recently adopted a dog from Pawsh Inc., and I couldn't be happier with the experience. They
                                        clearly care about about all the animals and made sure we were a good fit!"
                                        <br />
                                            ~ Cara S. Seder, Cinci OH
                                    </p>


                            </div>
                            <div className="story">
                                <img src="https://images.pexels.com/photos/16454770/pexels-photo-16454770/free-photo-of-elegant-mother-posing-with-daughter-and-white-dog.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Customer 2" />
                                    <p>"Mom surprised me with a puppy she adopted from Pawsh for my 10th birthday! She even came with the
                                        cutest dog toys! They were so nice, and now I have the cuddliest best friend ever!!"
                                        <br />
                                            ~ Rea Act, Loveland OH
                                    </p>

                            </div>
                        </section>

                        <section class="faqs">
                            <div class="image-block">
                                <img src="https://images.unsplash.com/photo-1692382496182-05f3984391fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0JTIwYm94fGVufDB8MXwwfHx8Mg%3D%3D"
                                    alt="FAQs">
                            </div>
                            <h2>Our Most Common</h2>
                            <a href="./FAQs.html" class="button">Questions</a>
                            <p>Cat got your tongue? Nothing new here...the answer to some of our most frequent questions is only one click of a button!</p>
                        </section>
                        <section class="services">
                            <div class="image-block">
                                <img src="https://images.pexels.com/photos/14219030/pexels-photo-14219030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                                    alt="Membership" />
                            </div>
                            <h2>Check Out Our</h2>
                            <a href="./services.html" class="button">Services</a>
                            <p>We pair experienced and aspiring photographers with our fur families to create one of a kind unique experiences and memories; custom packages available upon request.</p>
                        </section>
                        <section class="contacts">
                            <div class="image-block">
                                <img src="https://images.unsplash.com/photo-1611700885802-4ea038105709?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Contact-us" />
                            </div>
                            <h2>Need More Help?</h2>
                            <a href="./contact.html" class="button">Contact Us</a>
                            <p>Need a specific question answered? Our dedicated staff are knowledgeable and prompt, and can address any questions not covered on our website. Contact us for more details!
                            </p>
                        </section>
                    </main>
                        <Footer />
                        </>
                ); {/* Closing the JSX fragment */}
};

export default Home;
