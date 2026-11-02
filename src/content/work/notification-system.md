---
order: 3
title: A notification system for a healthcare app
kicker: CASE STUDY · HEALTHCARE · 2020–2023
lead: I designed and built how a healthcare app sends its emails and handles audio and video calls. It runs on AWS managed services, so there are no message servers to look after.
description: How I designed the email and call system for a healthcare app on AWS, using SNS, SQS, Lambda, SES and Twilio.
facts:
  - { label: CLIENT, value: Healthcare app }
  - { label: MY ROLE, value: Architect and developer }
  - { label: STACK, value: "Node.js, React, PostgreSQL" }
  - { label: CLOUD, value: "AWS SNS, SQS, Lambda, SES · Twilio" }
figureCaption: Simplified view of the notification flow.
resultHeading: Scales with the load, no servers to manage
stats:
  - { value: Serverless, caption: workers scale up and down with the queue, hot: true }
  - { value: Queued, caption: messages wait safely when traffic is high }
  - { value: Email + calls, caption: "one design for messages, audio and video" }
ctaTitle: Need reliable notifications or real-time calls? Happy to talk it through.
tags: [SNS · SQS, LAMBDA, TWILIO]
home:
  label: CASE STUDY · HEALTHCARE
  title: A notification system on AWS
  text: I designed how a healthcare app sends its messages and calls. Email goes through SES, background work runs on SNS, SQS and Lambda, and Twilio handles audio and video.
list:
  label: HEALTHCARE
  title: A notification system on AWS
  dates: 2020 – 2023
  text: "I designed how a healthcare app sends its emails and handles audio and video calls, using SNS, SQS, Lambda, SES and Twilio."
---

<p class="label accent">01 · THE PROBLEM</p>

## Messages had to be reliable and easy to scale

A healthcare app sends a lot of messages, and people depend on them. The design had to handle busy times without losing messages, and the app also needed audio and video calls.

<p class="label accent">02 · WHAT I DID</p>

## Events, queues and small workers

- The app publishes events to Amazon SNS.
- SQS queues hold the work, so nothing is lost when traffic jumps.
- Small Lambda functions process the queues and send email through Amazon SES.
- Twilio powers the audio and video calls.
- Node.js and React for the app, PostgreSQL for the data.
