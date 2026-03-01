import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { FaReddit } from "react-icons/fa";

// Social Links
export const socialLinks = [
  {
    id: "facebook",
    name: "Facebook",
    // url: "https://www.facebook.com/profile.php?id=61576697796195",
    icon: <Facebook size={18} />,
  },
  {
    id: "twitter",
    name: "Twitter (X)",
    // url: "https://x.com/Helixconfe69272",
    icon: <Twitter size={18} />,
  },
  {
    id: "instagram",
    name: "Instagram",
    // url: "https://www.instagram.com/helix_conferences/",
    icon: <Instagram size={18} />,
  },
  {
    id: "youtube",
    name: "YouTube",
    // url: "https://www.youtube.com/@Helixconferences",
    icon: <Youtube size={18} />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    // url: "https://www.linkedin.com/company/helixconferences",
    icon: <Linkedin size={18} />,
  },
  {
    id: "reddit",
    name: "Reddit",
    // url: "https://www.reddit.com/user/Salty-Ad6381/",
    icon: <FaReddit size={18} />,
  },
];