const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require("../meddleware/fetchuser");

// Routes 1 add notes
router.post(
  "/addnote",fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      const { title, description, tag } = req.body;
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenotes = await note.save();
      res.json(savenotes);
    } catch (error) {
      res.status(401).send({ error: "internal server error " });
    }
  }
);

// routes 2 get All the notes using
router.get("/fetchnotes",fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }

});


// route 3 Update method

router.put("/updatenote/:id",fetchuser,async(req,res)=>{
  const {title,description,tag}=req.body


  try {
    //  create newnote
  const newNote={};

  if (title) {
  newNote.title = title
  }

  if (description) {
  newNote.description = description
  }

  if (tag) {
  newNote.tag = tag
  }

  let note=await Notes.findById(req.params.id)
  if(!note){
    return res.status(404).send("Not found")
  }

  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed  ")
  }

  note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

  res.json({note})
  } catch (error) {
    res.status(500).send("Internal server error")
  }
});


// Route 4 : delete notes
router.delete("/deletenote/:id",fetchuser,async(req,res)=>{
 
  let note=await Notes.findById(req.params.id)
  if(!note){
    return res.status(404).send("Not found")
  }

// allow deletion only if  
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed  ")
  }

  note=await Notes.findByIdAndDelete(req.params.id)

  res.json({"Success":"Note has been deleted",note:note});
});

module.exports = router;
