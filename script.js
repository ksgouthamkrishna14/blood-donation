document.addEventListener('DOMContentLoaded', function() {
    const donors = [
        { id: 'D001', name: 'Alice Smith', bloodGroup: 'A+', phone: '123-456-7890', age: 28, location: 'New York', availability: true },
        { id: 'D002', name: 'Bob Johnson', bloodGroup: 'B-', phone: '098-765-4321', age: 35, location: 'Los Angeles', availability: false },
        { id: 'D003', name: 'Charlie Brown', bloodGroup: 'O+', phone: '111-222-3333', age: 22, location: 'Chicago', availability: true },
        { id: 'D004', name: 'Diana Prince', bloodGroup: 'AB+', phone: '444-555-6666', age: 30, location: 'Houston', availability: true },
        { id: 'D005', name: 'Eve Adams', bloodGroup: 'A-', phone: '777-888-9999', age: 40, location: 'Phoenix', availability: false },
        { id: 'D006', name: 'Frank White', bloodGroup: 'O-', phone: '101-202-3030', age: 50, location: 'Philadelphia', availability: true },
        { id: 'D007', name: 'Grace Lee', bloodGroup: 'B+', phone: '321-654-9870', age: 25, location: 'San Antonio', availability: true },
        { id: 'D008', name: 'Henry Davis', bloodGroup: 'A+', phone: '654-321-0987', age: 33, location: 'San Diego', availability: false },
        { id: 'D009', name: 'Ivy King', bloodGroup: 'AB-', phone: '987-654-3210', age: 29, location: 'Dallas', availability: true },
        { id: 'D010', name: 'Jack Taylor', bloodGroup: 'B-', phone: '000-111-2222', age: 45, location: 'San Jose', availability: true }
    ];

    const donorTableBody = document.getElementById('donorTableBody');
    const searchInput = document.getElementById('searchInput');

    function renderDonors(filteredDonors) {
        donorTableBody.innerHTML = ''; // Clear existing rows
        filteredDonors.forEach(donor => {
            const row = donorTableBody.insertRow();
            row.insertCell().textContent = donor.id;
            row.insertCell().textContent = donor.name;
            row.insertCell().textContent = donor.bloodGroup;
            row.insertCell().textContent = donor.phone;
            row.insertCell().textContent = donor.age;
            row.insertCell().textContent = donor.location;

            const availabilityCell = row.insertCell();
            availabilityCell.textContent = donor.availability ? 'Available' : 'Not Available';
            availabilityCell.classList.add(donor.availability ? 'availability-available' : 'availability-not-available');
        });
    }

    function filterDonors() {
        const searchTerm = searchInput.value.toLowerCase();
        const filtered = donors.filter(donor =>
            donor.name.toLowerCase().includes(searchTerm) ||
            donor.bloodGroup.toLowerCase().includes(searchTerm) ||
            donor.location.toLowerCase().includes(searchTerm)
        );
        renderDonors(filtered);
    }

    // Initial rendering of all donors
    renderDonors(donors);

    // Event listener for real-time search as user types
    searchInput.addEventListener('keyup', filterDonors);
});