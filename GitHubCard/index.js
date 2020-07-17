/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/tonysorensen')
.then( object => {
  console.log("Success! Here's your object!", object)
  const newCard = userCard(object)
entryPoint.appendChild(newCard)
})
.catch( err => {
  console.log(err)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entryPoint = document.querySelector('.cards')


/* 5
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['LoganSorensen','peterevilla','tetondan','dustinmyers','LukeSmithxyz'];

/* 3
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const userCard = (object) => {
  //create the elements
const userCard = document.createElement('div')
const avatar = document.createElement('img')
const info = document.createElement('div')
const name = document.createElement('h3')
const userName = document.createElement('p')
const userLocation = document.createElement('p')
const profile = document.createElement('p')
const link = document.createElement('a')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')
//format the elements
userCard.appendChild(avatar)
userCard.appendChild(info)
info.appendChild(name)
info.appendChild(userName)
info.appendChild(userLocation)
info.appendChild(profile)
profile.appendChild(link)
info.appendChild(followers)
info.appendChild(following)
info.appendChild(bio)
//add the content
avatar.src = object.data.avatar_url
name.textContent = object.data.name
userName.textContent = object.data.login
userLocation.textContent = object.data.location
link.textContent = object.data.html_url
followers.textContent = object.data.followers
following.textContent = object.data.following
//add the classes
userCard.classList.add('card')
info.classList.add('card-info')
name.classList.add('name')
userName.classList.add('username')
//make link functional
link.setAttribute("rel", "stylesheet")
link.setAttribute("type", "text/css")
link.setAttribute("href", object.data.html_url)
return userCard;


}

// console.log(followersArray)

followersArray.forEach((object) => {
  let newName = object
  // console.log(newName)
   axios.get('https://api.github.com/users/' + `${newName}`)
 .then( object => {
    console.log(object)
    const newCard = userCard(object);
    entryPoint.appendChild(newCard);
  })
  .catch( err => {
    console.log(err)
  })
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
