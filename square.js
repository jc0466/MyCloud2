module.exports = function (width) {
    return {
        width: width,
        area : function () {
            return width * width;
        },
        circum: function () {
            return 4 * this.width; 
        }
    };
}