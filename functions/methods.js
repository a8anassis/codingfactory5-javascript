const obj = {
    rate: 1.2,
    getWage: function(wage) {
        return wage + wage * this.rate;
    },
    getDoubleWage() {
        return wage + wage * (this.rate * 2);
    }
}