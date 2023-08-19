import axios from 'axios';

const bearerToken = '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';

const generateImage = async () => {
  const requestData = {
    prompt: 'A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm',
    n: 1,
    size: '1024x1024',
    response_format: 'b64_json'
    // Add other request data here
  };

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/images/generations',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
        // ...other headers
      },
      data: requestData
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default generateImage;
