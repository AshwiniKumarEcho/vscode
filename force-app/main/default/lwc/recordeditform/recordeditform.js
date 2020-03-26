import { LightningElement ,api,track} from 'lwc';

export default class Recordeditform extends LightningElement {
@api recordId;
@track contactid;
handlesave(event){
    console.log('on submit'+event.detail.fields);
}
handleSuccess(event){
   const updaterecord= event.detail.id;
   console.log('on success',updaterecord);

}
handlecreate(event){

    this.contactid=event.detail.id;
    console.log('created conatct is'+event.detail.id);
}

}