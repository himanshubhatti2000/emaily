const keys=require("../config/keys")
const stripe = require("stripe")(keys.stripeSecretKey)
const requireLogin= require('../middlewares/requireLogin')
module.exports = app => {
    app.post("/stripe", requireLogin, async (req, res) => {
    const {id,amount}=req.body
    try{
        const Payment=await stripe.charges.create({
            amount,
            currency: "usd",
            description: "gotcha",
            source: id,
            shipping: {
                name: 'Jenny Rosen',
                address: {
                  line1: '510 Townsend St',
                  postal_code: '98140',
                  city: 'San Francisco',
                  state: 'CA',
                  country: 'US',
                }
              },
           })
            //console.log(Payment)
            //return res.status(200).json(Payment)
            //console.log("req.user:",req.user)
            req.user.credits+=5
            const user=await req.user.save()
            res.send(user)
        }
        catch(error){
            console.log(error)
        }
            
    
})
}