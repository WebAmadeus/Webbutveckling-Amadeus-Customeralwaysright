const urlParams = new URLSearchParams(window.location.search);
const place = urlParams.get('place');

const destinations = {
    paris: {
        title: "Paris",
        image: "img/detailed_paris.jpg",
        description: "Paris, kärlekens stad, erbjuder allt från Eiffeltornet till mysiga kaféer.",
        travel: "Flyg till Charles de Gaulle-flygplatsen och ta tåg eller taxi in till stadens centrum."
    },
    tokyo: {
        title: "Tokyo",
        image: "img/detailed_tokyo.jpg",
        description: "Tokyo är en stad som kombinerar traditionella tempel med futuristisk teknologi.",
        travel: "Flyg till Narita eller Haneda flygplats och ta Narita Express eller taxi in till stadskärnan."
    },
    newyork: {
        title: "New York",
        image: "img/detailed_newyork.jpg",
        description: "New York är en ikonisk metropol med oändliga möjligheter och sevärdheter.",
        travel: "Flyg till JFK eller LaGuardia och ta tunnelbana, buss eller taxi."
    }
};

const destination = destinations[place];

if (destination) {
    document.getElementById("destination-title").textContent = destination.title;
    document.getElementById("destination-image").src = destination.image;
    document.getElementById("destination-description").textContent = destination.description;
    document.getElementById("destination-travel").textContent = destination.travel;
}