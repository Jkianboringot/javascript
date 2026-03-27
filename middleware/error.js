const errorHandler = (err, req, res, next) => {
  //this will not work if err is not their??
  if (err.status) {
    res.status(err.status).json({ message: err.message });//this err.status is from error.status=value, this is so that it adjust to its kind of error and if not provided its 500
  } else {
    res.status(500).json({ message: err.message }); //ok this err. is the next in route this is called next(err)
    // it probably done work because am not catching the value pass to it, which is error
  }
};

export default errorHandler;

// postRouter.get("/:id", (req, res,next) => {
//   const parID = Number(req.params.id);

//   if (!arr.find((p) => p.id === parID)) {
//     const error = new Error("Not Found");
//     next(error); ==> this one
//   }
//   const reqdata = arr.find((i) => i.id === parID);
//   res.json(reqdata);
// });
