// JavaScript for filtering cards based on search input
document.getElementById('searchBar').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.getElementsByClassName('card');

    Array.from(cards).forEach(function(card) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        
        if (title.includes(searchValue)) {
            card.classList.add('active'); // Show the card
        } else {
            card.classList.remove('active'); // Hide the card
        }
    });
});



// Booknow function to autopopulate the booknow.html tourist field

function bookNow(monumentName) {
    const url = `booknow.html?monument=${encodeURIComponent(monumentName)}`;
    window.location.href = url;
}