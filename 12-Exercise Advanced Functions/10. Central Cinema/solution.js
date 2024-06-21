function solve() {
    const containerDiv = document.getElementById('container');
    const inputs = containerDiv.querySelectorAll('input');

    const movieName = inputs[0];
    const hall = inputs[1];
    const tickedPrice = inputs[2];
    const onScreenBtn = containerDiv.querySelector('button');

    const moviesOnScreenRef = document.getElementById('movies');
    const moviesOnScreenList = moviesOnScreenRef.querySelector('ul');

    const archiveRef = document.getElementById('archive');
    const archiveList = archiveRef.querySelector('ul');
    const clearArchiveBtn = archiveRef.querySelector('button');

    onScreenBtn.addEventListener('click', addMoviesOnScreen);
    clearArchiveBtn.addEventListener('click', clearArchive)

    function addMoviesOnScreen(event) {
        event.preventDefault();
        if (isNaN(tickedPrice.value) || movieName.value.trim() == '' || hall.value.trim() == '' || tickedPrice.value.trim() == ''){
            return;
        }

        const listItem = document.createElement('li');

        const movieNameSpan = document.createElement('span');
        movieNameSpan.textContent = movieName.value;
        listItem.append(movieNameSpan);

        const hallName = document.createElement('strong');
        hallName.textContent = `Hall: ${hall.value}`;
        listItem.append(hallName);

        const tickedInfoDiv = document.createElement('div');

        const tickedPriceElement = document.createElement('strong');
        tickedPriceElement.textContent = Number(tickedPrice.value).toFixed(2);
        tickedInfoDiv.append(tickedPriceElement);

        const inputSoldElement = document.createElement('input');
        inputSoldElement.placeholder = 'Tickets Sold';
        tickedInfoDiv.append(inputSoldElement);

        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', addMovieInArchive);
        tickedInfoDiv.append(archiveBtn);

        listItem.append(tickedInfoDiv);
        moviesOnScreenList.append(listItem);

        movieName.value = '';
        hall.value = '';
        tickedPrice.value = '';
    }

    function addMovieInArchive(event){
        const ticketInfoDiv = event.currentTarget.parentElement
        const currentListItem = ticketInfoDiv.parentElement;

        const tickedBuy = ticketInfoDiv.querySelector('input').value;

        if(isNaN(tickedBuy) || tickedBuy.trim() == ''){
            return;
        }

        const listItem = document.createElement('li');

        const price = Number(ticketInfoDiv.querySelector('strong').textContent);

        const movieNameSpan = currentListItem.querySelector('span');
        listItem.append(movieNameSpan);

        const totalAmountSpan = document.createElement('strong');
        totalAmountSpan.textContent = `Total amount: ${(price * Number(tickedBuy)).toFixed(2)}`
        listItem.append(totalAmountSpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click',deleteListFromArchive)
        listItem.append(deleteBtn);

        archiveList.append(listItem);
        currentListItem.remove();
    }

    function deleteListFromArchive(event){
        let list = event.currentTarget.parentElement;
        list.remove();
    }

    function clearArchive(){
        let listItems = archiveList.querySelectorAll('li');

        for (const list of listItems) {
            list.remove();
        }
    }
}