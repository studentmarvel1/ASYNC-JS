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
function createpost(post) {
    return new Promise((resolve, reject) => {

   
    setTimeout(() => {
        posts.push(post);
        const error = true;

        if(!error) {
            resolve();
        } else {
            reject('Error: something went wrong');
        }
    }, 2000);
});
}

// createpost({ title: 'Post Three', body: 'This is post Three' })
// .then(getposts)
// .catch(err => console.log(err));
  
// async /await /fetch

async function fetchUsers() {
    const res = await fetch
   ('https://jsonplaceholder.typicode.com/users');

   const data = await res.json();

   console.log(data);
}

fetchUsers();

// Async / Await

// async function init() { 
//    await createpost({ title: 'Post Three', body: 'This is post Three' });

//    getPosts(); 
//    }

// init();
// promise all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye'));

//     const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

//     Promise.all([promise1, promise2, promise3, promise4]).then(((values => console.log(values))))









