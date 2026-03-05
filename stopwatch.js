// create an oop stopwatch
// feature
//     -start time
//     -stop time
//     -duration (calculate the time between start and stop)
//     -reset - reset time to zero
// no ai you are allowed to search library for time

const sw = function () {
  
  this.startT ;
  this.endT ;

  this.startTime = function () {

    if(this.startT){
      throw new Error('started already')
    }

    this.startT = new Date();
  };

  this.endTime = function () {
     if(this.endT){
      throw new Error('already stop')
    }
    this.endT = new Date();
  };
 

  this.reset = function () {
    this.startT = null;
    this.endT= null
  };



  Object.defineProperty(this, "duration", {
    get: function () {
      const el = (this.endT - this.startT) / 1000;
      console.log(`Elapsed: ${el}s`);
    },
    set: function (value) {
      if (!value) throw new Error("Time has has not been Started yet");
    },
  });

};

const s = new sw();
/*


ok this works now i just have to do the property thing
so that i dont have to write it like a function with ()

i was just overthinking it fuck, i though it was suppose to not be function
pretty sure why let start=new Date and this.start= new Date was becuase it was 
premititve type, which wont work becuase it does not change or can be modify
because it is eqaul to new date it self, but shold it work because i start a new data then 
staer a new one again with end, am confuse, let sak gpt
i think the reason why using a fucntion work becuase its reference type, meaning
when we do new Date that stay teh same even if we call another new data meaning
becuase its reference type, so startTime pretty much points to the 
new date store in the memory and so is this.timeStart and that pretty much maks it local
to the function, and when we start another function ednTime it dose not know anotehr new Data was 
called becayse its out of its scope but the duration now it becuase this.startTime and end Time
is property with value set in the functoin
*/
