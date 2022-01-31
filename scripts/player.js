class Player {
  constructor(ctx) {
    
    this.ctx = ctx;
   
   this.playerImg = {
      img: new Image(),
      x: 130,
      y: 140,
      width: 20,
      height: 20,
      vx: 1,
      //ax: 0.001   --->> ACCELETARION FLAPPY BIRD WILL GO DOWN
    };
    this.playerImg.img.src = "/images/white-square.png"; 
  }

  move() {
    document.onkeydown = event => {
      const key = event.keyCode;
      const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch (key) {
          case 37:
          case 65:
            this.playerImg.x -= 20;
            break;
          case 38:
          case 87:
             this.playerImg -= 20;
            break;
          case 39:
          case 83:
            this.playerImg.x += 20;
            
            break;
          
          case 68:
             this.playerImg.y += 20;
            break;
        }
      }
  
  }
  }

 draw() {
    //ctx.fillRect(140,130,20,20)
    
   
  this.ctx.drawImage(
    
      this.playerImg.img,
      this.playerImg.x,
      this.playerImg.y,
      this.playerImg.width,
      this.playerImg.height
    ); 
  } 

}
