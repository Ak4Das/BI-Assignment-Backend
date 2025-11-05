const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema(
  {
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
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
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

// const a = {
//     "type": "Online",
//     "hostedBy": "p1",
//     "bannerUrl": "https://th.bing.com/th/id/OIP.-ykjxTAfnPLgV1aRJ7woogHaFK?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
//     "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     "dressCode": "casual",
//     "ageRestrictions": "20 and above",
//     "time": {
//       "startDate": "23rd November",
//       "endDate": "30th November",
//       "startTime": "10:00AM",
//       "endTime": "7:00PM",
//     },
//     "place": "city center, durgapur",
//     "price": 2300,
//     "speakers": [
//       {
//         "profileImage": "https://th.bing.com/th/id/OIP.ntzGohTfvU6Jn50XXxFHBgHaJA?w=186&h=226&c=7&r=0&o=7&pid=1.7&rm=3",
//         "name": "Mr. Rohan k.",
//         "position": "Marketing Manager"
//       }
//     ],
//   }