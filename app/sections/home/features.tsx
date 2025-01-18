export function FeaturesSection() {
  const features = [
    {
      title: "Expert Specialists",
      description: "Board-certified gastroenterologists with years of experience",
      icon: "👨‍⚕️",
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic and treatment equipment",
      icon: "🔬",
    },
    {
      title: "Comprehensive Care",
      description: "Complete range of digestive health services",
      icon: "🏥",
    },
  ]

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-heading font-bold text-center mb-12">
        Why Choose GastroClinic?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.title}
            className="text-center p-6 rounded-lg bg-white shadow-soft"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 