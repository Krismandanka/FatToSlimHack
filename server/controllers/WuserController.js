const accountSid = "AC897b3f4d7a809f39639a020e68d66cfb";
const authToken ="5243b7209c743292bf14d5e96a419234";

const twilio = require('twilio');

const client = twilio(accountSid, authToken);

const sendMessage = async(req,res)=>{
    console.log("ttt",req.body);

    try {

        client.messages.create({
            body: req.body.message,
            from: 'whatsapp:+18597657134',
            to: 'whatsapp:'+req.body.to
        })
        .then(message => console.log("Message sent successfully"));

        return res.status(200).json({ success: true,msg:'Message sent successfully' });
    } catch (error) {
        return res.status(400).json({ success: false,msg:error.message });
    }

}

module.exports = {
    sendMessage
}