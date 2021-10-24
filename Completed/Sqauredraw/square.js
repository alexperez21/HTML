class Square{
    constructor(Xcorner = 0, Ycorner = 0, length = 10) {
        this.Xcorner = Xcorner;
        this.Ycorner = Ycorner;
        this.length = length;
    }
    perimeter (){
        return this.length * 4;
    }
    area(){
        return this.length*this.length;
    }
    diagonal(){
        return this.length * (Math.sqrt(2));
    }
    ifinsqaure(Xinput, Yinput){
        let Xarea = this.Xcorner + this.length;
        let Yarea = this.Ycorner + this.length;

        if((Xinput <= Xarea && Xinput >= this.Xcorner) &&(Yinput <= Yarea && Yinput >= this.Ycorner)){
            return true;
        } else {
            return false;
        }
    }
}