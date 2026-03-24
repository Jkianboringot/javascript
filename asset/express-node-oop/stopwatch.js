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



ok just read this bullshit, this is why i need to slowdown my writing and make sure , 
that what i write is easy to understand, becuase i might be able to understanding it then
but now , i wont understand shit, becuase it has been days , shit if this was ims on filament
it will be worse becuase i have only use it for a week, and i have stop usign it fro a month, so i have
too pretty much relearn the everything, but i ahve build the pathway so it will be faster but still not good
i can more easily get that knowledge back if i just write a good comment so that i either done have
a hard time relearning again or understanding it, ok so slowdonw make sure what you right 
can be understand by future you


i get the jest of it but it could be better, next time we need to follow of writing structure that we 
will follow always





*/
