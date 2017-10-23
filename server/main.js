import _ from "lodash";
import {Meteor} from "meteor/meteor";
import {Employees} from "../imports/collections/employees";
import {image, helpers} from "faker";

Meteor.startup(() => {
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

    // return per_page
    Meteor.publish('employees', (per_page) => {
        return Employees.find({}, { limit: per_page });
    })
});