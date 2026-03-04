import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <h3 className='text-xl font-bold'>CS - Ticket System</h3>
                    <p className='text-wrap'>
                        Empowering seamless communication<br />
                        between users and support teams. Our<br /> CS-Ticket
                        system ensures every concern is <br />tracked, managed,
                        and resolved with utmost priority.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover"><i class="fa-brands fa-x-twitter"></i> CS - X Twitter</a>
                    <a className="link link-hover"><i class="fa-brands fa-linkedin-in"></i> CS - LinkedIn</a>
                    <a className="link link-hover"><i class="fa-brands fa-facebook-f"></i> CS Facebook</a>
                    <a className="link link-hover"><i class="fa-solid fa-envelope"></i> CS - E-Mail</a>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content border-base-300 border-t p-10">
                <aside>
                    <p> © {new Date().getFullYear()}  CS - Ticket Systems. All right reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;