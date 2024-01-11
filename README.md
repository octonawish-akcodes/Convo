# Convo - Powered by Google's Gemini 
Convo is a simple web application powered by Google's Gemini model. It allows users to interact with the Gemini model through a chat-like interface.

## Features

- **Chat Interface**: Engage in conversations with Gemini using a user-friendly chat interface.
- **Dynamic Responses**: Gemini responds to user inputs dynamically through AJAX requests to the Flask server.
- **New Chat Functionality**: Start a new chat with a random name to have fresh interactions.

## Snapshots:

![Screenshot 2024-01-11 201134](https://github.com/octonawish-akcodes/Convo/assets/76171953/862fc7d7-7c2a-4027-a56b-e18440254136)
![Screenshot 2024-01-11 201150](https://github.com/octonawish-akcodes/Convo/assets/76171953/a7a381ad-7000-468f-bfe3-7dc39ab7adeb)
![Screenshot 2024-01-11 201237](https://github.com/octonawish-akcodes/Convo/assets/76171953/510a7446-0d8e-43bf-8b6e-5fa20e3bf932)


## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/octonawish-akcodes/Convo.git
   cd Convo
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Generate YOUR Gemini API key from this [Link](https://ai.google.dev/?utm_source=google&utm_medium=cpc&utm_campaign=brand_core_brand&gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wYg12Rux8pCa98sXFSVKcsr6KECGDEdH6GZeUwQErSspvlKZajNVzsaAtStEALw_wcB)**

4. **Run the Application:**
   ```bash
   python app.py
   ```

   Visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

## Deployment with Docker
To deploy the Flask app using Docker, follow these steps:

Build the Docker Image:

```bash
docker build -t convo-flask-app .
```

Run the Docker Container:

```bash
docker run -p 5000:5000 convo-flask-app
```
The app will be accessible at http://localhost:5000.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

