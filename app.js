const markButton = document.querySelector("#mark");
const unread = document.getElementsByClassName("user");
const unreadicon = document.getElementsByClassName('unreadicon');
const numberNotifications = document.querySelector('.number-notifications');

numberNotifications.innerHTML = unreadicon.length;

markButton.addEventListener('click', (e) => {
    for(var i = unread.length - 1; i >= 0; i-- ){
        unread[i].classList.remove('unread')
    }

    for(var i = unreadicon.length - 1; i >= 0; i-- ){
        unreadicon[i].classList.remove('unreadicon')
    }

    numberNotifications.remove();
    e.preventDefault();
})