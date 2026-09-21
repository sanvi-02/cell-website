export default function Features() {
    const features = [
        {
            title: "Connect",
            description:
                "Bridge the gap between ambitious students, seasoned alumni, and industry-leading investors to forge powerful networks.",
            icon: "/connect.svg",
        },
        {
            title: "Inspire",
            description:
                "Spark the entrepreneurial spirit through high-impact guest lectures, summit events, and real-world founder stories.",
            icon: "/inspire.svg",
        },
        {
            title: "Guide",
            description:
                "Provide the mentorship, resources, and structural support necessary to navigate the complex journey of building a startup.",
            icon: "/guide.svg",
        },
    ];

    return (
        <section
            id="Features"
            className="w-full bg-white px-8 md:px-16 lg:px-[7%] py-16 md:py-20 flex justify-center"
        >
            <div className="relative w-full max-w-86/100 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="flex flex-col items-start"
                    >
                        {/* Icon */}
                        <div
                            className="
                                w-[72px] h-[72px]
                                rounded-[9px]
                                bg-[#F0F3FF]
                                flex items-center justify-center
                            "
                        >
                            <img
                                src={feature.icon}
                                alt={`${feature.title} icon`}
                                className="w-[72px] h-auto object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3
                            className="
                                mt-5
                                font-manrope
                                font-[600]
                                text-[20px]/[28px]
                                leading-[24px]
                                text-[#06258F]
                            "
                        >
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p
                            className="
                                mt-3
                                max-w-[330px]
                                font-manrope
                                font-[400]
                                text-[16px]/[26px]
                                leading-[23px]
                                text-[#858585]
                            "
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}