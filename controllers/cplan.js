const mPlan = require('../models/mplan')

exports.postAddPlan = async (req,res)=>{
    try{
        const {planType,planName,cryptoName,
            algorithm,planDuration,profitability,price} = req.body
            if(planType&&planName&&cryptoName&&
                algorithm&&planDuration&&profitability&&price){
                    let plan = await mPlan.addPlan({
                        planType:planType,
                        planName:planName,
                        cryptoName:cryptoName,
                        algorithm:algorithm,
                        planDuration:planDuration,
                        profitability:profitability,
                        price:price
                    })
                        if(plan){
                            res.sendStatus(201)
                        }else{
                            res.sendStatus(400)
                        }
                }else{
                    res.sendStatus(500)
                }
    }catch(error){
        res.sendStatus(500)
    }
}

exports.getGetPlans =async (req,res) =>{
    try{
        const {planType,cryptoName} = req.query
        if(planType&&cryptoName){
            const plans = await mPlan.getPlans(planType,cryptoName)
            if(plans[0]){
               res.status(200).json(plans)
            }else{
                res.sendStatus(400)
            }
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        res.sendStatus(500)
    }
}
exports.putUpdatePlan = async (req,res)=>{
    try{
        const id = req.params.id
        const {planType,planName,cryptoName,
            algorithm,planDuration,profitability,price} = req.body
            if(id&&planType&&planName&&cryptoName&&
                algorithm&&planDuration&&profitability&&price){
                    let plan = await mPlan.updatePlan(id,{
                        planType:planType,
                        planName:planName,
                        cryptoName:cryptoName,
                        algorithm:algorithm,
                        planDuration:planDuration,
                        profitability:profitability,
                        price:price
                    })
                        if(plan){
                            res.sendStatus(200)
                        }else{
                            res.sendStatus(400)
                        }
            }else{
                res.sendStatus(400)
            }
    }catch(error){
        res.sendStatus(500)
    }
}
exports.deleteDeletePlan = async (req,res)=>{
    try{
        const id = req.params.id
            if(id){
                let plan = await mPlan.deletePlan(id)
                        if(plan){
                            res.sendStatus(200)
                        }else{
                            res.sendStatus(400)
                        }
            }else{
                res.sendStatus(400)
            }
    }catch(error){
        res.sendStatus(500)
    }
}