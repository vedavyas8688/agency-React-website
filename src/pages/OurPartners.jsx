 import sevenUp from "../assets/7_up1929.svg";
import deutschePost from "../assets/deutsche_post.svg";
import holsten from "../assets/holsten.svg";
import onewebinc from "../assets/onewebinc.svg";
import thehuffingtonpost from "../assets/thehuffingtonpost.svg";
import google from "../assets/google_logo.svg";
import microsoft from "../assets/microsoft_logo.png";
import airbnb from "../assets/airbnb_logo.svg";
import rakuten from "../assets/rakuten_logo.png";

const partners = [
  { name: "7UP", logo: sevenUp },
  { name: "Deutsche Post", logo: deutschePost },
  { name: "Holsten", logo: holsten },
  { name: "OneWeb Inc", logo: onewebinc },
  { name: "Huffington Post", logo: thehuffingtonpost },
  { name: "Google", logo: google },
  { name: "Microsoft", logo: microsoft },
  { name: "Airbnb", logo: airbnb },
  { name: "Rakuten", logo: rakuten },
];

const OurPartners = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-light text-gray-900 mb-14">
          Our partners
        </h2>
      </div>

       <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-20 hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className="h-12 object-contain grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </div>

       <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
