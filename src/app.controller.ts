import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('all')
  getAllContacts() {
    return this.appService.fetchAllContacts();
  }
  @Post('add')
  addContact(@Body() body) {
    return this.appService.addContact(body);
  }
  @Post('edit')
  editContact(@Body() body) {
    return this.appService.editContact(body);
  }
  @Post('delete')
  deleteContact(@Body() body) {
    return this.appService.deleteContact(body);
  }
  @Post('fetch-by-number')
  fetchByNumber(@Body() body) {
    return this.appService.fetchContactByNumber(body);
  }
}
