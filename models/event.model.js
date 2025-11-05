const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    bannerUrl: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    dressCode: {
      type: String,
      required: true,
    },
    ageRestrictions: {
      type: String,
      required: true,
    },
    time: {
      startDateAndTime: [{
        type: String,
        required: true,
      }],
      endDateAndTime: [{
        type: String,
        required: true,
      }]
    },
    place: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    speakers: [
      {
        profileImage: String,
        name: String,
        position: String
      },
    ],
  },
  {
    timestamps: true,
  }
)

const eventModel = mongoose.model("eventData", eventSchema)

module.exports = eventModel