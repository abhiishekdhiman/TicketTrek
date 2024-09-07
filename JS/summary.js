// to calculate the total amount
document.addEventListener('DOMContentLoaded', function() {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

    if (bookingData) {
        const bookingSummary = `
            <h3>Booking Summary</h3>
            <p>Name: ${bookingData.name}</p>
            <p>Email: ${bookingData.email}</p>
            <p>Phone: ${bookingData.phone}</p>
            <p>Number of Tourists: ${bookingData.tourists}</p>
            <p>Monument: ${bookingData.monument}</p>
            <p>Date: ${bookingData.date}</p>
            <h4>Total Amount: ₹${bookingData.totalAmount}</h4>
        `;
        document.getElementById('bookingSummary').innerHTML = bookingSummary;
    } else {
        document.getElementById('bookingSummary').innerHTML = '<p>No booking data found.</p>';
    }
});