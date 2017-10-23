import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
    // props.employee

    return (
        <div>
            <div className="employee-list">
                {props.employees.map(employee => <EmployeeDetail/>)}
            </div>
        </div>
    )
};

export default createContainer(() => {
    // Set up subscription
    Meteor.subscribe('employees');

    // return object as props
    return { employees: Employees.find({}).fetch() }
}, EmployeeList);