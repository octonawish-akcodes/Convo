from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configure the Google Gemini API key and model
genai.configure(api_key='AIzaSyA9jvR1mQsXwh38fMRbA1Sz7NpbxN55JdA')
gemini_model = genai.GenerativeModel('gemini-pro')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.form.get('user_input')

    # Call the Gemini model to get a response based on the user input
    gemini_response = get_gemini_response(user_input)

    return jsonify({"user_input": user_input, "gemini_response": gemini_response})

def get_gemini_response(user_input):
    # Use the configured Gemini model to start a chat and send a message
    chat = gemini_model.start_chat()
    response = chat.send_message(user_input)

    return response.text

if __name__ == '__main__':
    app.run(debug=True)
