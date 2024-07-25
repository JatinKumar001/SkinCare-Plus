import sys;

def userinput():
    if len(sys.argv) > 1:
            image_path = sys.argv[1]
            print("Hello World")
            print(image_path)
    else:
        print("No image path provided.")

userinput()

# def preprocess_and_predict(image_path, model, label_encoder):
#     img = cv2.imread(image_path)
#     img = cv2.resize(img, (224, 224))
#     img = preprocess_input(np.array([img]))
    
#     predictions = model.predict(img)
#     print("Predictions shape:", predictions.shape)
#     print("Predictions array:", predictions)
    
#     predicted_class_index = np.argmax(predictions)
#     predicted_class = label_encoder.classes_[predicted_class_index]
    
#     return predicted_class

# def user_input_prediction(model, label_encoder):
#     image_path = sys.argv[1]
#     try:
#         predicted_class = preprocess_and_predict(image_path, model, label_encoder)
#         print(predicted_class)
        
#     except Exception as e:
#         print(f"Error: {e}")

# # Example usage
# user_input_prediction(model, le)
