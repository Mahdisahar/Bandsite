// import the bandSite JS file.
import BandSiteApi from './band-site-api.js';

// const comments = [
// 	{
// 	  img: '',
// 	  name: 'Victor Pinto',
// 	  timestamp: Date.now(),
// 	  comment: `This is art. This is inexplicable magic 
// 				  expressed in the purest way, everything 
// 				  that makes up this majestic work 
// 				  deserves reverence. Let us appreciate 
// 				  this for what it is and what it contains.`,
// 	},
// 	{
// 	  img: '',
// 	  name: 'Christina Cabrera',
// 	  timestamp: Date.now(),
// 	  comment: `I feel blessed to have seen them in 
// 				  person. What a show! They were just 
// 				  perfection. If there was one day of my 
// 				  life I could relive, this would be it. What 
// 				  an incredible day.`,
// 	},
  
// 	{
// 	  img: '',
// 	  name: 'Isaac Tadesse',
// 	  timestamp: Date.now(),
// 	  comment: `I can't stop listening. Every time I hear 
// 				  one of their songs the vocals it gives 
// 				  me goosebumps. Shivers straight down 
// 				  my spine. What a beautiful expression of 
// 				  creativity. Can't get enough`,
// 	},
//   ];
 
  // Create an object of the BandSiteApi class.
// const bandSiteApi = new BandSiteApi("f300e5be-e5f3-48e1-8cd9-11f7920ffb6c");
 
const form = document.querySelector('.form');
const listComment = document.querySelector('.comment__list');

//   Create an object of Bandsiteapi
const newBandSiteApi = new BandSiteApi('f300e5be-e5f3-48e1-8cd9-11f7920ffb6c');
  
// Define the displayComment function
async function displayComment() {

const comments = await newBandSiteApi.getComments();
comments.sort((a, b) => b.timestamp - a.timestamp);

  comments.forEach((commentData) => {
	const newComment = createCommentElement(
		// Adding new commentData for ID 
	  commentData.id,
	  commentData.img,
	  commentData.name,
	  commentData.timestamp,
	  commentData.comment
	);
  
	listComment.appendChild(newComment);
  });
}


function createCommentElement(id,img, name, timestamp, comment) {
	
	const itemList = document.createElement('li');
	itemList.classList.add('comment__item');
  
	const shapeElement = document.createElement('div');
	shapeElement.classList.add('comment__item--shape');
	shapeElement.textContent = img;
	itemList.appendChild(shapeElement);
  
	const firstElement = document.createElement('div');
	firstElement.classList.add('comment__first');
	itemList.appendChild(firstElement);
  
	const insertName = document.createElement('h2');
	insertName.classList.add('comment__first--h');
	insertName.textContent = name;
	firstElement.appendChild(insertName);
  
	const timeElement = document.createElement('p');
	timeElement.classList.add('comment__first--time');
  
	const date = new Date(timestamp);
  
	const formatedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${(
	  '0' + date.getDate()
	).slice(-2)}/${date.getFullYear()}`;
	// timeElement.textContent = formatedDate.timestamp;
	timeElement.textContent = formatedDate;
	firstElement.appendChild(timeElement);
  
	const addNewComment = document.createElement('p');
	addNewComment.classList.add('comment__second');
	itemList.appendChild(addNewComment);
	addNewComment.textContent = comment;
  
// Create delete button
const deleteBtn = document.createElement('button');
deleteBtn.classList.add('btn');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', async() => {
	try {
		await newBandSiteApi.deleteComment(id);
		itemList.remove();
	} catch (e) {
		console.log('Error deleting', e);
	}
});
itemList.appendChild(deleteBtn);

	return itemList;
  }
//   showComment();
async function submitComment(name, comment) {
	try {
	const timestamp = Date.now();
	await newBandSiteApi.postComment(name , comment );
	const newCommentElement = createCommentElement("", "", name,timestamp, comment);
	listComment.insertBefore(newCommentElement, listComment.firstChild);

	} catch (e) {
		console.log(e);
	}
	
}

displayComment();

// Add event listener to our form to listen for submittion

  form.addEventListener('submit',async (event) => {
	event.preventDefault();
  
	const nameInput = document.querySelector('.form__input');
	const commentInput = document.querySelector('.form__text');

	const name = nameInput.value;
	const comment = commentInput.value;

	  // POST newComment to the API 
	await submitComment(name, comment);

	 form.reset();
  });