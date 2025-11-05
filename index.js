// CONNECT WITH DATABASE
const connectWithDatabase = require("./db/db.connect")
connectWithDatabase()

// IMPORT MODEL
const eventModel = require("./models/event.model")

// EXPRESS SETUP
const express = require("express")
const app = express()

// CORS CODE FOR DEPLOYMENT
const cors = require("cors")
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// DEFINE ROUTES BELOW

// ADD A EVENT IN THE DATABASE
async function addNewEvent(newEvent) {
  try {
    const event = new eventModel(newEvent)
    if (event) {
      await event.save()
      return event
    } else {
      console.log("Failed to add event")
    }
  } catch (error) {
    throw error
  }
}
app.use(express.json())
app.post("/addEvent", async (req, res) => {
  try {
    const newEvent = await addNewEvent(req.body)
    res.json(newEvent)
  } catch (error) {
    throw error
  }
})

// DELETE A EVENT FROM THE DATABASE
async function deleteAEvent(id) {
  try {
    const deletedEvent = await eventModel.findByIdAndDelete(id)
    return deletedEvent
  } catch (error) {
    throw error
  }
}
app.delete("/deleteEvent/:id", async (req, res) => {
  try {
    const deletedEvent = await deleteAEvent(req.params.id)
    if (deletedEvent) {
      res.json(deletedEvent)
    } else {
      console.log("Failed to delete that event")
    }
  } catch (error) {
    throw error
  }
})

// GET EVENT BY ID
async function getEventById(id) {
  try {
    const event = await eventModel.findById(id)
    return event
  } catch (error) {
    throw error
  }
}
app.get("/getEventById/:id", async (req, res) => {
  try {
    const event = await getEventById(req.params.id)
    res.json(event)
  } catch (error) {
    throw error
  }
})

// GET ALL EVENTS
async function getAllEvents() {
  try {
    const events = await eventModel.find()
    return events
  } catch (error) {
    throw error
  }
}
app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents()
    res.json(events)
  } catch (error) {
    throw error
  }
})

// UPDATE EVENT BY ID
async function updateEvent(id, dataToUpdate) {
  try {
    const updatedEvent = await eventModel.findByIdAndUpdate(
      id,
      dataToUpdate,
      {
        new: true,
      }
    )
    return updatedEvent
  } catch (error) {
    throw error
  }
}
app.use(express.json())
app.post("/updateEventById/:id", async (req, res) => {
  try {
    const updatedEvent = await updateEvent(
      req.params.id,
      req.body
    )
    if (updatedEvent) {
      res.json(updatedEvent)
    } else {
      console.log("Event not found.");
    }
  } catch (error) {
    throw error
  }
})

// START SERVER
const PORT = 3000
app.listen(PORT, () => console.log("Server start at port: ", PORT))
