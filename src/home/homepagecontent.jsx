
import innovationImageA from "../assets/Cilents/pexels-photo-3183150.webp"
import innovationImageB from "../assets/Cilents/img2.webp"
import innovationImageC from "../assets/Cilents/img3.webp"
import innovationImageD from "../assets/Cilents/img4.webp"
import innovationImageE from "../assets/Cilents/img3.webp"
import testimonialAvatar1 from "../assets/Cilents/cilent1.webp"
import testimonialAvatar2 from "../assets/Cilents/cilent2.webp"
import testimonialAvatar3 from "../assets/Cilents/cilent3.webp"
import aboutImg1 from "../assets/Cilents/aboutImg1.webp"
import aboutImg2 from "../assets/Cilents/aboutImg2.webp"


export const aboutData = {
  heading: "Redefining the way you travel",
//   subHeading: "Your Gateway To Global Scientific Exchange",
  paragraphs: [
    "Our travel hub, your ultimate pitstop for all travel needs. We specialise in seamless flight and hotel bookings, visa services, travel insurance, bus and train reservations, airport and local transfers, thrilling safari trips, and curated tour packages. Committed to affordability, we provide the lowest rates compared to any website or app, ensuring every journey is effortless, budget-friendly, and memorable.",
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
    count:12000 ,
    label: "Happy Clients",
    // These are also Pexels URLs now to avoid local file dependency
    avatars: [testimonialAvatar1, testimonialAvatar2, testimonialAvatar3],
  },
};