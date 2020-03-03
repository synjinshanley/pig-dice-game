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
        let this.add = 0;
        await document.getElementById('roll').addEventListener('click', removeMe = () => {
            this.rollOne();
            this.rollTwo();
            this.check();
            this.add();
        }
        await document.getElementById('pass').addEventListener('click', removeMe = () => {
            this.pass(player)
        }
    }

    setRollOne(){
        this.rollOne = Math.round(Math.random() * 5)+1;
        document.getElementById('numb-1').innerHTML = `${this.rollOne}`;
    }

    setRollTwo(){
        this.rollTwo = Math.round(Math.random() * 5)+1;
        document.getElementById('numb-2').innerHTML = `${this.rollTwo}`;
    }

    setCheck(this.rollOne, this.rollTwo){
        if(this.rollOne == 1 && this.rollTwo == 1) {
            this.check = 0;
        }else if(this.rollOne == 1 || this.rollTwo == 1){
            this.check = 1;
        }else{
            continue
        }
    }

    setAdd(this.check, this.rollOne, this.rollTwo){
        if(this.check == 0){
            this.add = 0
            this.pass
        }else if(this.check == 1){
            this.pass();
        }else{
            this.add = (this.add + this.rollOne + this.rollTwo);
            this.rollOne();
            this.rollTwo();
            this.check();
            this.add();
        }
    }

    setPass(){
        if(player == 1){
            player = 2;
        }else{
            player = 1;
        }
    }
}