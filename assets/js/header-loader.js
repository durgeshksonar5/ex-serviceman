(function () {
  const root = window.rootPath || "";
  const currentPath = window.location.pathname;

  // Check if we are at the root level (based on rootPath being './' or empty)
  // AND if the file is index.html or empty path (folder root).
  const isRootLevel = root === "./" || root === "/" || root === "";
  const isIndexFile =
    currentPath.endsWith("index.html") ||
    currentPath.endsWith("/") ||
    currentPath.endsWith("\\");

  const isHome = isRootLevel && isIndexFile;

  // Logic for Home Link:
  // If on homepage (root index), use '#home' for smooth scroll.
  // Otherwise, use absolute path to root index.html.

  const homeLink = isHome ? "#home" : `${root}index.html`;
  const homeClass = isHome ? "tj-scroll-btn" : ""; // Only add scroll class if on home page

  const headerHTML = `
    <!-- start: Hamburger Menu -->
    <div class="hamburger-area d-lg-none">
        <div class="hamburger_bg"></div>
        <div class="hamburger_wrapper">
            <div class="hamburger_inner">
                <div class="hamburger_top d-flex align-items-center justify-content-between">
                    <div class="hamburger_logo">
                        <a href="${root}index.html" class="mobile_logo">
                            <img src="${root}assets/images/ex-serviceman-logo.png"
                                alt="Ex-Serviceman Security & Manpower Agency Logo">
                        </a>
                    </div>
                    <div class="hamburger_close">
                        <button class="hamburger_close_btn"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                <div class="hamburger_menu">
                    <div class="mobile_menu"></div>
                </div>
                <div class="hamburger-infos">
                    <h5 class="hamburger-title">Contact Info</h5>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="subtitle">Phone</span>
                            <a class="contact-link" href="tel:918857911939">+91 88579 11939</a>
                        </div>
                        <div class="contact-item">
                            <span class="subtitle">Email</span>
                            <a class="contact-link"
                                href="mailto:exservicemen613@gmail.com">exservicemen613@gmail.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="subtitle">Location</span>
                            <span class="contact-link">Pune, Maharashtra, India</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hamburger-socials">
                <h5 class="hamburger-title">Follow Us</h5>
                <div class="social-links style-3">
                    <ul>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end: Hamburger Menu -->

    <!-- start: Header Area -->
    <header class="header-area header-1 header-absolute  section-gap-x">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="header-wrapper">
                        <!-- site logo -->
                        <div class="site_logo">
                            <a class="logo" href="${root}index.html"><img src="${root}assets/images/ex-serviceman-logo.png"
                                    alt="Ex-Serviceman Security & Manpower Agency"></a>
                        </div>

                        <!-- navigation -->
                        <div class="menu-area d-none d-lg-inline-flex align-items-center">
                            <nav id="mobile-menu" class="mainmenu">
                                <ul>
                                    <li class="current-menu-ancestor"><a href="${homeLink}" class="${homeClass}">Home</a>
                                    </li>
                                    <li class=""><a href="${root}about.html">About Us</a>
                                    </li>
                                    <li class=""><a href="${root}gallery.html">Gallery</a>
                                    </li>
                                    <li class=""><a href="${root}career.html">Career</a>
                                    </li>
                                    <li class="has-dropdown"><a href="${root}service.html">Services</a>
                                        <ul class="sub-menu  mega-menu-service">
                                            <li> <a class="mega-menu-service-single"
                                                    href="${root}services/security-guard-service.html"> <span
                                                        class="mega-menu-service-title">Security Guard Services</span> <span class="mega-menu-service-nav"><i
                                                            class="fa-solid fa-arrow-right"></i><i
                                                            class="fa-solid fa-arrow-right"></i></span></a></li>

                                            <li> <a class="mega-menu-service-single"
                                                    href="${root}services/facility-management.html"> <span
                                                        class="mega-menu-service-title">Facility Management</span> <span class="mega-menu-service-nav"><i
                                                            class="fa-solid fa-arrow-right"></i><i
                                                            class="fa-solid fa-arrow-right"></i></span></a>
                                            </li>

                                            <li> <a class="mega-menu-service-single"
                                                    href="${root}services/event-security-bouncers.html"> <span
                                                        class="mega-menu-service-title">Event Security & Bouncers</span> <span class="mega-menu-service-nav"><i
                                                            class="fa-solid fa-arrow-right"></i><i
                                                            class="fa-solid fa-arrow-right"></i></span></a>
                                            </li>

                                            <li> <a class="mega-menu-service-single"
                                                    href="${root}services/industrial-security.html"> <span
                                                        class="mega-menu-service-title">Industrial Security</span> <span class="mega-menu-service-nav"><i
                                                            class="fa-solid fa-arrow-right"></i><i
                                                            class="fa-solid fa-arrow-right"></i></span></a>
                                            </li>

                                            <li> <a class="mega-menu-service-single"
                                                    href="${root}services/personal-security.html"> <span
                                                        class="mega-menu-service-title">Personal Security (PSO)</span> <span class="mega-menu-service-nav"><i
                                                            class="fa-solid fa-arrow-right"></i><i
                                                            class="fa-solid fa-arrow-right"></i></span></a>
                                            </li>

                                            <li> <a class="mega-menu-service-single"
                                                    href="${root}services/fire-safety-training.html"> <span
                                                        class="mega-menu-service-title">Fire Safety & Training</span> <span class="mega-menu-service-nav"><i
                                                            class="fa-solid fa-arrow-right"></i><i
                                                            class="fa-solid fa-arrow-right"></i></span></a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li><a href="${root}contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div class="header-right-item d-none d-lg-inline-flex">
                            <a class="header-contact d-none d-lg-inline-flex" href="tel:918857911939">
                                <span class="call-icon"><i class="fa-solid fa-phone"></i></span>
                                <span class="call-text">+91 8857911939</span>
                            </a>
                            <div class="header-button">
                                <a class="tj-primary-btn" href="${root}contact.html">
                                    <span class="btn-text"><span>Let’s Talk</span></span>
                                    <span class="btn-icon"><i class="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </div>

                        </div>
                        <div class="menu_bar mobile_menu_bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Search Popup -->
        <div class="search_popup">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <div class="tj_search_wrapper">
                            <div class="search_form">
                                <form action="#">
                                    <div class="search_input">
                                        <div class="search-box">
                                            <input class="search-form-input" type="text"
                                                placeholder="Type Words and Hit Enter" required>
                                            <button type="submit">
                                                <i class="fa-solid fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- end: Header Area -->
    `;

  document.write(headerHTML);

  // Active menu highlighting logic
  // We wait for DOMContentLoaded to sure elements are parsed, but since we used document.write, they are parsed immediately.
  // However, we need to run this after the write.

  // Logic: Remove 'current-menu-ancestor' from Home (default) if not Home.
  // Add 'current-menu-ancestor' or 'current-menu-item' to matching link.

  // Only highlight if not home, or if home loop ensures it.
  // index.html code has 'current-menu-ancestor' on Home by default.
  // We need to clear it if another page is active.

  const menuItems = document.querySelectorAll(".mainmenu ul li a");
  let isActiveFound = false;

  // First pass: check for exact matches on href (ignoring hash for non-home pages if needed, but simple match is best)
  // We match against window.location.href or pathname.

  // Normalize paths involves checking if the href matches the end of the location.
  // Note: 'about.html' vs 'contact.html'.

  // Remove default active class logic
  if (!isHome) {
    const homeLi = document.querySelector(
      ".mainmenu ul li.current-menu-ancestor",
    );
    if (homeLi) {
      const homeLink = homeLi.querySelector("a");
      if (
        homeLink &&
        (homeLink.getAttribute("href") === "#home" ||
          homeLink.getAttribute("href").indexOf("index.html") !== -1)
      ) {
        homeLi.classList.remove("current-menu-ancestor");
      }
    }
  }

  menuItems.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Clean href of ../ prefix for comparison if checking strictly by filename,
    // or just resolve absolute URL.
    // link.href gives absolute url.

    if (
      link.href === window.location.href ||
      link.href === window.location.href.split("#")[0]
    ) {
      // Direct match
      // Add class to the parent LI
      link.parentElement.classList.add("current-menu-ancestor"); // or current-menu-item? Template uses ancestor.
      isActiveFound = true;

      // If it's a submenu item, maybe highlight the parent 'Services'?
      // The structure: li.has-dropdown > a(Services) + ul > li > a
      // If link parent parent parent is the main li.
      const parentUl = link.parentElement.parentElement;
      if (parentUl.classList.contains("sub-menu")) {
        const parentLi = parentUl.parentElement;
        if (parentLi) parentLi.classList.add("current-menu-ancestor");
      }
    }
  });
})();
