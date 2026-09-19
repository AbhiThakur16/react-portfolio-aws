# React Portfolio on AWS

A production-style personal portfolio built with React and deployed on Amazon Web Services.

This project demonstrates a complete cloud deployment workflow with a React frontend, Node.js API, PostgreSQL database, Nginx reverse proxy, HTTPS, monitoring, and secure AWS networking.

## Live Website

**https://15-206-4-18.sslip.io**

> The current HTTPS hostname uses sslip.io with an AWS Elastic IP. A custom domain can be connected later.

## Architecture

~~~text
User / Browser
      |
      | HTTPS :443
      v
Amazon EC2
      |
      v
    Nginx
    /    \
   /      \
React    /api/*
Frontend   |
           v
    Node.js + Express
      127.0.0.1:3001
           |
           v
 Amazon RDS PostgreSQL
~~~

## Features

- Responsive React portfolio
- Production build with Vite
- Hosted on Amazon EC2
- Nginx web server and reverse proxy
- Node.js + Express REST API
- PostgreSQL database on Amazon RDS
- Live RDS data displayed in React
- Backend restricted to localhost
- HTTPS with Let's Encrypt
- Automatic SSL certificate renewal
- HTTP to HTTPS redirect
- Elastic IP for stable public addressing
- PM2 process management
- Automatic backend startup after reboot
- CloudWatch monitoring
- Nginx access and error logs
- IAM role integration
- Security headers configured in Nginx
- Environment variables for database credentials
- Sensitive files excluded from Git

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- PostgreSQL pg driver

### Database

- Amazon RDS
- PostgreSQL

### AWS Services

- Amazon EC2
- Amazon RDS
- Amazon S3
- Amazon CloudWatch
- AWS IAM
- Amazon VPC
- Security Groups
- Elastic IP

### Server & Deployment

- Ubuntu Linux
- Nginx
- PM2
- Certbot
- Let's Encrypt

## API

### Get Visitors

~~~http
GET /api/visitors
~~~

Example response:

~~~json
[
  {
    "id": 1,
    "name": "Abhi",
    "email": "example@email.com"
  }
]
~~~

The public visitors API is read-only.

## Security

- RDS is not publicly accessible
- EC2 connects privately to PostgreSQL RDS
- Node.js listens only on 127.0.0.1:3001
- Port 3001 is not publicly exposed
- Public POST access is disabled
- Database credentials are stored in environment variables
- .env, PEM files, private keys, and backup files are excluded from Git
- HTTPS is enabled
- HTTP redirects automatically to HTTPS
- Nginx security headers are configured
- SSH access is restricted using Security Group rules

## Monitoring

Amazon CloudWatch is configured for:

- EC2 CPU utilization
- CPU utilization alarm
- Nginx access logs
- Nginx error logs
- CloudWatch Agent

## Deployment Flow

~~~text
Source Code
     |
     v
npm run build
     |
     v
Vite dist/
     |
     v
/var/www/html
     |
     v
Nginx
     |
     v
HTTPS Website
~~~

The Node.js backend runs separately under PM2.

## Run Locally

Clone the repository:

~~~bash
git clone https://github.com/AbhiThakur16/react-portfolio-aws.git
cd react-portfolio-aws
~~~

Install dependencies:

~~~bash
npm install
~~~

Start the development server:

~~~bash
npm run dev
~~~

Create a production build:

~~~bash
npm run build
~~~

## AWS Skills Demonstrated

- EC2 deployment
- Linux server administration
- Nginx configuration
- Reverse proxy setup
- RDS PostgreSQL integration
- IAM roles
- VPC networking
- Security Groups
- CloudWatch logs and alarms
- Elastic IP
- HTTPS certificate deployment
- SSL auto-renewal
- PM2 process management
- Git and GitHub workflow

## Repository

https://github.com/AbhiThakur16/react-portfolio-aws

## Author

**Abhi Thakur**

B.Tech CSE - Data Science  
Aspiring AI Engineer

---

Built as a hands-on AWS deployment project to understand how frontend, backend, database, networking, security, monitoring, and HTTPS work together in a real cloud environment.
