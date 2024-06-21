function solution(command) {

    let totalVotes = this['upvotes'] - this['downvotes'];
    let addNum = 0;

    if(totalVotes > 50){
        this['upvotes'] += addNum;
        this['downvotes'] += addNum;
    }

    switch (command) {
        case 'upvote':
            this['upvotes']++;
            break;
        case 'downvote':
            this['downvotes']++;
            break;
        case 'score':
            console.log();
            break;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
solution.call(post, 'downvote');
score = solution.call(post, 'score');
// [127, 127, 0, 'controversial']
// (executed 50 times)
// [139, 189, -50, 'unpopular']