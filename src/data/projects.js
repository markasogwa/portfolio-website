export const projectsData = [
  {
    id: 1,
    title: "GTM Pay - VTU Digital Services Platform",
    description:
      "Full-stack platform for instant airtime and data purchase with seamless payment integration. Features Paystack popup checkout, webhook-based payment verification, real-time delivery tracking, and multi-network support (MTN, Airtel, Glo, 9mobile).",
    stack: "Next.js, Node.js, MongoDB, Paystack, VTPass, Tailwind CSS",
    live: "https://gtm-pay.netlify.app",
    github: "https://github.com/markasogwa/gtm-frontend",
    videoId: "EiDOL0iBhzw", // ✅ Add your video ID here
    featured: true,
    order: 1,
  },
  {
    id: 2,
    title: "Smart Delivery & Pickup Manager — Custom WooCommerce Plugin",
    description:
      "A custom WooCommerce plugin that replaces the default shipping system with a fully configurable multi-country delivery and pickup management solution. Built for stores where shipping costs vary by region or local government area, and where customers prefer picking up from a logistics office rather than waiting for home delivery. Supports multiple currencies out of the box, allowing international customers to pay in their local currency while the store owner manages prices in their base currency, with automatic conversion handled via WP Wham Currency Switcher.",
    stack:
      "PHP, WordPress, WooCommerce, JavaScript, jQuery, AJAX, MySQL, CSS, WordPress API, Currency Conversion Integration",
    live: "https://mercylinkstore.com",
    github: "#",
    image: "/projects/delivery.png",
    featured: true,
    order: 2,
  },

  {
    id: 3,
    title: "Full-Stack Movie Discovery Platform",
    description:
      "A production-ready movie discovery platform where users search, save, and review movies in real-time. Built with React and Node.js using secure JWT authentication, MongoDB persistence, and seamless TMDB API integration. Fully responsive, deployed on Netlify and Render.",
    stack: "React.js, Node.js, Express.js, MongoDB, TMDB API",
    image: "/projects/movie-app.png",
    live: "https://macflix-movie-app.netlify.app/",
    github: "https://github.com/markasogwa/macflix-frontend",
    featured: true,
    order: 3,
  },
  {
    id: 4,
    title: "Products Shipping Control Pro — WooCommerce Plugin",
    description:
      "A custom WooCommerce plugin that controls product shipping availability at country and state/region level. Integrates with a companion delivery plugin to enforce restrictions based on the customer's actual delivery destination, not just their billing address. Features per-product configuration, state and region-level restrictions, hard checkout blocking, custom alert messages, quick admin preset buttons, and CDN flag images for cross-device compatibility. Built with nonce verification, server-side sanitization, and duplicate notice prevention.",
    stack: "PHP, WordPress, WooCommerce, JavaScript, jQuery, AJAX, MySQL, HTML/CSS, WordPress REST API",
    image: "/projects/control.png",
    live: "https://mercylinkstore.com",
    github: "#",
    featured: true,
    order: 4,
  },
  // Add more projects...
];
