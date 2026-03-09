
import innovationImageA from "../assets/Cilents/pexels-photo-3183150.jpeg"
import innovationImageB from "../assets/Cilents/img2.jpeg"
import innovationImageC from "../assets/Cilents/img3.jpeg"
import innovationImageD from "../assets/Cilents/img4.jpeg"
import innovationImageE from "../assets/Cilents/img3.jpeg"
import testimonialAvatar1 from "../assets/Cilents/cilent1.jpeg"
import testimonialAvatar2 from "../assets/Cilents/cilent2.jpeg"
import testimonialAvatar3 from "../assets/Cilents/cilent3.jpeg"
import aboutImg1 from "../assets/Cilents/aboutImg1.jpeg"
import aboutImg2 from "../assets/Cilents/aboutImg2.jpeg"


export const aboutData = {
  heading: "Redefining the way you travel",
//   subHeading: "Your Gateway To Global Scientific Exchange",
  paragraphs: [
    "Our travel hub, your ultimate pitstop for all travel needs. We specialise in seamless flight and hotel bookings, visa appointments, travel insurance, bus and train reservations, airport and local transfers, thrilling safari trips, and curated tour packages. Committed to affordability, we provide the lowest rates compared to any website or app, ensuring every journey is effortless, budget-friendly, and memorable.",
  ],
  image1: aboutImg1,
  image2: aboutImg2,

  buttonText: "know us better",
  // Innovation Section images, explicitly using four distinct Pexels URLs
  innovationImages: [
    innovationImageA,
    innovationImageB,
    innovationImageC,
    innovationImageD,
    innovationImageE,
  ],
  satisfiedClients: {
    count: 1800,
    label: "Happy Clients",
    // These are also Pexels URLs now to avoid local file dependency
    avatars: [testimonialAvatar1, testimonialAvatar2, testimonialAvatar3],
  },
};