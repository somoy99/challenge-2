import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('phonebook') private phonebookModel: Model<any>,
  ) { }
  getHello(): string {
    return 'Hello World!';
  }
  async fetchAllContacts() {
    try {
      let contacts = await this.phonebookModel.find({});
      return { data: contacts, 'msg': 'successfully fetched all contacts' }
    } catch (error) {
      console.log(error);
      return { 'msg': error };
    }

  }
  async fetchContactByNumber(data) {
    try {
      let contact = await this.phonebookModel.find({
        number: data.number
      });


      return { data: { result: contact }, 'msg': 'successfully fetched contact by number' }
    } catch (error) {
      console.log(error);
      return { 'msg': error };
    }

  }

  async addContact(data) {

    try {
      if (data['number'] == null) {
        return { 'msg': 'number is required!' };
      }
      if (data['name'] == null) {
        return { 'msg': 'name is required!' };
      }
      const regex: RegExp = /^(?:\+880)?(?:\d{10})$/;
      if (regex.test(data.number)) {
        let contact = await new this.phonebookModel({
          name: data.name,
          number: data.number
        });
        await contact.save();
        return { data: contact, 'msg': 'successfully added contact' }

      } else {
        return { data: null, 'msg': 'not a valid bangladeshi phone number!' }
      }

    } catch (error) {
      return { 'msg': error };
    }

  }

  async editContact(data) {
    try {
      let contact = await this.phonebookModel.findOneAndUpdate({
        _id: mongoose.Types.ObjectId(data._id)
      }, { name: data.name, number:data.number }, {new:true, upsert:true});


      return { data: { result: contact }, 'msg': 'successfully updated contact' }
    } catch (error) {
      console.log(error);
      return { 'msg': error };
    }

  }

  async deleteContact(data) {
    try {
      let contact = await this.phonebookModel.findOneAndDelete({
        _id: mongoose.Types.ObjectId(data._id)
      });
      return { data: { result: contact }, 'msg': 'successfully removed contact' }
    } catch (error) {
      console.log(error);
      return { 'msg': error };
    }

  }


}
