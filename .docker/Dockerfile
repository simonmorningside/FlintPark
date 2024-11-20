# Use a lightweight Python image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy application files
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir flask flask-cors

# Expose the port Flask runs on
EXPOSE 8080

# Command to run the Flask app
CMD ["python", "app.py"]
