const comments = [
	{
	  img: '',
	  name: 'Victor Pinto',
	  timestamp: Date.now(),
	  comment: `This is art. This is inexplicable magic 
				  expressed in the purest way, everything 
				  that makes up this majestic work 
				  deserves reverence. Let us appreciate 
				  this for what it is and what it contains.`,
	},
	{
	  img: '',
	  name: 'Christina Cabrera',
	  timestamp: Date.now(),
	  comment: `I feel blessed to have seen them in 
				  person. What a show! They were just 
				  perfection. If there was one day of my 
				  life I could relive, this would be it. What 
				  an incredible day.`,
	},
  
	{
	  img: '',
	  name: 'Isaac Tadesse',
	  timestamp: Date.now(),
	  comment: `I can't stop listening. Every time I hear 
				  one of their songs the vocals it gives 
				  me goosebumps. Shivers straight down 
				  my spine. What a beautiful expression of 
				  creativity. Can't get enough`,
	},
  ];
  
  const form = document.querySelector('.form');
  const listComment = document.querySelector('.comment__list');
  
  comments.forEach((commentData) => {
	const newComment = createCommentElement(
	  commentData.img,
	  commentData.name,
	  commentData.timestamp,
	  commentData.comment
	);
  
	listComment.appendChild(newComment);
  });
  
  function createCommentElement(img, name, timestamp, comment) {
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
	timeElement.textContent = formatedDate.timestamp;
	timeElement.textContent = formatedDate;
	firstElement.appendChild(timeElement);
  
	const addNewComment = document.createElement('p');
	addNewComment.classList.add('comment__second');
	itemList.appendChild(addNewComment);
	addNewComment.textContent = comment;
  
	return itemList;
  }
  
  form.addEventListener('submit', (event) => {
	event.preventDefault();
  
	const name = document.querySelector('.form__input').value;
	const comment = document.querySelector('.form__text').value;
	submitComment(name, comment);
  });
  
  function submitComment(name, comment) {
	const timestamp = Date.now();
	const newCommentElement = createCommentElement("", name,timestamp, comment);
	listComment.insertBefore(newCommentElement, listComment.firstChild);
  
	document.querySelector('.form__input').value = '';
	document.querySelector('.form__text').value = '';
  }