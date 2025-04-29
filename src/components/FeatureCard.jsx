import React from "react";
import { Hotel, CalendarCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <Hotel className="w-8 h-8 text-blue-600" />,
    title: "Shinam xonalar",
    description: "Har xil byudjetlarga mos keladigan zamonaviy va qulay xonalar."
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
    title: "Tez bron qilish",
    description: "Bir necha bosish orqali bron qiling – oddiy va xavfsiz."
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Xalqaro qo‘llab-quvvatlash",
    description: "Dunyo bo‘ylab mavjud mehmonxonalar va ko‘p tilli xizmatlar."
  }
];

const FeatureCard = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Nima uchun bizni tanlashadi?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
