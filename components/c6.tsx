"use client";
import { useRouter } from "next/navigation";

export default function C6() {
  const router = useRouter();
  const handleLocationChange = (location: string) => {
    try {
      // Special cases for specific destinations
      switch (location.toLowerCase()) {
        case "chardham yatra":
          router.push("/Destination/char-dham");
          break;
        case "kedarnath yatra":
          router.push("/Destination/kedarnath");
          break;
        case "do dham yatra":
          router.push("/Destination/do-dham");
          break;
        default:
          const formattedLocation = location.toLowerCase().replace(/\s+/g, "-");
          router.push(`/Destination/${formattedLocation}`);
      }
    } catch (error) {
      console.error("Error navigating to destination:", error);
    }
  };

  const tours = [
    {
      title: "Chardham Yatra",
      image:
        "https://i.pinimg.com/736x/30/a2/e8/30a2e82c5bb00e89a501e50df5c358f6.jpg",
      details:
        "Embark on a Spiritual Odyssey to Kedarnath & the Chardham Circuit.",
      duration: "10 Days & 9 Nights",
      price: "₹25,999",
      buttonText: "View Details",
    },
    {
      title: "Kedarnath Yatra",
      image:
        "https://i.pinimg.com/564x/b3/7d/ae/b37dae0806eec5a55a011a0126ff3c60.jpg",
      details:
        "Experience the divine Kedarnath Temple surrounded by the Himalayas.",
      duration: "5 Days & 4 Nights",
      price: "₹15,999",
      buttonText: "View Details",
    },
    {
      title: "Do dham yatra",
      image:
        "https://i.pinimg.com/736x/35/a8/1b/35a81b479cf0334d503799fd683145ae.jpg",
      details: "Visit the two most sacred Dhams - Kedarnath and Badrinath.",
      duration: "7 Days & 6 Nights",
      price: "₹19,999",
      buttonText: "View Details",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mt-20 max-w-7xl mx-auto">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group"
        >
          <div className="w-full h-full">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h2 className="absolute top-4 left-4 text-white text-2xl font-bold px-3 py-1 rounded-lg z-10">
              {tour.title}
            </h2>
            <div className="absolute inset-0 bg-black/40 text-white p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-center font-medium">{tour.details}</p>
              <p className="mt-4 text-lg">{tour.duration}</p>
              <p className="mt-2 text-2xl font-bold">{tour.price}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => handleLocationChange(tour.title)}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              {tour.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
