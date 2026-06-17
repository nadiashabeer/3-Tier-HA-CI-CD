# Project 5: 3‑Tier Highly Available Architecture + CI/CD

[![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-%232088FF.svg?style=flat&logo=github-actions&logoColor=white)](https://github.com/features/actions)

## 🎯 Objective
Deploy a highly available, auto‑scaling 3‑tier architecture on AWS integrated with a robust, production-ready CI/CD pipeline.

---

## 🏗️ Architecture Overview

The infrastructure is designed for maximum fault tolerance, scalability, and security across multiple Availability Zones (Multi-AZ).

* **DNS & Routing:** Route 53
* **Load Balancing:** Application Load Balancer (ALB)
* **Compute & Scaling:** EC2 Auto Scaling Groups
* **Application Management:** AWS Elastic Beanstalk
* **Database:** Amazon RDS (Multi‑AZ Deployment + Read Replica)
* **CI/CD Pipeline:** GitHub Actions & AWS CodeBuild / CodeDeploy
* **Network:** Custom Multi‑AZ VPC (Public, Private, and Data subnets)

---

## 🛠️ Key Implementation Steps

### 1. Networking & Data Tier
* **Multi‑AZ VPC Design:** Structured with isolated public subnets for load balancers, private subnets for application servers, and restricted subnets for the database tier.
* **RDS HA & Read Replicas:** Configured synchronous replication to a standby instance in a second AZ for failover protection, alongside an asynchronous Read Replica to offload read-heavy traffic.

### 2. Application & Scaling Tier
* **Elastic Beanstalk Deployment:** Streamlined environment provisioning and application management.
* **Auto Scaling & Alarms:** Implemented CloudWatch alarms tracking CPU utilization and network traffic to dynamically scale capacity up or down based on demand.

### 3. Continuous Integration & Continuous Deployment (CI/CD)
* **Pipeline Flow:** `GitHub` ➔ `AWS CodeBuild` ➔ `AWS CodeDeploy`
* **Blue/Green Deployments:** Configured to ensure zero-downtime updates and seamless rollback capabilities if post-deployment health checks fail.

---

## 🚀 Getting Started

### Prerequisites
* An active AWS Account
* AWS CLI configured with appropriate permissions
* GitHub repository secrets configured (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, etc.)

### Deployment Steps
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Provision Infrastructure:** Deploy the networking components (Multi-AZ VPC) and database stack (RDS Multi-AZ + Read Replica) via the AWS Console or Infrastructure as Code (IaC).
3.  **Configure CI/CD:** Set up your GitHub Actions secrets to securely connect with AWS CodeBuild and CodeDeploy.
4.  **Trigger Pipeline:** Push a commit to the main branch to trigger the GitHub Actions workflow and execute the initial application deployment to Elastic Beanstalk.

---

## 📊 Monitoring & Verification
* **High Availability:** Simulate an AZ outage to verify Route 53, ALB routing, and RDS failover mechanics work seamlessly.
* **Auto Scaling:** Run a stress test on the application tier to verify CloudWatch alarms trigger EC2 scale-up events.
* **CI/CD:** Modify a piece of application code, commit to GitHub, and watch the Blue/Green deployment execute without downtime.

---
**Author: Nadia Shabeer**
