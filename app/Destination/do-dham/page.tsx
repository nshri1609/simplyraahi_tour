"use client";
import C7 from "@/components/c7";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ChevronIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

export default function DoDhamPage() {
    const [activeTab, setActiveTab] = useState("Overview");
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const tabs = ["Overview", "Itinerary", "Things to Carry"];

    const locationData = {
        title: "DO DHAM YATRA",
        description: "Visit two sacred temples of Uttarakhand",
        image: "https://images.unsplash.com/photo-1571328565610-56f07b8bf3ce?auto=format&fit=crop&q=100&w=1920&h=1080",
        duration: "6 Days",
        difficulty: "Moderate to Challenging",
        altitude: "3,583m",
        bestTime: "May to June & September to October",
        startingPoint: "Rishikesh/Haridwar",
        pdfLink: "https://drive.google.com/file/d/1gw3aCmlpRiI0yl97E7Aj_DRC35ia5N3p/view?usp=sharing",
        whatsappNumber: "919876543210",
        phoneNumber: "919876543210",
        email: "info@simplyraahi.com",
        gallery: [
            {
                src: "https://i.pinimg.com/736x/d9/4e/32/d94e323360437bd95441039c85e2f6c1.jpg",
                alt: "Do Dham Yatra"
            },
            {
                src: "https://i.pinimg.com/736x/fc/44/74/fc4474aa77a9f7da719d1aa8c0ec5ddc.jpg",
                alt: "Temple View"
            },
            {
                src: "https://i.pinimg.com/736x/54/e7/45/54e7458bc2180ea48671f3b429378471.jpg",
                alt: "Mountain View"
            },
            {
                src: "https://i.pinimg.com/736x/ed/8b/f5/ed8bf5e875f52f297dcf4ce9fe931fb7.jpg",
                alt: "Trek Path"
            },
            {
                src: "https://i.pinimg.com/736x/34/f1/7b/34f17bc7a5b707bdeaf8de52d824d708.jpg",
                alt: "Scenic View"
            },
            {
                src: "https://i.pinimg.com/736x/aa/0b/84/aa0b84b423279471095eda6452358aa3.jpg",
                alt: "Temple Architecture"
            },
            {
                src: "https://i.pinimg.com/736x/d8/a0/25/d8a02592c477de7dd495b3b28f697eb4.jpg",
                alt: "Mountain Landscape"
            },
            {
                src: "https://i.pinimg.com/736x/39/59/33/3959334facf065ff66f13b408accbaa0.jpg",
                alt: "Trekking Route"
            }
        ]
    };

    const handleDownloadPDF = () => {
        window.open(locationData.pdfLink, "_blank");
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/917902059525", "_blank");
    };

    const handleCall = () => {
        window.location.href = "tel:+917902059525";
    };

    const handleEmail = () => {
        window.open("https://mail.google.com/mail/u/0/?fs=1&to=info@simplyraahi.com&tf=cm", "_blank");
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative h-screen w-full overflow-hidden">
                    <Image
                        src={locationData.image}
                        alt="Do Dham Yatra"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={100}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-white px-4"
                        >
                            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
                                {locationData.title}
                            </h1>
                            <p className="text-xl mt-4 max-w-3xl mx-auto">{locationData.description}</p>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Tabs */}
                    <div className="flex space-x-8 border-b border-gray-200 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-2 text-lg font-medium transition-colors ${
                                    activeTab === tab
                                        ? "border-b-2 border-blue-500 text-blue-600"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === "Overview" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-grow prose max-w-none md:w-2/3">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Yatra Overview</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        The Do Dham Yatra is a sacred pilgrimage to two of the most revered temples in the Garhwal Himalayas - Kedarnath and Badrinath. This spiritual journey takes you through some of the most breathtaking landscapes of Uttarakhand, offering a perfect blend of religious significance and natural beauty. The yatra is not just a religious journey but also an opportunity to experience the majestic Himalayas up close.
                                    </p>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Yatra Highlights</h3>
                                        <div className="space-y-4">
                                            {[
                                                "Visit Kedarnath Temple",
                                                "Visit Badrinath Temple",
                                                "Scenic Himalayan views",
                                                "Spiritual experience",
                                                "Cultural immersion",
                                                "Natural hot springs"
                                            ].map((highlight, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Time to Visit</h3>
                                    <p className="text-gray-600">{locationData.bestTime}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
                                    <p className="text-gray-600">{locationData.duration}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Altitude</h3>
                                    <p className="text-gray-600">{locationData.altitude}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Difficulty Level</h3>
                                    <p className="text-gray-600">{locationData.difficulty}</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Starting Point</h3>
                                    <p className="text-gray-600">{locationData.startingPoint}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "Itinerary" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
                            {[
                                {
                                    day: "Day 01",
                                    title: "Haridwar to Guptkashi",
                                    details: [
                                        "Drive Distance: 225 km | Drive Time: 9 hours",
                                        "Pick up from Haridwar Railway Station/Prescheduled destination",
                                        "Drive to Guptkashi (situated 47 km from Kedarnath shrine)",
                                        "Visit famous ancient temples: Vishwanath Temple and Ardhnareshwar Temple",
                                        "Evening at leisure to acclimatize and explore the town",
                                        "Dinner and overnight stay in hotel/camp at Guptkashi"
                                    ]
                                },
                                {
                                    day: "Day 02",
                                    title: "Guptkashi to Sonprayag to Kedarnath",
                                    details: [
                                        "Drive Distance: 30 km | Drive Time: 2 hours",
                                        "Trek Distance: 19 km one way",
                                        "Early morning departure after breakfast",
                                        "Drive to Sonprayag Transport Parking",
                                        "Take local vehicle/jeep to Gaurikund (2 km, at own cost)",
                                        "Start trekking to Kedarnath (19 km)",
                                        "Optional: Hire Pony (₹5000) or Palki (₹10000) for return journey",
                                        "Helicopter service available (cost to be confirmed for 2023)",
                                        "Evening Sandhya Aarti & Darshan at Kedarnath Temple",
                                        "About Kedarnath Temple: Standing at 3,580m altitude, near Mandakini River",
                                        "Dinner and overnight stay at Kedarnath in hotel/camp"
                                    ]
                                },
                                {
                                    day: "Day 03",
                                    title: "Kedarnath to Guptkashi/Phata",
                                    details: [
                                        "Trek Distance: 19 km | Trek Time: Variable",
                                        "Drive Distance: 30 km | Drive Time: 2 hours",
                                        "Early morning start for return trek",
                                        "Trek back to Sonprayag",
                                        "Coordinate with driver for pickup at Sonprayag/Phata/Sirsi",
                                        "Drive back to Guptkashi",
                                        "Evening rest and relaxation",
                                        "Dinner and overnight stay at Guptkashi"
                                    ]
                                },
                                {
                                    day: "Day 04",
                                    title: "Guptkashi/Phata to Pandukeshwar/Badrinath",
                                    details: [
                                        "Drive Distance: 200 km | Drive Time: 8 hours",
                                        "Early morning breakfast and checkout",
                                        "Drive to Pandukeshwar via Joshimath, Pipalkoti",
                                        "Check into hotel at Pandukeshwar/Badrinath",
                                        "Evening at leisure",
                                        "Dinner and overnight stay at hotel"
                                    ]
                                },
                                {
                                    day: "Day 05",
                                    title: "Badrinath Temple Visit",
                                    details: [
                                        "Early morning temple darshan",
                                        "Visit Mana Village - Last Indian Village",
                                        "Visit Vyas Cave and Ganesh Cave",
                                        "Visit Bheem Pul and Saraswati River origin",
                                        "Evening aarti at Badrinath Temple",
                                        "Dinner and overnight stay at hotel"
                                    ]
                                },
                                {
                                    day: "Day 06",
                                    title: "Return to Haridwar",
                                    details: [
                                        "Drive Distance: 165 km | Drive Time: 5 hours",
                                        "Early morning breakfast and checkout",
                                        "Drive to Rishikesh - the Yoga capital of the world",
                                        "Visit Ram Jhula and Laxman Jhula in Rishikesh",
                                        "Continue to Haridwar (25 km)",
                                        "Drop at Railway Station/Airport as per your schedule",
                                        "Tour concludes with divine memories"
                                    ]
                                }
                            ].map((day, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <div
                                        className="p-6 cursor-pointer"
                                        onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-blue-600 font-semibold">{day.day}</span>
                                                <h3 className="text-xl font-semibold text-gray-900 mt-1">{day.title}</h3>
                                            </div>
                                            <ChevronIcon className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                                                expandedDay === index ? "rotate-180" : ""
                                            }`} />
                                        </div>
                                    </div>
                                    {expandedDay === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-6"
                                        >
                                            <ul className="space-y-3 text-gray-600">
                                                {day.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            ))}

                            {/* Trek Inclusions */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trek Inclusions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "All Meals (Veg only) during the journey",
                                                "Comfortable accommodation in hotels/guesthouses",
                                                "Experienced and qualified guides",
                                                "Friendly and supportive staff",
                                                "All necessary permits and fees",
                                                "Transportation from Haridwar and back",
                                                "Medical Amenities – First Aid Kit, Oxygen Support",
                                                "Sanitised and hygienic accommodations",
                                                "VIP darshan arrangements"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Not Included</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Personal expenses",
                                                "Any kind of insurance",
                                                "Anything not mentioned in inclusions",
                                                "Tips to staff",
                                                "Cost of any emergency evacuation",
                                                "Additional stay due to bad weather",
                                                "Temple offerings and puja items",
                                                "Helicopter tickets (if not opted)"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "Things to Carry" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Items</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        category: "Essentials",
                                        items: [
                                            "Backpack (30-40 liters)",
                                            "Comfortable walking shoes",
                                            "Water bottle (1-2 liters)",
                                            "Basic first aid kit",
                                            "Power bank",
                                            "Camera"
                                        ]
                                    },
                                    {
                                        category: "Clothing",
                                        items: [
                                            "Light jacket",
                                            "Comfortable clothes",
                                            "Raincoat/umbrella",
                                            "Hat/cap",
                                            "Sunglasses",
                                            "Socks (2-3 pairs)"
                                        ]
                                    },
                                    {
                                        category: "Personal Care",
                                        items: [
                                            "Sunscreen",
                                            "Lip balm",
                                            "Personal medications",
                                            "Toiletries",
                                            "Hand sanitizer",
                                            "Towel"
                                        ]
                                    }
                                ].map((category, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md p-6"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            {category.category}
                                        </h3>
                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Gallery Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {locationData.gallery.map((image, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative h-64 overflow-hidden rounded-xl shadow-lg"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Action Cards */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-[#2C5364] to-[#203A43] rounded-lg p-4 text-white"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold">Download Guide</h3>
                                    <p className="text-sm opacity-90">Get destination information</p>
                                    <button
                                        onClick={handleDownloadPDF}
                                        className="w-full bg-white text-[#2C5364] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                    >
                                        Download PDF
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-[#11998e] to-[#38ef7d] rounded-lg p-4 text-white"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <h3 className="text-lg font-semibold">WhatsApp Us</h3>
                                    <p className="text-sm opacity-90">Chat with expert</p>
                                    <button
                                        onClick={handleWhatsApp}
                                        className="w-full bg-white text-[#11998e] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                    >
                                        Message Now
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-[#4B79A1] to-[#283E51] rounded-lg p-4 text-white"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold">Call Us</h3>
                                    <p className="text-sm opacity-90">Call us on 7902059525</p>
                                    <button
                                        onClick={handleCall}
                                        className="w-full bg-white text-[#4B79A1] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                    >
                                        Call Now
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-br from-[#614385] to-[#516395] rounded-lg p-4 text-white"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className="text-lg font-semibold">Email Us</h3>
                                    <p className="text-sm opacity-90">Get information</p>
                                    <button
                                        onClick={handleEmail}
                                        className="w-full bg-white text-[#614385] px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                                    >
                                        Email Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <C7 />
        </>
    );
} 