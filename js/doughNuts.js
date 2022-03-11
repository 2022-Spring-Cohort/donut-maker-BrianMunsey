class doughNuts {
    constructor() {
        this.dCount = 1000;
        this.clickWorth = 1;
        this.price = 100;
        this.multiplierPrice = 10;
        this.autoClickers = 0;
    }

    click() {
        this.dCount += this.clickWorth;
    }

    priceChange() {
        this.price *= 1.2;
    }

    clickMultiplier() {
        if (this.dCount >= this.multiplierPrice) {
            this.clickWorth *= 1.2;
            this.dCount -= this.multiplierPrice;
            this.multiplierPrice *= 1.1;
        }
    }
}

export { doughNuts }