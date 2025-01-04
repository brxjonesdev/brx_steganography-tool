
export async function encodeMessage(imageData: Uint8Array , message: string) {
    const wasm = await import('./wasm');
    const encodedImage = wasm.encode_message(imageData, message);
    return encodedImage;
    
}

export async function decodeMessage(imageData: Uint8Array) {
    const wasm = await import('./wasm');
    const decodedMessage = wasm.decode_message(imageData);
    return decodedMessage;
    
}

export function decodeDataUrl(dataUrl : string) {
    // Split the Data URL into metadata and Base64 content
    const base64Data = dataUrl.split(',')[1];
  
    // Decode the Base64 string into raw binary data
    const binaryString = atob(base64Data);
  
    // Convert the binary string into a Uint8Array
    const binaryData = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      binaryData[i] = binaryString.charCodeAt(i);
    }
  
    return binaryData;
  }