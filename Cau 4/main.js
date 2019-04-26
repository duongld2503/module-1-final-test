Rectanglt = function (x,y,width,height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.getX = function () {
        return this.x
    }
    this.getY = function () {
        return this.y
    }
    this.getWidth = function () {
        return this.width
    }
    this.getHeight = function () {
        return this.height
    }
    this.getColor = function () {
        return this.color
    }

    this.setX = function (x) {
        return this.x = x;
    }
    this.setY = function (y) {
        return this.y = y;
    }
    this.setWidth = function (width) {
        return this.width = width;
    }
    this.setHeight = function (height) {
        return this.height = height;
    }
    this.setColor = function (color) {
        return this.color = color;
    }

}

render = function(rect) {
    let c = document.getElementById("myCanvas");
    let pen = c.getContext("2d");

    pen.fillRect(rect.x,rect.y,rect.width,rect.height);
    pen.fillStyle = rect.color;
    pen.fill();
}

let rect = new Rectanglt(10,10,200,100)
render(rect);