function editElement(reference, match, replace) {

    //console.log(reference.textContent.includes(match));

    while(reference.textContent.includes(match)){
        reference.textContent = reference.textContent.replace(match, replace);
    }

}   