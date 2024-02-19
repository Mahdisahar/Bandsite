
// const shows = [
//     {
//         date: 'Mon Sept 09 2024',
//         name: 'Roland Lane',
//         location:'San Francisco, CA',
//         btn:  'BUY TICKET'
//     },
//     {
//         date:'Tue Sept 17 2024',
//         name: 'Pier 3 East',
//         location: 'San Francisco, CA',
//         btn: 'BUY TICKET'
//     },
//     {
//         date:'Sat Oct 12 2024',
//         name: 'View Lounge',
//         location: 'San Francisco, CA',
//         btn:  'BUY TICKET'
//     },
//     {
//         date:'Sat Nov 16 2024',
//         name: 'Hyatt Agency',
//         location: 'San Francisco, CA',
//         btn:  'BUY TICKET'
//     },
//     {
//         date:'Fri Nov 29 2024',
//         name: 'Moscow Center',
//         location: 'San Francisco, CA',
//         btn: 'BUY TICKET'
//     },
//     {     
//         date:'Wed Dec 18 2024',
//         name: 'Press Club',
//         location: 'San Francisco, CA',
//         btn: 'BUY TICKET'
//     }
// ];

// import the bandSite JS file.
import BandSiteApi from './band-site-api.js';

const showsSection = document.querySelector('.shows');
const showsContainer = document.querySelector('.shows__co');

//   Create an object of Bandsiteapi
const newBandSiteApi = new BandSiteApi('f300e5be-e5f3-48e1-8cd9-11f7920ffb6c');
  
// Define the showComment function

async function displayShow() {
	const shows = await newBandSiteApi.getShows();

shows.forEach((show, index) => {

    const showContainer = document.createElement('div');
    showContainer.classList.add('shows__container');
    
    const dateDetail = document.createElement('div');
    dateDetail.classList.add('shows__detail');
    
    const datePara = document.createElement('p');
    datePara.classList.add('shows__para');
    datePara.textContent = 'DATE';
    dateDetail.appendChild(datePara);
    
    const dateValue = document.createElement('p');
    dateValue.classList.add('shows__para2');

	const date = new Date();
	const formatedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
		'0' + date.getDate()
	  ).slice(-2)}/${date.getFullYear()}`;

    dateValue.textContent = formatedDate;
    dateDetail.appendChild(dateValue);
    showContainer.appendChild(dateDetail);
    
    const venueDetail = document.createElement('div');
    venueDetail.classList.add('shows__detail');
    
    const venuePara = document.createElement('p');
    venuePara.classList.add('shows__para');
    venuePara.textContent = 'VENUE';
    venueDetail.appendChild(venuePara);
    
    const venueValue = document.createElement('p');
    venueValue.classList.add('shows__para2');
    venueValue.textContent = show.place;
    venueDetail.appendChild(venueValue);
    
    showContainer.appendChild(venueDetail);

    const locationDetail = document.createElement('div');
    locationDetail.classList.add('shows__detail');
    
    const locationPara = document.createElement('p');
    locationPara.classList.add('shows__para');
    locationPara.textContent = 'LOCATION';
    locationDetail.appendChild(locationPara);
    
    const locationValue = document.createElement('p');
    locationValue.classList.add('shows__para2');
    locationValue.textContent = show.location;
    locationDetail.appendChild(locationValue);
    
    showContainer.appendChild(locationDetail);

    const buyButton = document.createElement('button');
    buyButton.classList.add('btn');
    // buyButton.textContent = show.btn;
	buyButton.textContent = 'Button';
    showContainer.appendChild(buyButton);
    
    if (index !== 0) {
        datePara.classList.add('shows__para--no');
        venuePara.classList.add('shows__para--no');
		locationPara.classList.add('shows__para--no');
    }
    
    showsContainer.appendChild(showContainer);
});
}
displayShow();

showsSection.appendChild(showsContainer);
