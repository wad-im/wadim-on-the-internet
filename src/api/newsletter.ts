import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import axios from "axios"

export default async function handler(req: GatsbyFunctionRequest , res: GatsbyFunctionResponse) {
  
  try {
    if(req.method === 'POST'){
      await subscribeEmail(req, res)
    } else {
      console.log(`${req.method} not allowed`)
    }
  } catch (error) {
      console.log(error)
    }
  }

const subscribeEmail = async (req, res)=>{
  const {email} = req.body
  const formId = process.env.CONVERTKIT_FORM_ID
  const converkitEndpoint = `https://api.convertkit.com/v3/forms/${formId}/subscribe`

  const response = await axios.post(converkitEndpoint, {
    api_key: process.env.CONVERTKIT_API_KEY,
    email: email,
  })

  console.log(response)
}
  
