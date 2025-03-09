import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name?: string;
  position?: string;
  company?: string;
  testimonial?: string;
  rating?: number;
  avatar?: string;
  delay?: number;
}

const Testimonial = ({
  name = "Sarah Johnson",
  position = "Marketing Director",
  company = "TechGrowth Inc.",
  testimonial = "Working with this SEO agency transformed our online presence. Our organic traffic increased by 150% in just three months, and our conversion rates have never been better.",
  rating = 5,
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  delay = 0.2,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-600">
                {position}, {company}
              </p>
              <div className="flex mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill={i < rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic flex-grow">"{testimonial}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
}

const TestimonialsSection = ({
  title = "What Our Clients Say",
  subtitle = "Hear from businesses that have achieved remarkable results with our SEO strategies",
  testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechGrowth Inc.",
      testimonial:
        "Working with this SEO agency transformed our online presence. Our organic traffic increased by 150% in just three months, and our conversion rates have never been better.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      delay: 0.2,
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
      testimonial:
        "Their strategic approach to SEO and content marketing helped us establish authority in a highly competitive industry. We're now ranking for keywords we never thought possible.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      delay: 0.4,
    },
    {
      name: "Jessica Williams",
      position: "E-commerce Manager",
      company: "StyleShop",
      testimonial:
        "The ROI we've seen from their SEO services has been incredible. Our e-commerce sales have doubled year-over-year thanks to the targeted traffic they've driven to our site.",
      rating: 4,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      delay: 0.6,
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              delay={0.2 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
