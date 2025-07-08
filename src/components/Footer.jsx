import { ButtonPrimary } from "./Button";

const Footer = () => {
  const sitemap = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact me", href: "#contact" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/Chamrah" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ziad-chamrah-4b43b02a1/" },
    { label: "Instagram", href: "https://www.instagram.com/nues.tro7?igsh=MXU4a2V2YjJweHNvZQ%3D%3D&utm_source=qr" },
  ];

  return (
    <footer className="text-white py-8">
      <div className="container">
        {/* Call to Action */}
        <div className="text-center mb-8 mt-10">
          <h2 className="headline-2 mb-4">Let&apos;s work together today!</h2>
        
          <button className="btn start_project"><a href="mailto:ziadchamrah20@gmail.com">Start project</a></button>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ul className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            {sitemap.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <ul className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ziad Chamrah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
