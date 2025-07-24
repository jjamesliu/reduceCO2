import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export async function getCarbonAdvice(travelMode) {
try {
    const chatCompletion = await client.chatCompletion({
        provider: "novita",
        model: "meta-llama/Meta-Llama-3-8B-Instruct",
        messages: [
            {
                role: "user",
                content: `My current mode of transportation is ${travelMode}.
                 How can I reduce my carbon footprint? Format your response in markdown to make it easier to render to a web page`,
            },
        ],
    });
    return chatCompletion.choices[0].message.content;

    } catch (error) {
         console.log('Error getting carbon advice: ', error);
         return error;
    }
}


