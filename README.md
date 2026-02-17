#  CI/CD Deployment with GitHub Actions, Docker & AWS EC2

##  Project Overview

This project demonstrates a complete **CI/CD pipeline** using:

* GitHub Actions for automation
* Docker for containerization
* Docker Hub for image registry
* AWS EC2 for deployment

Whenever code is pushed to the repository, the application is automatically:

1. Built into a Docker image
2. Pushed to Docker Hub
3. Deployed to an AWS EC2 instance

---

##  Architecture Flow

```
Local Development
        ↓
   Git Push (GitHub)
        ↓
   GitHub Actions CI/CD
        ↓
 Build Docker Image
        ↓
 Push Image → Docker Hub
        ↓
 SSH into EC2
        ↓
 Pull Latest Image
        ↓
 Restart Container
        ↓
 Application Live 
```

---

##  Tech Stack

* **GitHub Actions** – CI/CD automation
* **Docker** – Containerization
* **Docker Hub** – Image registry
* **AWS EC2** – Hosting server
* **Linux (Ubuntu)** – Server OS

---

##  Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── Dockerfile
├── README.md
└── application source code
```

---

##  Required GitHub Secrets

Go to:

```
Repo → Settings → Secrets and variables → Actions
```

Add the following secrets:

| Secret Name       | Description                      |
| ----------------- | -------------------------------- |
| `DOCKER_USERNAME` | Docker Hub username              |
| `DOCKER_PASSWORD` | Docker Hub access token/password |
| `EC2_HOST`        | Public IP of EC2 instance        |
| `EC2_USER`        | EC2 username (usually `ubuntu`)  |
| `EC2_SSH_KEY`     | Contents of `.pem` private key   |

### Add SSH Key

Run locally:

```bash
cat your-key.pem
```

Copy full content and paste into:

```
EC2_SSH_KEY secret
```

---

##  Docker Setup

Build image locally:

```bash
docker build -t app .
```

Run container:

```bash
docker run -d -p 80:3000 app
```

---

##  AWS EC2 Setup

###  Install Docker on EC2

```bash
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
```

Logout and login again.

---

###  Security Group Rules

Recommended inbound rules:

| Port | Purpose       |
| ---- | ------------- |
| 22   | SSH access    |
| 80   | HTTP traffic  |
| 443  | HTTPS traffic |

 Avoid exposing database ports publicly.

---

##  CI/CD Workflow

On every push to `main` branch:

### GitHub Actions will:

* Checkout repository
* Login to Docker Hub
* Build Docker image
* Push image to Docker Hub
* SSH into EC2
* Pull latest image
* Stop old container
* Run new container

---

##  Example Deployment Commands (EC2)

```bash
docker pull <docker-username>/<image-name>:latest

docker stop app || true
docker rm app || true

docker run -d -p 80:3000 --name app <docker-username>/<image-name>:latest
```

---

##  Access Application

After deployment:

```
http://<EC2-PUBLIC-IP>
```

---

##  Features

* Fully automated deployment
* Containerized application
* Easy rollback using Docker images
* Production-ready workflow
* Cloud deployment using AWS EC2

---

##  Security Best Practices

* Store secrets only in GitHub Secrets
* Never commit `.pem` files
* Restrict SSH access when possible
* Keep database ports private

---

##  Future Improvements

* Nginx reverse proxy
* HTTPS with Let's Encrypt
* Zero-downtime deployments
* Docker Compose setup
* Auto scaling with AWS

---

##  Author

Built as a learning project for understanding real-world DevOps CI/CD workflows.