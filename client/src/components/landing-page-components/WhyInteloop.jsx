import { FiMessageSquare } from "react-icons/fi"
import { IoSearch } from "react-icons/io5"
import { FaRegLightbulb  } from "react-icons/fa6"

const CheckItem = ({ label }) => {
    return (
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2fb9ad"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check mr-2"
            >
                <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-sm text-gray-700 font-sora">{label}</span>
        </div>
    );
}

const WhyInteloop = () => {
    const reasons = [
        {
            icon: <FiMessageSquare className="text-teal-600" size={32} />,
            title: 'Scattered Feedback',
            description:
                'No more hunting through multiple tools, emails, and channels to find feedback. Inteloop brings everything into one central hub',
            features: ['Integrated channels', 'Smart organization'],
        },
        {
            icon: <IoSearch className="text-teal-600" size={32} />,
            title: 'Manual Analysis',
            description:
                'Stop spending hours organizing feedback into themes and insights. Let AI do the heavy lifting for you',
            features: ['AI Powered Insights', 'Theme Detection'],
        },
        {
            icon: <FaRegLightbulb className="text-teal-600" size={32} />,
            title: 'No Visual Context',
            description:
                'Feedback without visual context is hard to understand. Inteloop makes it easy to attach screenshots right with feedback.',
            features: ['Screenshot Uploads', 'Visual Context'],
        },
    ];

    return (
        <section className="bg-gray-50 py-28 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Why Inteloop</h2>
            <p className="text-md text-gray-600 max-w-xl mx-auto mb-12 text-center">
                Solve the most frustrating feedback management challenges with our smart platform
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {reasons.map((item, idx) => (
                    <article
                        key={idx}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-teal-50 p-2 rounded-md">
                                {item.icon}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900 font-sora">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 font-sora mb-5">{item.description}</p>
                        <div className="space-y-2">
                            {item.features.map((feature, i) => (
                                <CheckItem key={i} label={feature} />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default WhyInteloop;
