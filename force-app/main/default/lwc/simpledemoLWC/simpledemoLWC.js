import { LightningElement } from 'lwc';
export default class SimpleLWC extends LightningElement {
    name = 'Marlabs Driving Digital Agility'
    connectedCallback() {
        console.log('came into connectedCallback')
    }
}