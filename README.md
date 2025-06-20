# 📦 Full Stack CI/CD PoC with Java + Angular + SLSA

This project demonstrates a full-stack application with a secure CI/CD pipeline using:

- ✅ Java Maven backend (Spring Boot or similar)
- ✅ Angular frontend
- ✅ Dockerized services
- ✅ GitHub Actions CI/CD
- ✅ [SLSA](https://slsa.dev/) (Supply Chain Levels for Software Artifacts) for secure Docker image builds
- ✅ Modular, **reusable GitHub workflows**

---

## 🧱 Project Structure

```plaintext
.
├── backend/                      # Java Maven application
│   ├── Dockerfile
│   └── src/...
├── frontend/                    # Angular application
│   ├── Dockerfile
│   └── src/...
└── .github/
    └── workflows/
        ├── ci-main.yml          # Main orchestrating workflow
        ├── java-build.yml       # Reusable Maven build workflow
        └── angular-test.yml     # Reusable Angular test workflow

## 🧪 How to Test It (with Docker)

After the CI/CD pipeline pushes the Docker images to Docker Hub, you can test them manually.

### 🔁 1. Pull and Run the Backend Image

```bash
docker pull ibrahimmagdy01/hello-world-backend:latest
docker run -d -p 8080:8080 ibrahimmagdy01/hello-world-backend

### 🔁 2. Pull and Run the frontend Image

```bash
docker pull ibrahimmagdy01/hello-world-frontend:latest
docker run -d -p 8080:8080 ibrahimmagdy01/hello-world-frontend