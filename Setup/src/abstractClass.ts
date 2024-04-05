abstract class TakePicture {
    constructor(
        public pictureMode: string,
        public filter: string
    ) { }

    abstract getPicture(): string;
}

class Twitter extends TakePicture {
    constructor(
        public pictureMode: string,
        public filter: string,
        public burst: number
    ) {
        super(pictureMode, filter);
    }

    getPicture(): string {
        return `Picture Clicked`;
    }
}

const social = new Twitter("test", "Test", 10);