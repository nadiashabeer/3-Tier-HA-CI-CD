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
* **Pipeline Flow:** `GitHub` ➔ `AWS CodeBuild` ➔
