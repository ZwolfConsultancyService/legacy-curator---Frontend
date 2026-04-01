import React from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    name: "Sarah Johnson",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1559628233-100c798642d4",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    name: "Emily Watson",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    name: "David Miller",
  },
];

const VideoTestimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-green-900">
        Trusted by over one million families
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            
            {/* Thumbnail */}
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition">
                <Play className="text-green-800" size={28} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoTestimonials;