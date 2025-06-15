const schema = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deepan India",
    url: "https://deepanindia.com/",
    logo: "https://deepanindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEditedLogo-removebg-preview.35b1ca45.png&w=1920&q=75",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9884411611",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "IN",
      availableLanguage: ["Tamil", "en"],
    },
    sameAs: [
    //   "https://www.facebook.com/profile.php?id=61554265561341",
    //   "https://www.instagram.com/pickyourslot/",
    ],
  },
};
export default schema;