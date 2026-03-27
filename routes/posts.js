// follow this tut for node and express
// https://www.youtube.com/watch?v=ha_leEpnT30
import path from "path";
import { Router } from "express";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const cors= cors
// cors
// problem live server cannot commnunicate with backend of different PORT, server is listening to 3000 while liveserve is on 5500,
// this is a security feature so that unknown url does not access or do anything to the backend, like req and modify

// solution
// use cors, what is it? pretty much allows other PORT or frontend to request or ask something to the backend, like its making it known to
// the backend that 'yeah this frontend is ours'

// learned
//     i feel like this is also one of the things you need to consider when build a full System, because its common to have different compenent that needs
//     to talk to with each other and , i think this can be use to connect to other system

//express

//express is pretty much the one that handles operation like, route, middleware, db com etc

// this is how t works and why you cant just do const app= require('express')
// jsconst express = require('express')  // express = the function
// const app = express()               // app = the RESULT of CALLING that function
// app is not pointing to express. app is pointing to what express returns when you call it.
// Think of it like this:
// jsfunction makeNumber() {
//     return 42
// }

// const fn = makeNumber   // fn = the function itself
// const num = makeNumber() // num = 42  (the result)

// // fn and num are NOT the same thing
// // fn is a function
// // num is 42

// const express= require('express') //using common js
const postRouter = Router();

// show html file default

// this enable body parsing or reading what frontend send to backend, because express cant automatically read request in the json body, meaning express has no
// way of understanding what is send, to it to enable it we do->
// what this do is when req comes in, it say pls parse this json data and put the result in json body
// not my own word, this is important because without anything you send will be undefined not matter what
//this kinda acts like a middleware, it parse the data that was send in frontend, and it trasform it here to json
//so that express can read it,
// update i still dont get this

let arr = [
  { id: 1, name: "fuck" },
  { id: 2, name: "shit" },
  { id: 3, name: "bitch" },
  { id: 4, name: "asshole" },
];

//routes get
//--- query string
postRouter.get("/", (req, res) => {
  const query = parseInt(req.query.limit);
  const newArr = arr.slice(0, -query);

  //   if thier a limit show slice one if not just show all
  if (!isNaN(query)) {
    res.status(200).send(newArr);
  } else {
    res.status(200).json(arr);
  }
});

// show file content with express
postRouter.get("/file", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

postRouter.get("/:id", (req, res,next) => {
  // this is not the save as req.body, req.body is json data pass by frontned or other route
  // and req.params.id is this '//:id'
  const parID = Number(req.params.id);

  if (!arr.find((p) => p.id === parID)) {
    const error = new Error("Not Found");
    error.status= 404 
    next(error);
  }
  const reqdata = arr.find((i) => i.id === parID);
  res.json(reqdata);
});

postRouter.post("/", (req, res) => {
  const post = req.body;
  // this words because the data column is only one, if it was multiple we will use {var1,var2}

  if (!post.name) {
    const error = new Error("Not Found");
    error.status= 404

    next(error);
  }
  const id = arr.length + 1;
  const com = { id: id, name: post };
  const newArr = arr.push(com);

  res.status(201).json(arr);
});

postRouter.put("/:id", (req, res) => {
  const putId = Number(req.params.id);
  let update = arr.find((p) => p.id === putId);

  if (!update) {
     const error = new Error("Not Found");
    error.status= 404

    next(error);
  }

  update["name"] = req.body.name;

  res.status(200).json(arr);
});

postRouter.delete("/:id", (req, res) => {
  const putId = Number(req.params.id);
  let del = arr.find((p) => p.id === putId);

  if (!del) {
    const error = new Error("Not Found");
    error.status= 404

    next(error);
  }

  arr = arr.filter((id) => {
    return id.id !== putId;
  });

  res.status(200).json(arr);
});

postRouter.get("/message", (req, res) => {
  res.json({ message: "you have recieve the message" });
});

// route post

postRouter.post("/message", (req, res) => {
  const { n, t } = req.body;

  const arr = { name: n, message: "Message sent", text: t };

  res.status(201).json(arr);

  // res.json({message:'Message sent'})

  //ok if its like this it work maybe becuase it need ot be distructure too
});

export default postRouter;
