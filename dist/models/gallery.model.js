"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gallerySchema = new mongoose_1.Schema({
    image: {
        imageUrl: {
            type: String,
            required: true
        },
        imageId: {
            type: String,
            required: true
        }
    },
    imageCategory: {
        type: String
    }
});
const Gallery = (0, mongoose_1.model)("gallery", gallerySchema);
exports.default = Gallery;
