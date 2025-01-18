export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The care and attention I received at GastroClinic was exceptional. The staff was professional and caring.",
      author: "Sarah Johnson",
      title: "Patient"
    },
    {
      quote: "Dr. Smith and the team provided excellent care throughout my treatment. I highly recommend their services.",
      author: "Michael Brown",
      title: "Patient"
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          What Our Patients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.author}
              className="bg-white p-6 rounded-lg shadow-soft"
            >
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-gray-500 text-sm">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 