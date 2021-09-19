firebase.initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });

}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
function Signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

$(document).ready(function () {
    $("#password12").on('click', function () {
        var passwordField = $('#password')
        var passwordFieldType = passwordField.attr('type')
        if (passwordFieldType == 'password') {
            passwordField.attr('type', 'text');
            $(this).text('');
        } else {
            passwordField.attr('type', 'password');
            $(this).text('');
        }
    });
});

const auth = firebase.auth();
var database = firebase.database();

auth.onAuthStateChanged((user) => {
    if (user) {
        database.ref('Game/' + user.uid).update({
            email: user.email,
            lastLoggedInAt: new Date()
        });
        setData(user);
        // setMessages();
        document.getElementById("user").innerHTML = user.email;
        document.getElementById("login_box").style.display = "none";
        document.getElementById("welcome_box").style.display = "block";
    } else {
        document.getElementById("login_box").style.display = "block";
        document.getElementById("welcome_box").style.display = "none";
    }
});

const setData = (user) => {
    const databaseRef = database.ref('Game/' + user.uid);
    databaseRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const lastLoggedInAt = data.lastLoggedInAt;
        const lastLoggedInSpan = document.getElementById("lastLoggedIn");
        lastLoggedInSpan.innerHTML = lastLoggedInAt;

    });
}

let popped = 0;
let lives = 3
document.addEventListener('mouseover', function(e){
    if(e.className == "blue-box"){
        lives--
        alert("you lost your first life")
    }
})
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "red-box"){
                e.target.style.backgroundColor = "#ededed";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});
document.addEventListener('mouseover' , function (e){

    if(e.target.className == "blue-box"){
     alert("you Lost");
     window.location = 'index.html'
     lives--;
    }else if(e.target.className == "green-box"){
        alert("you Lost");
        window.location = 'index.html'
        lives--;
    }
})
function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#yay-no-balloons');
        let message = document.querySelector('#box');
        gallery.innerHTML = '';
        message.style.display = 'block';
        if(e.target.className){
            alert("Level 1 is complete")
          }
    }
};

const next = () =>{
        window.location.href = "index2.html"
}

const Reset = () => {
    window.location.href = "index.html"
}