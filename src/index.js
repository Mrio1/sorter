class Sorter {
    constructor() {
        this.arr = [];
        this.defaultCompare = (a,b) => a-b;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

     sort(indices) {
         var tempArr = [];
         indices = indices.sort((a,b) => a - b);
         var l = indices.length;
         
         for ( var i = 0; i < l; i++){
             tempArr.push(this.arr[indices[i]]);
         }
         
         tempArr.sort(this.defaultCompare);
         
         for (i = 0; i < l; i++){
             this.arr[indices[i]] = tempArr[i]; 
         }     
  }

  setComparator(compareFunction) {
    this.defaultCompare = compareFunction;
  }
}

module.exports = Sorter;