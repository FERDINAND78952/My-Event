// Mock Data
const events = [
    {
        title: "Jazz Night",
        category: "music",
        description: "Enjoy an evening of smooth jazz with live performances.",
        date: "2025-03-15",
        time: "7:00 PM",
        location: "Downtown Jazz Club"
    },
    {
        title: "Art Exhibition",
        category: "arts",
        description: "Explore contemporary art from local artists.",
        date: "2025-03-20",
        time: "10:00 AM",
        location: "City Art Gallery"
    },
    {
        title: "Food Festival",
        category: "food",
        description: "Taste delicious dishes from around the world.",
        date: "2025-03-25",
        time: "12:00 PM",
        location: "Central Park"
    }
];

// Display Events
const eventList = document.getElementById("event-list");
const categoryFilter = document.getElementById("category-filter");
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");

function displayEvents(filteredEvents) {
    eventList.innerHTML = "";
    filteredEvents.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <button onclick="openModal('${event.title}', '${event.description}')">View Details</button>
        `;
        eventList.appendChild(eventCard);
    });
}

// Filter and Search Events
function filterEvents() {
    const category = categoryFilter.value;
    const searchTerm = searchBox.value.toLowerCase();
    const filteredEvents = events.filter(event => {
        const matchesCategory = category === "all" || event.category === category;
        const matchesSearch = event.title.toLowerCase().includes(searchTerm) || 
                             event.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    displayEvents(filteredEvents);
}

categoryFilter.addEventListener("change", filterEvents);
searchBox.addEventListener("input", filterEvents);
searchButton.addEventListener("click", filterEvents);

// Modal Functions
const modal = document.getElementById("event-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModalButton = document.getElementById("close-modal");

function openModal(title, description) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "flex";
}

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Initial Display
displayEvents(events);