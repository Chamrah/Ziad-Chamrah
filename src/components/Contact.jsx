const Contact = () =>{
    const socialLinks = [
        {
          href: 'https://www.instagram.com/nues.tro7?igsh=MXU4a2V2YjJweHNvZQ%3D%3D&utm_source=qr',
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM18 6C17.4477 6 17 6.44772 17 7C17 7.55228 17.4477 8 18 8C18.5523 8 19 7.55228 19 7C19 6.44772 18.5523 6 18 6Z" fill="currentColor"/>
</svg>
,
          alt: 'Instagram'
        },
        {
          href: 'https://www.linkedin.com/in/ziad-chamrah-4b43b02a1/',
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
          </svg>,
          alt: 'LinkedIn'
        },
        {
          href: 'mailto:ziadchamrah20@gmail.com',
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z" fill="currentColor"/>
</svg>
,
          alt: 'Email'
        }
      ];

      return (
        <section id="contact" className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex-col-2">
                    <h2 className="headline-2 lg:max-[12ch]:">
                        Contact me for collaboration
                    </h2>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
                        Reach out today to discuss your project needs and start
                        collaborating on something amazing !
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        {socialLinks.map(({href,icon,alt} , key)=>(
                            <a href={href} target="_blank" className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80" key={key}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
                <form method="POST" action="https://getform.io/f/bvrrgnob" className="xl:pl-10 2xl:pl-20">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gaps-2 flex gap-3">
                       <div className="gb-4 mb-4">
                       <label htmlFor="name" className="label">Name</label>
                       <input type="text" className="text-field" id="name" autoComplete="name" required placeholder="" name="name"/>
                       </div>

                       <div className="mb-4">
                       <label htmlFor="name" className="label">Email</label>
                       <input type="text" className="text-field" id="email" autoComplete="email" required placeholder="" name="email"/>
                       </div>

                     
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea name="message" id="message" className="text-field resize-y min-h-32 max-h-80" placeholder="Hi!" required></textarea>
                       </div>
                    <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center">Submit</button>


                </form>
            </div>
        </section>
      )
}

export default Contact;