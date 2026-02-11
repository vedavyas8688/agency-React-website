import React from "react";
import FAQSection from "./FAQSection";
import ContactSection1 from "./ContactSection1";
import ContactSection2 from "./ContactSection2";
import FAQSectionContact from "./FAQSectionContact";
import ContactSection3 from "./ContactSection3";
import ContactSection4 from "./ContactSection4";
import ContactSection5 from "./ContactSection5";
import ContactSection6 from "./ContactSection6";
import ContactSection7 from "./ContactSection7";
import SliderSwiper from "./SliderSwiper";
import SliderSwiper1 from "./SliderSwiper1";
import PageError404 from "./PageError404";
import Charts from "./Charts";
import ContactSection8 from "./ContactSection8";
 
function ContactUsPage() {
  return (
    <div  id="services"
    >
      <ContactSection4 />
      {/* sectios */}
      <ContactSection1 />
      <ContactSection2 />
      <FAQSectionContact />
      <ContactSection3 />
      {/* <ContactSection4 /> */}
      <ContactSection5 />
      <ContactSection6 />
      <ContactSection7 />
       <SliderSwiper />
      <SliderSwiper1 />
      {/* <PageError404 /> */}
      <Charts />
      <ContactSection8/>
     </div>
  );
}

export default ContactUsPage;
