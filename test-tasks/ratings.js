// https://github.com/tutu-ru/frontend-javascript-test Задача 2

function drawRating(vote) {
    if (vote >= 0 && vote <= 20) {
        return '★☆☆☆☆';
    }
    else if (vote > 20 && vote <= 40) {
        return '★★☆☆☆';
    }
    else if (vote > 40 && vote <= 60) {
        return '★★★☆☆';
    }
    else if (vote > 60 && vote <= 80) {
        return '★★★★☆';
    }
    else if (vote > 80 && vote <= 100) {
        return '★★★★★';
    }
}

const rules = [
    (vote) => vote >= 0 && vote <= 20 && '★☆☆☆☆',
    (vote) => vote > 20 && vote <= 40 && '★★☆☆☆',
    (vote) => vote > 40 && vote <= 60 && '★★★☆☆',
    (vote) => vote > 60 && vote <= 80 && '★★★★☆',
    (vote) => vote > 80 && vote <= 100 && '★★★★★',
];

function drawRatingWithFind(vote) {
    const rule = rules.find(rule => rule(vote));
    return rule(vote);
}

function drawRatingWithReduce(vote) {
    return rules.reduce((prev, rule) => prev || rule(vote), false);
}

console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★

console.log(drawRatingWithFind(0) ); // ★☆☆☆☆
console.log(drawRatingWithFind(1) ); // ★☆☆☆☆
console.log(drawRatingWithFind(50)); // ★★★☆☆
console.log(drawRatingWithFind(99)); // ★★★★★

console.log(drawRatingWithReduce(0) ); // ★☆☆☆☆
console.log(drawRatingWithReduce(1) ); // ★☆☆☆☆
console.log(drawRatingWithReduce(50)); // ★★★☆☆
console.log(drawRatingWithReduce(99)); // ★★★★★