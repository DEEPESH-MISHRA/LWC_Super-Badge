import { LightningElement, api, track } from "lwc";
const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected";
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper";
export default class BoatTile extends LightningElement {
  @api boat;
  @api selectedBoatId;
  @track imageUrl = "";
  get backgroundStyle() {
    //console.log(this.boat.Picture__c);
    this.imageUrl = "background-image:url("+this.boat.Picture__c+")";
    //console.log("this.ImageUrl" + this.imageUrl);
    return this.imageUrl;
    //return "background-image:url(${this.boat.Picture__c})";  
  }
  get tileClass() {
    return this.selectedBoatId
      ? TILE_WRAPPER_SELECTED_CLASS
      : TILE_WRAPPER_UNSELECTED_CLASS;
  }
  selectBoat() {
    this.selectedBoatId = !this.selectedBoatId;
    const boatselect = new CustomEvent("boatselect", {
      detail: {
        boatId: this.boat.Id
      }
    });
    this.dispatchEvent(boatselect);
  }
}
