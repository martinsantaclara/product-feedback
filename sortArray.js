// import data from './data.json';
const data = require('./data.json');

const requests = data['productRequests'];
const currentUser = {
    image: '/assets/user-images/image-james.jpg',
    name: 'James Skinner',
    username: 'hummingbird1',
};

let curRequests = [...requests];
const reqIndex = curRequests.findIndex((req) => req.id === 2);
let curComments = curRequests[reqIndex].comments[1];

const newComment = {
    id: 16,
    content: 'Nuevo Comentario',
    user: currentUser,
};

const newReply = {
    content: 'Nueva reply',
    replyingTo: 'tiburonblanco367',
    user: currentUser,
};

let curReplies = curComments.replies ? curComments.replies : [];

curReplies.push(newReply);
curComments.replies = curReplies;

// curRequests[reqIndex].comments = curComments;

console.log(curRequests[reqIndex].comments);

console.log(curRequests[reqIndex]);
console.log(curRequests);
