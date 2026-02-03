import { test, expect } from '@playwright/test';
import { BookingPage } from '../pages/bookingPage';

test('Automate API Request ', async ({ request }) => {

  await test.step('Get booking ', async () => {
    const bookingPage = new BookingPage(request);
    const response = await bookingPage.getAllBooking();
    console.log('Response:' + response);
    console.log(response);
    expect(response.length).toBeGreaterThan(0); 
  });

  await test.step('Get booking by ID ', async () => {
    const bookingPage = new BookingPage(request);
    const bookindIdResp = await bookingPage.getBookingId(1);
    console.log('Booking ID Response:' + bookindIdResp);
    console.log(bookindIdResp);
  });

  await test.step('Create booking & Verify that the booking was created successfully ', async () => {
    const bookingPage = new BookingPage(request);
    const createBookingResp = await bookingPage.createBooking();
    console.log('Create Booking Response:' + createBookingResp);
    console.log(createBookingResp);
    const idBookingCreated = createBookingResp.bookingid;
    const bookindIdResp = await bookingPage.getBookingId(idBookingCreated);
    expect(bookindIdResp.firstname).toBe("TEST MATEO");
    expect(bookindIdResp.lastname).toBe("Brown");
    expect(bookindIdResp.totalprice).toBe(111);
  }); 

});
