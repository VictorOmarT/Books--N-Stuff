class media {
    constructor(title) {
        this._title = title;
        this._isChekedout = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isChekedout() {
        return this._isChekedout;
    }
    get rating() {
        return this._ratings;
    }
    set isChekedout(value) {
        this._isChekedout = value;
    }

    tooggleChekedout() {
        if (this._isChekedout == true) {
            this._isChekedout = false;
        } else {
            this._isChekedout = true;
        }
    }

    getAverageRating() {
        let sumRating = this._ratings.reduce((i, rating) => i + rating);
        return sumRating / this._ratings.length;
    }

    addRating(value) {
        this._ratings.push(value);
    }

}

class Book extends media {

    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() { return this._author; }
    get title() { return this._author}
}

class Movie extends media {
    
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() { return this._director; }
    get runTime() { return this._runTime; }
}

const historyOfEverything = new Book('Bill Bryson', 'A short story of  Nerly Everything', 544);

historyOfEverything.tooggleChekedout();
console.log(historyOfEverything._isChekedout);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bond','Speed', 116);
speed.tooggleChekedout();
console.log(speed.isChekedout);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());