"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enStatusComplaints = void 0;
var enStatusComplaints;
(function (enStatusComplaints) {
    enStatusComplaints[enStatusComplaints["PENDING"] = 0] = "PENDING";
    enStatusComplaints[enStatusComplaints["GENERATED_BY_AI"] = 1] = "GENERATED_BY_AI";
    enStatusComplaints[enStatusComplaints["VERIFIED_BY_HUMAN"] = 2] = "VERIFIED_BY_HUMAN";
    enStatusComplaints[enStatusComplaints["SENT_TO_CITY_HALL"] = 3] = "SENT_TO_CITY_HALL";
    enStatusComplaints[enStatusComplaints["SENT_TO_JUDICIARY"] = 4] = "SENT_TO_JUDICIARY";
    enStatusComplaints[enStatusComplaints["SENT_TO_MP"] = 5] = "SENT_TO_MP";
    enStatusComplaints[enStatusComplaints["RESOLVED"] = 6] = "RESOLVED";
    enStatusComplaints[enStatusComplaints["CITIZEN_FEEDBACK"] = 7] = "CITIZEN_FEEDBACK";
})(enStatusComplaints || (exports.enStatusComplaints = enStatusComplaints = {}));
