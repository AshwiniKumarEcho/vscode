import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
 @track

 greeting ='world';
 changehandler(event){
 this.greeting=event.traget.value;
 }

}