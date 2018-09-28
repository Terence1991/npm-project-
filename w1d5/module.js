var list = [];

module.exports = {
    store: function(number) {
        list.push(number);
    },
    sort: function() {
        list.sort(function(a, b) {
            return a - b;
        });
        return list; 
    }
     
}

   