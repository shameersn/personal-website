---
order: 1
title: An AWS platform for a care app that has run for 6 years
kicker: CASE STUDY · US HEALTHCARE · 2019–PRESENT
lead: A US digital health company serves patients and caregivers on web and mobile. I designed the cloud platform behind its web and mobile apps. It still runs on that design today, and it supports SOC 2 and HIPAA audits.
description: How I designed the AWS platform behind a US care app. It has run on the same design for six years and supports SOC 2 and HIPAA audits.
facts:
  - { label: CLIENT, value: US healthcare SaaS }
  - { label: MY ROLE, value: Architect and lead developer }
  - { label: STACK, value: "React, React Native, Node.js, PostgreSQL, MongoDB" }
  - { label: CLOUD, value: "AWS ECS, ALB, CloudFront, Lambda, SES" }
figureCaption: Simplified. The real system also has VPN-only database access, WAF and CloudWatch alerts.
resultHeading: Six years later, the same design still runs
stats:
  - { value: 6 years, caption: in production with only minor changes, hot: true }
  - { value: SOC 2 + HIPAA, caption: audit evidence ready from the platform }
  - { value: 4 services, caption: small enough for a small team to run }
ctaTitle: Working on something similar? Happy to talk it through.
tags: [AWS ECS, NODE.JS, REACT NATIVE]
home:
  label: CASE STUDY · HEALTHCARE
  title: An AWS platform that has run for 6 years
  text: I designed the AWS platform for a care app on web and mobile. Six years on, it still runs on that design and goes through SOC 2 and HIPAA audits.
list:
  label: HEALTHCARE
  title: An AWS platform that has run for 6 years
  dates: 2019 – PRESENT
  text: I designed the AWS platform for a care app on web and mobile. Six years on, it still runs on that design and goes through SOC 2 and HIPAA audits.
---

<p class="label accent">01 · THE PROBLEM</p>

## A small team needed a platform that could pass a health-data audit

The product had a web app, a mobile app and a growing set of features. Patient data meant strict rules on access, encryption and logging. The team was small, so the system had to be simple to run.

<p class="label accent">02 · WHAT I DID</p>

## Split the work into small services on AWS

- Four Node.js services (admin, auth, user, maps) on ECS, behind a load balancer.
- CI/CD with CodePipeline and CodeBuild. Every deploy posts to Slack.
- Web app served from S3 and CloudFront. Email with SES. Background jobs on Lambda.
- Security for the audit: MFA everywhere, database reachable only by VPN, encryption at rest and in transit, WAF, CloudTrail, multi-AZ database, backups every 4 hours.
