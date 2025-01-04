use wasm_bindgen::prelude::*;
use steganography::{Steganography, EncodeError, DecodeError};


let stego = Steganography::new();
/// This encodes a string into an image using steganography.
#[wasm_bindgen]
pub fn encode_image(image: Vec<u8>, message: String) -> Vec<u8> {
    let encoded_image = stego.encode_image(image, message).unwrap();
    encoded_image
}





/// This decodes an message from an image using steganography.
#[wasm_bindgen]
pub fn decode_image(image: Vec<u8>) -> String {
    let message = stego.decode_image(image).unwrap();
    message
}