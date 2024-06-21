function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add');

    const sections = document.querySelectorAll('section');
    const openSectionDiv = sections[1].querySelectorAll('div')[1];
    const inProgressDiv = document.getElementById('in-progress');
    const finishedDiv = sections[3].querySelectorAll('div')[1]

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (task.value.trim() == '' || description.value.trim() == '' || date.value.trim() == '') {
            return;
        }
        let article = document.createElement('article');

        let taskHeader = document.createElement('h3');
        taskHeader.textContent = task.value;
        article.append(taskHeader);

        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${description.value}`;
        article.append(descriptionParagraph);

        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${date.value}`;
        article.append(dateParagraph);


        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('flex');

        let startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        buttonsDiv.append(startBtn);

        let delateBtn = document.createElement('button');
        delateBtn.classList.add('red');
        delateBtn.textContent = 'Delete';
        buttonsDiv.append(delateBtn);
        delateBtn.addEventListener('click', deleteArticle);

        article.append(buttonsDiv);
        openSectionDiv.append(article);

        task.value = '';
        description.value = '';
        date.value = '';

        startBtn.addEventListener('click', () => {
            let inProgressArticle = document.createElement('article');

            let progressTaskHeder = document.createElement('h3');
            progressTaskHeder.textContent = taskHeader.textContent;
            inProgressArticle.append(progressTaskHeder);

            let progressDescriptionParagraph = document.createElement('p');
            progressDescriptionParagraph.textContent = descriptionParagraph.textContent;
            inProgressArticle.append(progressDescriptionParagraph);

            let progressDateParagraph = document.createElement('p');
            progressDateParagraph.textContent = dateParagraph.textContent;
            inProgressArticle.append(progressDateParagraph);


            let progressButtonsDiv = document.createElement('div');
            progressButtonsDiv.classList.add('flex');

            let progressDelateBtn = document.createElement('button');
            progressDelateBtn.classList.add('red');
            progressDelateBtn.textContent = 'Delete';
            progressButtonsDiv.append(progressDelateBtn);
            progressDelateBtn.addEventListener('click', deleteArticle);

            let progressFinishBtn = document.createElement('button');
            progressFinishBtn.classList.add('orange');
            progressFinishBtn.textContent = 'Finish';
            progressButtonsDiv.append(progressFinishBtn);

            inProgressArticle.append(progressButtonsDiv);
            inProgressDiv.append(inProgressArticle);
            article.remove();

            progressFinishBtn.addEventListener('click', () => {
                let completeArticle = document.createElement('article');

                let completeTaskHeder = document.createElement('h3');
                completeTaskHeder.textContent = progressTaskHeder.textContent;
                completeArticle.append(completeTaskHeder);

                let completeDescriptionParagraph = document.createElement('p');
                completeDescriptionParagraph.textContent = progressDescriptionParagraph.textContent;
                completeArticle.append(completeDescriptionParagraph);

                let completeDateParagraph = document.createElement('p');
                completeDateParagraph.textContent = progressDateParagraph.textContent;
                completeArticle.append(completeDateParagraph);

                finishedDiv.append(completeArticle);
                inProgressArticle.remove();
            })
        })
    });
    function deleteArticle (event) {
        let btnDiv = event.currentTarget.parentElement;
        let parentDiv = btnDiv.parentElement;
        parentDiv.remove();
        console.log(parentDiv);
    }
}