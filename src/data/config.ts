export const CONTACT_DATA = {
  email: "ost.tomasz@gmail.com",
  phone: "+48 513 738 524",
  phoneRaw: "+48513738524",
} as const;

export const SOCIAL_DATA = [
  { id: "instagram", href: "https://instagram.com", label: "Instagram" },
  { id: "twitter", href: "https://twitter.com", label: "Twitter" },
  { id: "facebook", href: "https://facebook.com", label: "Facebook" },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/tomasz-ostaszewski-7166071aa",
    label: "LinkedIn",
  },
] as const;

export const FEATURES = [
  {
    id: 1,
    icon: "antenna-1",
    title: "Global Reach",
    description:
      "Connecting your business to the world with advanced satellite technology.",
  },
  {
    id: 2,
    icon: "clock-1",
    title: "Swift Delivery",
    description:
      "Time is money. We ensure your projects are completed ahead of schedule.",
  },
  {
    id: 3,
    icon: "diagram-1",
    title: "Data Insights",
    description:
      "Smart analytics to help you visualize growth and optimize performance.",
  },
  {
    id: 4,
    icon: "astronaut-1",
    title: "Future Tech",
    description:
      "Bold solutions that push the boundaries of what's possible in IT.",
  },
] as const;

import trump1 from "../assets/images/trump1.jpg";
import trump1_2x from "../assets/images/trump1@2x.jpg";
import trump2 from "./assets/images/trump2.jpg";
import trump2_2x from "../assets/images/trump2@2x.jpg";
import trump3 from "../assets/images/trump3.jpg";
import trump3_2x from "../assets/images/trump3@2x.jpg";

export const SERVICES = [
  { id: 1, title: "Desktop Apps", img: trump1, img2x: trump1_2x },
  { id: 2, title: "Mobile Apps", img: trump2, img2x: trump2_2x },
  { id: 3, title: "Design Solutions", img: trump3, img2x: trump3_2x },
] as const;
