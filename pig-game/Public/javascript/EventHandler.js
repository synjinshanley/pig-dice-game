/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary Pig project || created: 3/3/20
 *  @todo
 */


export default class EventHandler {

    constructor(){
        this.handleEvent();
    }

    async handleEvent() {
        let removeMe;
        let player = 1;
        this.add = 0;
        await document.getElementById('roll').addEventListener('click', removeMe = () => {
            EventHandler.rollOne();
            EventHandler.rollTwo();
            EventHandler.check();
            EventHandler.add();
        });
        await document.getElementById('pass').addEventListener('click', removeMe = () => {
            this.pass(player)
        });
    }

    static RollOne(){
        this.rollOne = Math.round(Math.random() * 6)+1;
        document.getElementById('numb-1').innerHTML = `${this.rollOne}`;
    }

    static RollTwo(){
        this.rollTwo = Math.round(Math.random() * 6)+1;
        document.getElementById('numb-2').innerHTML = `${this.rollTwo}`;
    }

    static Check(rollOne, rollTwo){
        if(rollOne == 1 && rollTwo == 1) {
            this.check = 0;
        }else if(rollOne == 1 || rollTwo == 1){
            this.check = 1;
        }else{

        }
    }

    static Add(check, rollOne, rollTwo){
        if(this.check == 0){
            this.add = 0
            this.pass(player);
        }else if(this.check == 1){
            this.pass(player);
        }else{
            this.add = (this.add + this.rollOne + this.rollTwo);
            this.rollOne();
            this.rollTwo();
            this.check();
            this.add();
        }
    }

    static Pass(){
        if(player == 1){
            player = 2;
        }else{
            player = 1;
        }
    }
}