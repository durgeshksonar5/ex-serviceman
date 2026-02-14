(function () {
  const root = window.rootPath || "";

  const footerHTML = `
            <!-- start: Footer Section -->
            <footer class="tj-footer-section footer-4 section-gap-x">
                <div class="footer-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="footer-cta">
                                    <h2 class="cta-title title-anim">Your Safety. Our Duty.</h2>
                                    <a class="cta-btn wow fadeInUp" data-wow-delay=".3s" href="#contact">
                                        <div class="customers">
                                            <ul>
                                                <li><img src="${root}assets/images/testimonial/client-1.webp" alt=""></li>
                                                <li><img src="${root}assets/images/testimonial/client-2.webp" alt=""></li>
                                                <li><img src="${root}assets/images/testimonial/client-3.webp" alt=""></li>
                                            </ul>
                                        </div>
                                        <span class="btn-text"><span>Lets Talk</span> <i class="fas fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="footer-widget widget-subscribe-3 wow fadeInUp" data-wow-delay=".5s">
                                    <h3 class="title">Subscribe to Our Newsletter.</h3>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Enter email" required>
                                            <button class="tj-primary-btn d-none d-sm-flex" type="submit">
                                                <span class="btn-text"><span>Subscribe</span></span>
                                                <span class="btn-icon"><i class="fas fa-arrow-right"></i></span>
                                            </button>
                                            <label for="agree"><input id="agree" type="checkbox" required>Agree to our
                                                <a href="#">Terms &
                                                    Condition?</a></label>
                                            <button class="tj-primary-btn d-flex d-sm-none " type="submit">
                                                <span class="btn-text"><span>Subscribe</span></span>
                                                <span class="btn-icon"><i class="fas fa-arrow-right"></i></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-main-area">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-xl-3 col-md-6">
                                <div class="footer-widget wow fadeInUp" data-wow-delay=".1s">
                                    <div class="footer-logo" style="margin-bottom: 0px;">
                                        <a href="${root}index.html">
                                            <img src="${root}assets/images/ex-serviceman-logo.png"
                                                alt="Ex-Serviceman Security & Manpower Agency"
                                                style="max-width: 140px;">
                                        </a>
                                    </div>
                                    <div class="footer-text">
                                        <p style="color: black;">Disciplined security and manpower services since 2022.
                                            Expert teams trained
                                            in safety, allied services, and housekeeping.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
                                    data-wow-delay=".3s">
                                    <h5 class="title">Services</h5>
                                    <ul>
                                        <li><a href="${root}services/security-guard-service.html">Security Guards</a></li>
                                        <li><a href="${root}services/facility-management.html">Facility Management</a></li>
                                        <li><a href="${root}services/event-security-bouncers.html">Event Security</a></li>
                                        <li><a href="${root}services/industrial-security.html">Industrial Security</a></li>
                                        <li><a href="${root}service.html">All Services</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
                                    data-wow-delay=".5s">
                                    <h5 class="title">Resources</h5>
                                    <ul>
                                        <li><a href="${root}contact.html">Contact us</a></li>
                                        <li><a href="${root}about.html">About Us</a></li>
                                        <li><a href="${root}service.html">Our Services</a></li>
                                        <li><a href="${root}contact.html">Get a Quote</a></li>
                                        <li><a href="${root}index.html">Home</a></li>
                                        <li><a href="${root}contact.html">Feedback</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="footer-widget widget-contact style-2 wow fadeInUp" data-wow-delay=".7s">
                                    <h5 class="title">Our Office</h5>
                                    <div class="footer-contact-info">
                                        <!-- Google Map -->
                                        <div class="office-map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.55647720058!2d73.69815195!3d18.52461405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707650000000!5m2!1sen!2sin"
                                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                title="Our Office Location - Pune District, Maharashtra, India"
                                                aria-label="Google Map showing Pune District, Maharashtra, India">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tj-copyright-area-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="copyright-content-area">
                                    <div class="copyright-text">
                                        <p>&copy; 2025 <a href="#" target="_blank">Ex-Serviceman Security & Manpower
                                                Agency</a> All
                                            right reserved <br>Design & Developed by <a href="#" target="_blank"
                                                style="display: inline-flex; align-items: center; vertical-align: middle;"><img
                                                    src="${root}assets/images/logo-white.png"
                                                    alt="Hindustan Digital Services"
                                                    style="height: 50px; width: auto; vertical-align: middle; margin-left: 4px;"></a>
                                        </p>

                                    </div>
                                    <div class="social-links style-2">
                                        <ul>
                                            <li><a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="#" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                                            </li>
                                            <li><a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-shape-1">
                    <img src="${root}assets/images/shape/pattern-2.svg" alt="">
                </div>
                <div class="bg-shape-2">
                    <img src="${root}assets/images/shape/pattern-3.svg" alt="">
                </div>
            </footer>
            <!-- end: Footer Section -->
  `;

  document.write(footerHTML);
})();
