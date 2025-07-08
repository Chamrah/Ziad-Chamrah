import ProjectCard from './ProjectCard';

const Work = () => {

    const works = [
        {
          imgSrc: '/images/synapse10.png',
          title: 'Social network app',
          tags: ['Php', 'Html','Css','Javascript'],
          projectLink: 'https://github.com/Chamrah/synapse-v2.git'
        },
        {
          imgSrc: '/images/semlalia.png',
          title: 'Resource management Humans for teachers of higher education',
          tags: ['Laravel', 'Bootstrap','Html','Javascript'],
          projectLink: ''
        },
        {
          imgSrc: '/images/headphone.png',
          title: 'Helmet bluetooth website',
          tags: ['Html', 'Css'],
          projectLink: ''
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