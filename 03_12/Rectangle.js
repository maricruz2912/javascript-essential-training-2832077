class Rectangle {
    //A constructor is defined
    constructor (
    lado1,
    lado2,
    lado3,
    lado4
) {
    //Define properties:
    this.lado1=lado1;
    this.lado2=lado2;
    this.lado3=lado3;
    this.lado=lado4;
}
  //Add methodos like normal functions:

  area(lado_1, lado_2,lado_3,lado_4){
      this.lado1=lado_1;
      this.lado2=lado_2;
      this.lado3=lado_3;
      this.lado4=lado_4;
  }
  
}
console.log(Rectangle.name);
export default Rectangle