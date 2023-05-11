/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/images/home/background-home-desktop.jpg')",
        'homemobile': "url('/src/images/home/background-home-mobile.jpg')",
        'destination': "url('/src/images/destination/background-destination-desktop.jpg')",
        'crew': "url('/src/images/crew/background-crew-desktop.jpg')",
        'crewmobile': "url('/src/images/crew/background-crew-mobile.jpg')",
        'tech': "url('/src/images/technology/background-technology-desktop.jpg')",
        'techmobile': "url('/src/images/technology/background-technology-mobile.jpg')",
        'destinationmobile': "url('/src/images/destination/background-destination-mobile.jpg')",
      },
    },
    plugins: [],
  },
};
