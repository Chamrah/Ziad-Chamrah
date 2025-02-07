import ProjectCard from './ProjectCard';

const Work = () => {

    const works = [
        {
          imgSrc: '/images/headphone.png',
          title: 'Helmet bluetooth website',
          tags: ['Html', 'Css'],
          projectLink: 'https://musify-5al0.onrender.com/'
        },
        
      ];
    return (
        <section id="work" className="section">
            <div className="container pl-5 pr-5">
                <h2 className="headline-2 mb-8 pl-2">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({imgSrc,title,tags,projectLink},key)=>(
                            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />

                        ))
                    }
                </div>
            </div>


        </section>
    )
}

export default Work;