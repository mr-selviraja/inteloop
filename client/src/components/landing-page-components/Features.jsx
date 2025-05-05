import { BiLayer } from "react-icons/bi"
import { RiRobot2Line } from "react-icons/ri"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { TbUserShield } from "react-icons/tb"
import { IoMdCloudOutline } from "react-icons/io"
import { LuBrain } from "react-icons/lu"

const features = [
  {
    icon: <BiLayer className="text-3xl text-violet-600" />,
    title: 'Multi-Product Support',
    description: 'Manage feedback separately across multiple products within your organization.',
  },
  {
    icon: <RiRobot2Line className="text-3xl text-violet-600" />,
    title: 'AI Analysis',
    description: 'Leverage AI to analyze feedback and identify common themes and patterns.',
  },
  {
    icon: <MdOutlineSpaceDashboard className="text-3xl text-violet-600" />,
    title: 'Insight Dashboard',
    description: 'View comprehensive insights and track feedback trends over time.',
  },
  {
    icon: <TbUserShield className="text-3xl text-violet-600" />,
    title: 'Role-Based Access',
    description: 'Control who can view, submit, and manage feedback with custom roles.',
  },
  {
    icon: <IoMdCloudOutline className="text-3xl text-violet-600" />,
    title: 'Secure Storage',
    description: "Inteloop cannot access your Product's feedback and so your data is safe.",
  },
  {
    icon: <LuBrain className="text-3xl text-violet-600" />,
    title: 'Clean & Intuitive UI',
    description: 'Enjoy an intuitive interface designed for efficiency and ease of use.',
  },
]

function Features() {
  return (
    <section className="bg-gray-50 py-28 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
      <p className="text-md text-gray-600 max-w-xl mx-auto mb-12">
        Everything you need to collect, analyze and act on your product's feedback.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <article
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-violet-50 p-2 rounded-md">
                    {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
