const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const locationEl = document.getElementById("location")
const nameEl = document.getElementById("name")
const usernameEl = document.getElementById("username")
const avatarEl = document.getElementById("avatar")
const postEl = document.getElementById("post")
const commentEl = document.getElementById("comment")
const likesEl = document.getElementById("likes")
const hearticonEl = document.getElementById("heart-icon")
const commenticonEl = document.getElementById("comment-icon")
const dmiconEl = document.getElementById("dm-icon")

hearticonEl.src = "images/icon-heart.png"
commenticonEl.src = "images/icon-comment.png"
dmiconEl.src = "images/icon-dm.png"

// Show posts[0] by default
postEl.src = posts[0].post
locationEl.textContent = posts[0].location
nameEl.textContent = posts[0].name
usernameEl.textContent = posts[0].username
commentEl.textContent = posts[0].comment
likesEl.textContent = posts[0].likes
avatarEl.src = posts[0].avatar

// Add event listener to the post element
// to change the post when double-clicked
// and to show a random post
// but not the same as the last one
let lastIndex = 0 // Track the last shown post index

postEl.addEventListener("dblclick", function() {
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * posts.length)
    } while (randomNum === lastIndex && posts.length > 1)
    lastIndex = randomNum

    postEl.src = posts[randomNum].post
    locationEl.textContent = posts[randomNum].location
    nameEl.textContent = posts[randomNum].name
    usernameEl.textContent = posts[randomNum].username
    commentEl.textContent = posts[randomNum].comment
    likesEl.textContent = posts[randomNum].likes
    avatarEl.src = posts[randomNum].avatar
})

hearticonEl.addEventListener("click", function() {
    posts[lastIndex].likes += 1
    likesEl.textContent = posts[lastIndex].likes
})
