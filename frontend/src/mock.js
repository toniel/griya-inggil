export const mockData = {
  businessInfo: {
    name: "Kost Griya Inggil Limpung",
    category: "Boarding House",
    rating: 4.9,
    totalReviews: 65,
    phone: "+62 812-2967-9188",
    whatsapp: "+6281229679188",
    address: "Jl. Raya, RT.01/RW.03, Perak, Sempu, Limpung, Batang Regency, Central Java 51271",
    plusCode: "XWWG+4C Sempu, Batang Regency, Central Java",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d109.726!3d-6.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMTguMCJTIDEwOcKwNDMnMzMuNiJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
  },

  overview: {
    title: "Welcome to Kost Griya Inggil Limpung",
    description: "Experience comfortable and affordable living in the heart of Limpung, Batang Regency. Our boarding house offers a safe, clean, and friendly environment perfect for students and professionals alike. With premium facilities and strategic location, we ensure your stay is both convenient and enjoyable.",
    highlights: [
      { value: "4.9", label: "Average Rating" },
      { value: "65+", label: "Happy Tenants" },
      { value: "24/7", label: "Security" },
      { value: "100%", label: "Clean & Maintained" }
    ]
  },

  facilities: [
    { name: "High-Speed WiFi", description: "Fast and reliable internet connection" },
    { name: "Air Conditioning", description: "Individual AC units in every room" },
    { name: "Private Bathroom", description: "Clean ensuite bathroom with water heater" },
    { name: "Kitchen Access", description: "Shared kitchen with modern appliances" },
    { name: "Laundry Service", description: "Weekly laundry service available" },
    { name: "Parking Area", description: "Secure parking for motorcycles and cars" },
    { name: "24/7 CCTV", description: "Complete security surveillance system" },
    { name: "Security Guard", description: "Round-the-clock security personnel" },
    { name: "Furnished Room", description: "Bed, wardrobe, desk, and chair included" },
    { name: "Water Supply", description: "24-hour clean water supply" },
    { name: "Electricity", description: "Stable power supply with backup generator" },
    { name: "Common Area", description: "Comfortable living room and dining area" }
  ],

  roomTypes: [
    {
      id: 1,
      name: "Standard Room",
      price: "Rp 800,000",
      period: "per month",
      size: "3x4 meters",
      features: [
        "Single Bed",
        "Wardrobe",
        "Desk & Chair",
        "Private Bathroom",
        "AC",
        "WiFi"
      ],
      available: true
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "Rp 1,200,000",
      period: "per month",
      size: "4x5 meters",
      features: [
        "Queen Bed",
        "Large Wardrobe",
        "Study Desk",
        "Private Bathroom with Water Heater",
        "AC",
        "WiFi",
        "TV",
        "Mini Fridge"
      ],
      available: true,
      popular: true
    },
    {
      id: 3,
      name: "Premium Room",
      price: "Rp 1,500,000",
      period: "per month",
      size: "5x6 meters",
      features: [
        "King Bed",
        "Walk-in Wardrobe",
        "Executive Desk",
        "Premium Bathroom",
        "AC",
        "High-Speed WiFi",
        "Smart TV",
        "Mini Fridge",
        "Balcony",
        "Sofa"
      ],
      available: false
    }
  ],

  reviews: [
    {
      id: 1,
      name: "Budi Santoso",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent boarding house! Very clean and the owner is very friendly. The location is strategic, close to campus and markets. Highly recommended!",
      avatar: "BS"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      rating: 5,
      date: "1 month ago",
      comment: "I've been staying here for 6 months and I'm very satisfied. The facilities are complete, security is good, and the environment is quiet and comfortable.",
      avatar: "SN"
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      rating: 5,
      date: "1 month ago",
      comment: "Great value for money! The room is spacious, WiFi is fast, and there's kitchen access. Perfect for students and young professionals.",
      avatar: "AR"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      rating: 4,
      date: "2 months ago",
      comment: "Very comfortable and safe. The CCTV and security guard make me feel secure. The only thing is parking can be a bit crowded on weekends.",
      avatar: "DL"
    },
    {
      id: 5,
      name: "Rendra Wijaya",
      rating: 5,
      date: "3 months ago",
      comment: "Best kost in Limpung area! Clean rooms, friendly neighbors, and the owner is very responsive. The location is also very strategic.",
      avatar: "RW"
    },
    {
      id: 6,
      name: "Nia Ramadhani",
      rating: 5,
      date: "3 months ago",
      comment: "I love staying here! The atmosphere is homey, facilities are well-maintained, and it's close to everything I need. Definitely worth it!",
      avatar: "NR"
    }
  ],

  nearbyPlaces: [
    {
      category: "Education",
      places: [
        { name: "SMA Negeri 1 Limpung", distance: "1.2 km", time: "5 min" },
        { name: "SMK Negeri 1 Batang", distance: "3.5 km", time: "12 min" },
        { name: "Universitas Pekalongan (Campus)", distance: "15 km", time: "25 min" }
      ]
    },
    {
      category: "Healthcare",
      places: [
        { name: "Puskesmas Limpung", distance: "0.8 km", time: "3 min" },
        { name: "Klinik Pratama Sehat", distance: "1.5 km", time: "6 min" },
        { name: "RSUD Batang", distance: "8 km", time: "18 min" }
      ]
    },
    {
      category: "Shopping",
      places: [
        { name: "Pasar Limpung", distance: "0.5 km", time: "2 min" },
        { name: "Indomaret", distance: "0.3 km", time: "1 min" },
        { name: "Alfamart", distance: "0.6 km", time: "3 min" },
        { name: "Batang Plaza", distance: "9 km", time: "20 min" }
      ]
    },
    {
      category: "Banking & ATM",
      places: [
        { name: "ATM BRI", distance: "0.4 km", time: "2 min" },
        { name: "ATM BCA", distance: "1.0 km", time: "4 min" },
        { name: "Bank Mandiri", distance: "1.8 km", time: "7 min" }
      ]
    },
    {
      category: "Dining",
      places: [
        { name: "Warung Makan Bu Tini", distance: "0.2 km", time: "1 min" },
        { name: "Rumah Makan Sederhana", distance: "0.7 km", time: "3 min" },
        { name: "KFC Batang", distance: "8.5 km", time: "19 min" }
      ]
    }
  ]
};
