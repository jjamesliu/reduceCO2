import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.VITE_HF_TOKEN);


exports.handler = async function(event, context) {

    const chatCompletion = await client.chatCompletion({
        provider: "novita",
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        messages: [
            {
                role: "user",
                content: `My current mode of transportation is ${travelMode}.
                 How can I reduce my carbon footprint?`,
            },
        ],
    });

}
console.log(chatCompletion.choices[0].message);