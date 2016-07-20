module objects {
    export  class Sand extends createjs.Bitmap {
        private _dx:number;
        
        constructor(imageString:string) {
            super(core.assets.getResult(imageString))

           this.start();
        }

      

        private _reset():void {
        this.x = -800;

        }

        private _checkBounds():void{
            if(this.x >=0){
                this._reset();
            }

        }

          public start():void{
              this._reset();
              this._dx = 5;

        }

        public update():void{
            this.x += this._dx;
            this._checkBounds();

        }

    }

}