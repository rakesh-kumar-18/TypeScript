"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short // you can add extra if you want,But you can't do less than what is required
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    // createStory: () => void = () => {
    //     console.log("Story Created");
    // };
    createStory() {
        console.log("Story Created");
    }
    ;
}
