
import SkillCard from "./SkillCard";
const Skill = () => {

    const skillItem = [
      {
        imgSrc: '/images/html-5-svgrepo-com.svg',
        label: 'HTML',
        desc: 'Content Structure'
      },
        {
          imgSrc: '/images/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/images/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/images/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/php3-svgrepo-com.svg',
          label: 'Php',
          desc: 'Server Logic'
        },
        {
          imgSrc: '/images/laravel-svgrepo-com.svg',
          label: 'Laravel',
          desc: 'Framework'
        },
        {
          imgSrc: '/images/mysql-svgrepo-com.svg',
          label: 'Mysql',
          desc: 'Database'
        },
        {
          imgSrc: '/images/python-svgrepo-com.svg',
          label: 'Python',
          desc: 'Data Processing'
        },
        {
          imgSrc: '/images/mongodb.svg',
          label: 'MongoDB',
          desc: 'Database'
        },
        {
          imgSrc: '/images/bootstrap-svgrepo-com.svg',
          label: 'Bootstrap',
          desc: 'UI Framework'
        },
        
        
        {
          imgSrc: '/images/nodejs.svg',
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: '/images/expressjs.svg',
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        
        
        {
          imgSrc: '/images/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'CSS Library'
        },
        {
            imgSrc: '/images/gitlab-svgrepo-com.svg',
            label: 'Gitlab',
            desc: 'DevOps Platform'
          }
          ,
        {
            imgSrc: '/images/git-svgrepo-com.svg',
            label: 'Git',
            desc: 'Version Control'
          }
          ,
        {
            imgSrc: '/images/github-svgrepo-com.svg',
            label: 'GitHub',
            desc: 'Code Collaboration'
          },
          {
            imgSrc: '/images/figma.svg',
            label: 'Figma',
            desc: 'Design tool'
          },
          {
            imgSrc: '/images/jira-svgrepo-com.svg',
            label: 'Jira',
            desc: 'Project Management'
          },
          {
            imgSrc: '/images/sonarqube-svgrepo-com.svg',
            label: 'Sonarqube',
            desc: 'Code Quality'
          },
          {
            imgSrc: '/images/docker-svgrepo-com.svg',
            label: 'Docker',
            desc: 'Containerization Platform'
          },
        
      ];
    return (
        <section className="pt-20 ">
            <div className="container">
                <h2 className="headline-2">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc,label,desc},key)=>(
                            <SkillCard imgSrc={imgSrc} label={label} key={key} desc={desc} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Skill;