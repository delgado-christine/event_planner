import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            {/* Page Header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            {/* Section for describing the purpose or the overview of the app */}
            <section className='description'>
                <p>
                    Plan and Organize your Events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.
                </p>

                <button className='get-started-button'>Get Started</button>
            </section>

            {/* Section to list or categorize different types of events */}
            <section className='events_categories'>
                {/* Social event types */}
                <ul>
                    <h2>Social Events</h2>
                    <li>Birthday Parties</li>
                    <li>Anniversary Celebrations</li>
                    <li>Wedding Receptions</li>
                    <li>Baby Showers</li>
                    <li>Graduation Parties</li>
                    <li>Family Reunions</li>
                    <li>Corporate Meetings</li>
                </ul>

                {/* Entertainment-based event types */}
                <ul>
                    <h2>Entertainment Events</h2>
                    <li>Concerts</li>
                    <li>Music Festivals</li>
                    <li>Film Screenings</li>
                    <li>Comedy Shows</li>
                    <li>Art Exhibitions</li>
                    <li>Cultural Events</li>
                </ul>

                {/* Community-focused event types */}
                <ul>
                    <h2>Community Events</h2>
                    <li>Fundraising Events</li>
                    <li>Charity Galas</li>
                    <li>Volunteer Drives</li>
                    <li>Neighborhood Block Parties</li>
                    <li>Community Festivals</li>
                    <li>Cultural Celebrations</li>
                </ul>
            </section>

            {/* Section to highlight app features or functionalities */}
            <section className='features'>
                <h2>Features</h2>

                {/* List of Key platform features */}
                <ul>
                    <h2>Easy event creation and management</h2>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and Notifications</li>
                </ul>
            </section>

            {/* Section to showcase user reviews or testimonials */}
            <section className='testimonials'>
                <h2>Testimonials</h2>

                <div className='testimonial'>
                    <p>"Event planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className='author'>- Emily Johnson</p>
                </div>

                <div className='testimonial'>
                    <p>"I use event planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className='author'>- John Smith</p>
                </div>
            </section>

            {/* Section to provide contact information or a contact form */}
            <section className='contact'>
                <h2>Contact Us</h2>

                {/* Contact Form */}
                <form>
                    {/* Name Input Field */}
                    <input type="text" placeholder='Name' />
                    {/* Email Input Field */}
                    <input type="email" placeholder='Email' />
                    {/* Message Text Area */}
                    <textarea placeholder='Message'></textarea>
                    {/* Submit Button */}
                    <button className='submit-button'>Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;
