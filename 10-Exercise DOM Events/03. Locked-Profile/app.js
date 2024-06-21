function lockedProfile() {
    let userContainer = document.getElementById('main');
    let profiles = userContainer.getElementsByClassName('profile');

    for (let i = 0; i < profiles.length; i++){
        let profileBtn = profiles[i].querySelector('button');
        profileBtn.addEventListener('click', showMore);
    }

    function showMore(event){
        let profile = event.currentTarget.parentElement;
        let inputs = profile.querySelectorAll('input[type=radio]');

        if (inputs[1].checked) {
            let hidedInfo = profile.querySelector('div');

            if (event.currentTarget.textContent == 'Show more'){
                hidedInfo.style.display = 'block';
                event.currentTarget.textContent = 'Hide it';
            } else if (event.currentTarget.textContent == 'Hide it'){
                hidedInfo.style.display = 'none';
                event.currentTarget.textContent = 'Show more';
            }
        } 
    }
}