const comments = [
    {
        name: 'Victor Pinto',
        timestamp: Date.now(),
        comment: `This is art. This is inexplicable magic 
                expressed in the purest way, everything 
                that makes up this majestic work 
                deserves reverence. Let us appreciate 
                this for what it is and what it contains.`
    },

    {
        name: 'Christina Cabrera',
        timestamp: Date.now(),
        comment: `I feel blessed to have seen them in 
                person. What a show! They were just 
                perfection. If there was one day of my 
                life I could relive, this would be it. What 
                an incredible day.`
    },
    {
        name: 'Isaac Tadesse',
        timestamp: Date.now(),
        comment: `I can't stop listening. Every time I hear 
                one of their songs the vocals it gives 
                me goosebumps. Shivers straight down 
                my spine. What a beautiful expression of 
                creativity. Can't get enough`
    },
];

const form = document.querySelector('.form');
const listComment = document.querySelector('.comment__list');

// Display existing comments
comments.forEach(commentData => {
    const listItem = createCommentElement(commentData.name, commentData.timestamp, commentData.comment);
    listComment.appendChild(listItem);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('.form__input').value;
    const comment = document.querySelector('.form__text').value;
    submitComment(name, comment);
});

function submitComment(name, comment) {
    const listItem = createCommentElement(name, Date.now(), comment);
    listComment.insertBefore(listItem, listComment.firstChild);

    // Clear input fields after submitting
    document.querySelector('.form__input').value = '';
    document.querySelector('.form__text').value = '';
}

function createCommentElement(name, timestamp, comment) {
    const listItem = document.createElement('li');
    listItem.classList.add('comment__item');

    const shapeDiv = document.createElement('div');
    shapeDiv.classList.add('comment__item--shape');
    listItem.appendChild(shapeDiv);

    const firstDiv = document.createElement('div');
    firstDiv.classList.add('comment__first');
    listItem.appendChild(firstDiv);

    const title = document.createElement('h2');
	title.classList.add('comment__first--h');
    title.textContent = name;
    firstDiv.appendChild(title);

    const time = document.createElement('p');
    time.classList.add('comment__first--time');
    const date = new Date(timestamp);
	const formatedDate = `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`
    // time.textContent = date.toLocaleString();
	time.textContent = formatedDate;
    firstDiv.appendChild(time);

    const commentText = document.createElement('p');
    commentText.classList.add('comment__second');
    commentText.textContent = comment;
    listItem.appendChild(commentText);

    return listItem;
}