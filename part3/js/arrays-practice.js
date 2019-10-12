let movies = ['Pirates', 'Joker', 'American Justice', 'Hustlers', 'Anna'];
for (let i=0; i<movies.length; i++) {
    document.write(i+1 +'. '+movies[i] + '<br/>');
}

//STEP 1
movies = ['Pirates', 'Joker', 'American Justice', 'Hustlers', 'Anna'];
console.log('Second movie is ' + movies[1]);

//STEP 2
movies = new Array(5);
movies[0] = 'Pirates';
movies[1] = 'Joker';
movies[2] = 'American Justice';
movies[3] = 'Hustlers';
movies[4] = 'Anna';
console.log('First movie is ' + movies[0]);

//STEP 3
movies.splice(2, 0, 'CID');
console.log('After new moview');
console.log(movies);
console.log('Total length of array is: ' + movies.length);

//STEP 4
movies = ['Pirates', 'Joker', 'Hustlers', 'Anna', 'EatPraylove'];
delete movies[0];
console.log('After deleting first moview');
console.log(movies);

//STEP 5
movies = ['Pirates', 'Joker', 'Hustlers', 'Anna', 'EatPraylove', 'Human', 'Bribe'];
console.log(movies);
for (let i=0; i<movies.length; i++) {
    console.log(movies[i])
}

//STEP 6
movies = ['Pirates', 'Joker', 'Hustlers', 'Anna', 'EatPraylove', 'Human', 'Bribe'];
console.log(movies);
for (let movieIdx in movies) {
    console.log(movies[movieIdx]);
}
//STEP 7
console.log('Before Sort');
movies = ['Pirates', 'Joker', 'Hustlers', 'Anna', 'EatPraylove', 'Human', 'Bribe'];
console.log(movies);
console.log('After Sorted');
movies.sort();
for (let movieIdx in movies) {
    console.log(movies[movieIdx]);
}


//STEP 8
movies = ['Pirates', 'Joker', 'Hustlers', 'Anna', 'EatPraylove', 'Human', 'Bribe'];
console.log(movies);
let leastFavMovies = ['Ami', 'Augusta', 'Chinyan'];
console.log('Movies I like:\n\n');
for (let movieIdx in movies) {
    console.log(movies[movieIdx]);
}

console.log('Movies I regret watching:\n\n');
for (let movieIdx in leastFavMovies) {
    console.log(leastFavMovies[movieIdx]);
}

//STEP 9
movies = ['Pirates', 'Joker', 'Hustlers', 'Anna', 'EatPraylove', 'Human', 'Bribe'];
leastFavMovies = ['Ami', 'Augusta', 'Chinyan'];
let merged = movies.concat(leastFavMovies);
merged.sort();
merged.reverse();
console.log(merged);

//STEP 10
console.log('The last moview in list is: ')
console.log(merged[merged.length-1]);
