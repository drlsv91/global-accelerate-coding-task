"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCommentData = void 0;
function validateCommentData(comment, ipAddressLocation, created) {
    const errors = {};
    if (!comment) {
        errors['comment'] = 'comment field cannot be empty';
    }
    else if (comment.length > 249)
        errors['comment'] = 'comment text too long';
    else if (!ipAddressLocation)
        errors['ipAddressLocation'] = 'ipAddressLocation field cannot be empty';
    else if (!created)
        errors['created'] = 'created field cannot be empty';
    return Object.keys(errors).length === 0 ? null : errors;
}
exports.validateCommentData = validateCommentData;
