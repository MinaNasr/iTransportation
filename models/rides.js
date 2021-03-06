var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rides = new Schema({
    createdAt:{
      type:Date,
      default:Date.now
    },
    rideInfo:{
      serviceType:String,
      pDate:String,
      pTime:String,
      pLocation:String,
      dLocation:String,
      distance:Number,
      stops:Schema.Types.Mixed,
      numberOfPersons:Number,
      numberOfLuggage:Number,
      handicap:String,
      childSeat:Schema.Types.Mixed
    },
    car:{
      type: Schema.Types.ObjectId,
      ref: 'cars'
    },
    customerInfo:{
      firstname:String,
      lastname:String,
      email:String,
      mobileNumber:String,
      creditCard:{
        number:String,
        holder:String,
        eDate:String,
        cvc:String,
        status:String
      }
    },
    comment:String,
    status:String,
    cost:{
      perMile:Number,
      vehicleFee:Number,
      discount:{
        type:Number,
        default:0
      },
      earlyMorning:{
        type:Number,
        default:0
      },
      stops:{
        type:Number,
        default:0
      },
      childSeats:{
        type:Number,
        default:0
      },
    },
    flightDetails:{
      pickUp:{
        type:{
          airline:String,
          number:String
        },
        default:null
      },
      dropOff:{
        type:{
          airline:String,
          number:String
        },
        default:null
      },
    },
    totalCost:Number,
    confirmation:Number,
    driver:String
});

mongoose.model('rides',rides);
