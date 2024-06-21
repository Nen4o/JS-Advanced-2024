function getArticleGenerator(articles) {
    let content = document.getElementById('content');

    return function showNext(){
        if(articles.length == 0){
            return;
        }
        let nextArticle = articles.shift();
        let article = document.createElement('article');
        article.textContent = nextArticle;
        content.append(article);
    }
}
