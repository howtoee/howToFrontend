const innovationImageA = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"; // Meeting/Innovation
const innovationImageB = "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"; // Code/Tech
const innovationImageC = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"; // Brainstorming
const innovationImageD = "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"; // Teamwork
const innovationImageE = "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg"; // Networking

const testimonialAvatar1 = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg";
const testimonialAvatar2 = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg";
const testimonialAvatar3 = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg";

const aboutImg1 = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg";
const aboutImg2 = "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg";

export const aboutData = {
  heading: "Redefining the way you travel",
//   subHeading: "Your Gateway To Global Scientific Exchange",
  paragraphs: [
    "Our travel hub, your ultimate pitstop for all travel needs. We specialise in seamless flight and hotel bookings, visa appointments, travel insurance, bus and train reservations, airport and local transfers, thrilling safari trips, and curated tour packages. Committed to affordability, we provide the lowest rates compared to any website or app, ensuring every journey is effortless, budget-friendly, and memorable.",
  ],
  image1: aboutImg1,
  image2: aboutImg2,

  buttonText: "Know us Better",
  // Innovation Section images, explicitly using four distinct Pexels URLs
  innovationImages: [
    innovationImageA,
    innovationImageB,
    innovationImageC,
    innovationImageD,
    innovationImageE,
  ],
  satisfiedClients: {
    count: 3500,
    label: "Satisfied Clients",
    // These are also Pexels URLs now to avoid local file dependency
    avatars: [testimonialAvatar1, testimonialAvatar2, testimonialAvatar3],
  },
};