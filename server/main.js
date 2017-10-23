import _ from "lodash";
import {Meteor} from "meteor/meteor";
import {Employees} from "../imports/collections/employees";
import {image, helpers} from "faker";

Meteor.startup(() => {
    // generate data

    // check data if exists
    // see if collections has any records
    const numberRecords = Employees.find({}).count();
    if (!numberRecords) {
        // generate some data
        _.times(5000, () => {
            const {name, email, phone} = helpers.createCard();

            Employees.insert({
                name,
                email,
                phone,
                avatar: image.avatar()
            })
        })
    }

    // return 20 records
    Meteor.publish('employees', () => {
        return Employees.find({}, { limit: 20 });
    })
});