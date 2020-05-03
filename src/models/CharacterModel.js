export default class {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.thumbnail = data.thumbnail && new Thumbnail(data.thumbnail);
        this.comics = data.comics && new Details(data.comics);
        this.series = data.series && new Details(data.series);
        this.stories = data.stories && new Details(data.stories);
        this.events =  data.events && new Details(data.events);
        this.urls = data.urls.map(url => new Url(url));
    }
}

class Thumbnail{
    constructor(data) {
        this.path = data.path; // + '/standard_medium.' + data.extension;
        this.extension = data.extension;
    }

    get default() {
        return this.path + '/standard_medium.' + this.extension
    }

    get xLarge() {
        return this.path + '/landscape_amazing.' + this.extension;
    }
}

class Details {
    constructor(data) {
        this.items = data.items.map(item => new Item(item));
    }
}

class Item {
    constructor(data) {
        this.name = data.name;
    }
}

class Url {
    constructor(data) {
        this.type = data.type;
        this.url = data.url;
    }
}