function startGame() {
    myGameArea.start();

}
function myGameArea() {
    this.canvas= document.createElement("canvas");
    this.start=function () {
        this.canvas.width=480;
        this.canvas.height=270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);

    }
    this.clear =function () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

    }

}