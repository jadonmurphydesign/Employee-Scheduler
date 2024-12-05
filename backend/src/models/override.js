class Override {
    constructor(eventId, overrideType, overrideEmployeeId, overrideStartDate, overrideEndDate) {
        this.eventId = eventId;
        this.overrideType = overrideType;
        this.overrideEmployeeId = overrideEmployeeId;
        this.overrideStartDate = new Date(overrideStartDate);
        this.overrideEndDate = overrideEndDate ? new Date(overrideEndDate) : null;
    }

    isApplicableOn(date) {
        return (
            this.overrideStartDate <= date &&
            (!this.overrideEndDate || date <= this.overrideEndDate)
        );
    }
}

module.exports = Override;
