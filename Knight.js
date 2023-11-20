class Knight {
    stepList;

    constructor(stepList = []) {
        this.stepList = stepList;
    }

    copySteps(step) {
        let copy = this.stepList.slice();
        copy.push(step);
        return copy;
    }

    get current() {
        return this.stepList[this.stepList.length - 1] || 0;
    }
}

export default Knight;