import React from "react";
import FAQSection from "./FAQSection";
import ContactSection1 from "./ContactSection1";
import ContactSection2 from "./ContactSection2";
import FAQSectionContact from "./FAQSectionContact";
import ContactSection3 from "./ContactSection3";
import ContactSection4 from "./ContactSection4";

function ContactUsPage() {
  return (
    <div>
      <ContactSection4 />
      {/* sectios */}
      <ContactSection1 />
      <ContactSection2 />
      <FAQSectionContact />
      <ContactSection3 />
      <ContactSection4 />
    </div>
  );
}

export default ContactUsPage;
