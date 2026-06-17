PROJECT 5 – 3‑Tier HA + CI/CD

Objective
Deploy a highly available, auto‑scaling 3‑tier architecture with full CI/CD.
________________________________________
Architecture Overview
•	Route 53
•	ALB
•	EC2 Auto Scaling
•	Elastic Beanstalk
•	RDS (Multi‑AZ + Read Replica)
•	GitHub Actions
•	CodeBuild / CodeDeploy
•	Multi‑AZ VPC
________________________________________
Implementation
•	Multi‑AZ VPC design
•	App deployment using Elastic Beanstalk
•	RDS HA & read replicas
•	CI/CD pipeline:
o	GitHub → Build → Deploy
•	Blue/Green deployments
•	Auto scaling & alarms

