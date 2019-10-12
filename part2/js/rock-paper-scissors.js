userSelection = () => {
    var choice = window.prompt('Enter either Rock, Paper or Scissors (r/p/s):');
    switch (choice) {
        case 'r':
            return 'rock';
        case 'p':
            return 'paper';
        case 's':
            return 'sicssors'; 
        default:
            return userSelection();
    }
}

computerSelection = () => {
    var number =  Math.floor(Math.random() * Math.floor(3));
    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'sicssors'; 
    }
}

rockPaperScissors = () => {
    var compChosen = computerSelection();
    var userChosen = userSelection();
    if ((compChosen === 'rock' && userChosen === 'rock') 
    || (compChosen === 'paper' && userChosen === 'paper') 
    ||(compChosen === 'sicssors' && userChosen === 'sicssors')) {
        document.write('Both computer and you chose ' + userChosen);
    } else if ((compChosen === 'rock' && userChosen === 'paper') 
    || (compChosen === 'paper' && userChosen === 'sicssors') 
    || (compChosen === 'sicssors' && userChosen === 'rock')) {
        document.write('Computer chose ' + compChosen + '. You chose ' + userChosen + '. So you win');
    } else {
        document.write('Computer chose ' + compChosen + '. You chose ' + userChosen + '. So computer wins');
    }
}

rockPaperScissors();