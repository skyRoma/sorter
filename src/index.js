class Sorter {
    constructor() {
        this.mas = [];
        this.compareFunction = function compareNumeric(a, b) {
            return a - b;
        }
    }

    add(element) {
        this.mas.push(element);
    }

    at(index) {
        return this.mas[index];
    }

    get length() {
        return this.mas.length;
    }

    toArray() {
        return this.mas;
    }

    sort(indices) {
        indices.sort(function compareNumeric(a, b) {
            return a - b;
        });
        var mas2 = [];
        for (var i = 0; i < indices.length; i++) {
            mas2.push(this.mas[indices[i]])
        }
        mas2.sort(this.compareFunction);

        for (var i = 0; i < indices.length; i++) {
            this.mas[indices[i]] = mas2[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;