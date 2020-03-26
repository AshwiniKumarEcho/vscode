import { LightningElement ,track} from 'lwc';

export default class Inputchangeex extends LightningElement {
    @track myvalue="test value";
    handlechange(evt){
        this.myvalue=evt.target.value;
        console.log('current value of the input:'+evt.target.value);
    }
}