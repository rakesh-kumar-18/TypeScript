"use strict";
class TakePicture {
    constructor(pictureMode, filter) {
        this.pictureMode = pictureMode;
        this.filter = filter;
    }
}
class Twitter extends TakePicture {
    constructor(pictureMode, filter, burst) {
        super(pictureMode, filter);
        this.pictureMode = pictureMode;
        this.filter = filter;
        this.burst = burst;
    }
    getPicture() {
        return `Picture Clicked`;
    }
}
const social = new Twitter("test", "Test", 10);
