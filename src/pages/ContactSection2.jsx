import React from "react";

const ContactSection2 = () => {
  return (
    <section
      id="map"
      className="w-full min-h-[60vh] flex items-center justify-center bg-white py-16"
    >
      <div className="container mx-auto px-5">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps?q=Hirola%20InfoTech%20Solutions%20Pvt%20Ltd,%20NO%207,%204th%20floor,%201st%20Cross%20Rd,%20Balaji%20Layout,%20AMCO%20Colony,%20Koti%20Hosahalli,%20Bengaluru,%20Karnataka%20560092&output=embed"
            style={{ filter: "grayscale(0) conttrast(1.2) opacity(0.85)" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
