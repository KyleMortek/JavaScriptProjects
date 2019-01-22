let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    // console.log(partySize);
    // console.log(this);//calls the object
    // return true;
    let seatLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatLeft;
  },
  seatParty: function (partySize) {
    if(this.checkAvailability(partySize)){
      this.guestCount = this.guestCount+partySize;
    }else{
      return 'party cannot be seated';
    }
  },
  removeParty: function (partySize) {
    if(this.guestCount>=partySize){
      this.guestCount= this.guestCount-partySize;
    }
  }

};

/** 
 * 
 * **Challenge**
 * make the following functions:
 * seatParty
 * removeParty
 */




restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
console.log(restaurant)


let status = restaurant.checkAvailability(10);
console.log(status);

// this is from folder 5 video 6