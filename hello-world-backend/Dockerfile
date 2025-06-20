# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy the built jar file into the container
COPY target/hello-world-1.0-SNAPSHOT.jar app.jar

# Expose the port your app listens on (update if needed)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar", "--server.address=0.0.0.0"]
