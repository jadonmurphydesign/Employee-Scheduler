const { v4: uuidv4 } = require('uuid');

class Event {
    constructor(employeeId, startDate, endDate) {
        this.id = uuidv4();
        this.employeeId = employeeId;
        this.startDate = new Date(startDate);
        this.endDate = endDate ? new Date(endDate) : null;
        this.overrides = [];
    }

    activeDates(date) {
        return this.startDate <= date && (!this.endDate || date <= this.endDate);
    };

    getAssignedEmployee(date) {
        const applicableOverrides = this.overrides.filter(override =>
            override.isApplicableOn(date)
        );
        return applicableOverrides.length > 0
            ? applicableOverrides[applicableOverrides.length - 1].overrideEmployeeId
            : this.employeeId;
    };

    addOverride(override) {
        this.overrides.push(override);
    };
};

module.exports = Event;
