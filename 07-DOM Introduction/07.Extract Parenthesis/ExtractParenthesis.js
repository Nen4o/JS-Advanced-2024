function extract(content) {

    let contentText = document.getElementById(content).textContent;
    let result = [];

    let arr = contentText.split(/[()]/gm);

    for (let i = 0; i < arr.length; i++) {

        if(i % 2 != 0){
            result.push(arr[i]);
        }
        
    }

    return result.join('; ');
}