import ProjectCard from "@/app/components/home/ProjectCard"

const WorksContent = () => {
    const projectsData = [
    {
      id: 1,
      title: "StudySpark Web App - The AI Study Assistant",
      logo: "/subbilogo.png",
      description: "StudySpark app is an AI-powered web application designed to help students study smarter by combining real-time chat support with personalized course recommendations. The platform integrates advanced natural language processing through the Groq API, enabling students to ask questions, receive instant explanations, and get tailored academic guidance while they learn.",
      image: "/StudySpark.png"
    },
    {
      id: 2,
      title: "Fluorish Fuel Station Application",
      logo: "/React.png",
      description: "Still in progress. A role-based web application built to streamline filling station operations. It provides dashboards for managers, cashiers, accountants, supervisors, and attendants to record fuel sales, manage pumps, track lubricant purchases, and monitor stock. The system aims to reduce manual processes and improve operational visibility, and is currently under active development.",
      image: "/FillingStationImg.png"
    },
    {
      id: 3,
      title: "Stain Website Landing Page",
      logo: "/storybook.png",
      description: "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
      image: "/StainLandingImg.png"
    },
  ]

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
        <div className="flex flex-col gap-4">
        {projectsData.map((item) => (
          <div key={item.id} className="project-card-wrapper">
            <ProjectCard
              title={item.title}
              description={item.description}
              image={item.image}
              logo={item.logo}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorksContent