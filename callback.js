const posts = [
    { title: 'Post one', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];


function getposts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createpost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createpost({ title: 'Post Three', body: 'This is post Three' }, getposts);