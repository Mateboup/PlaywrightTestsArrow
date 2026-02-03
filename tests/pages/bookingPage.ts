
import { APIRequestContext, expect } from "@playwright/test";   

export class BookingPage {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  } 

  async getAllBooking() {
    const resp = await this.request.get("/booking");
    expect(resp.status()).toBe(200);
    const bookingResp = await resp.json();
    return bookingResp;
  }

  async getBookingId(bookingId : number){
    const resp = await this.request.get(`/booking/${bookingId}`);
    expect(resp.status()).toBe(200);
    const bookingIdResp = await resp.json();
    return bookingIdResp;
  }

  async createBooking(){  
    const resp = await this.request.post(`/booking`, {
      data: {
    "firstname" : "TEST MATEO",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
},      headers: {
        'Content-Type': 'application/json'
      },
});
    const createBookingResp = await resp.json();
    expect(resp.status()).toBe(200);
    return createBookingResp;
  }   

}