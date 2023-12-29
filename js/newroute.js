document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    document.addEventListener("click", (e) => {
        const { target } = e;
        if (!target.matches("nav a")) {
            return;
        }
        e.preventDefault();
        route(target);
    });

    const routes = {
        404: {
            template: "/templates/404.html",
            title: "404",
            description: "Page not found",
        },
        "/": {
            template: "/templates/index.html",
            title: "Home",
            description: "This is the home page",
        },
        about: {
            template: "/templates/about.html",
            title: "About Us",
            description: "This is the about page",
        },
        contact: {
            template: "/templates/contact.html",
            title: "Contact Us",
            description: "This is the contact page",
        },
    };

    const route = (target) => {
        const path = target.getAttribute("href").replace("#", "");
        window.history.pushState({}, "", target.href);
        locationHandler(path);
    };

    const locationHandler = async (path) => {
        const route = routes[path] || routes["404"];
        const html = await fetch(route.template).then((response) => response.text());
        document.getElementById("content").innerHTML = html;
        document.title = route.title;
        document.querySelector('meta[name="description"]').setAttribute("content", route.description);

        // Remove the "current" class from all navigation links
        navLinks.forEach((link) => link.classList.remove("current"));
        
        // Add the "current" class to the current navigation link
        const currentLink = document.querySelector(`nav a[href="${path}"]`);
        if (currentLink) {
            currentLink.classList.add("current");
        }
    };

    window.addEventListener("popstate", () => {
        const path = window.location.hash.replace("#", "");
        locationHandler(path);
    });

    // Initial page load
    const initialPath = window.location.hash.replace("#", "") || "/";
    locationHandler(initialPath);
});
