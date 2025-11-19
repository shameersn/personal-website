# LinkedIn Data Extraction Guide

This guide will help you extract information from your LinkedIn profile (https://www.linkedin.com/in/shameersn/) and update the centralized profile data file.

## File to Update
**Location**: `src/data/profile.ts`

This file contains all your profile information in a structured format that's used across all components.

---

## Information to Extract from LinkedIn

### 1. Profile Header Section
- [ ] **Headline** - Your current professional headline
- [ ] **Location** - Current location (if different)
- [ ] **Profile Summary/About** - Your "About" section text
- [ ] **Profile Photo** - Download your professional photo
- [ ] **Background Image** - Optional banner image

**Update in profile.ts:**
```typescript
title: "Your LinkedIn Headline",
subtitle: "Additional tagline if available",
location: "Your LinkedIn Location",
bio: "Your LinkedIn About section",
profileImage: "/path/to/your/profile-photo.jpg",
```

---

### 2. Experience Section

For each position listed on LinkedIn, extract:

- [ ] **Job Title**
- [ ] **Company Name**
- [ ] **Employment Type** (Full-time, Contract, etc.)
- [ ] **Date Range** (Start - End or Present)
- [ ] **Location**
- [ ] **Description** - What you did in this role
- [ ] **Key Achievements** - Bullet points from your experience
- [ ] **Skills/Technologies** - Technologies used
- [ ] **Company URL** - LinkedIn company page URL
- [ ] **Company Logo** - Download company logo (optional)

**Update in profile.ts:**
```typescript
experiences: [
  {
    title: "Technology Architect",
    company: "Experion Technologies",
    location: "Trivandrum, Kerala, India",
    period: "2020 - Present",
    type: "Full-time",
    companyUrl: "https://www.linkedin.com/company/experion-technologies/",
    description: "Detailed description from LinkedIn",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // Add all achievements
    ],
    technologies: [
      "AWS",
      "Node.js",
      // Add all technologies
    ],
  },
  // Add all experiences in reverse chronological order
],
```

---

### 3. Education Section

Extract:
- [ ] **Degree** (e.g., Bachelor of Technology)
- [ ] **Field of Study** (e.g., Computer Science)
- [ ] **School/University Name**
- [ ] **Years Attended**
- [ ] **Activities and Societies** (if relevant)
- [ ] **Description** (if any)

**Note**: Currently not in profile.ts, but can be added if needed.

---

### 4. Licenses & Certifications

For each certification:

- [ ] **Certification Name**
- [ ] **Issuing Organization**
- [ ] **Issue Date**
- [ ] **Expiration Date** (if applicable)
- [ ] **Credential ID** (if available)
- [ ] **Credential URL** (verification link)
- [ ] **Skills Covered**

**Update in profile.ts:**
```typescript
certifications: [
  {
    title: "AWS AI Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Beginner", // or "Intermediate", "Advanced"
    year: "2025",
    description: "What this certification covers",
    skills: ["Skill 1", "Skill 2"],
    image: "/path/to/certificate-image.png",
    verifyLink: "Credential verification URL",
    credentialId: "Credential ID if available",
    expirationDate: "YYYY-MM-DD" // if applicable
  },
  // Add all certifications
],
```

---

### 5. Skills & Endorsements

Extract your top skills:

- [ ] **Technical Skills** - List all technical skills
- [ ] **Soft Skills** - Leadership, communication, etc.
- [ ] **Skill Categories** - Group related skills

**Update in profile.ts:**
```typescript
skillCategories: [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", ...],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", ...],
  },
  // Add all skill categories
],
```

---

### 6. Recommendations

Extract testimonials/recommendations:

- [ ] **Recommender Name**
- [ ] **Recommender Role**
- [ ] **Recommender Company**
- [ ] **Recommendation Text**
- [ ] **Recommender LinkedIn URL**
- [ ] **Recommender Photo** (optional)

**Update in profile.ts:**
```typescript
testimonials: [
  {
    name: "John Doe",
    role: "CTO",
    company: "Company Name",
    content: "Full recommendation text...",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    avatar: "/path/to/avatar.jpg", // optional
  },
  // Add all recommendations
],
```

---

### 7. Projects Section (if available)

For each project:

- [ ] **Project Name**
- [ ] **Description**
- [ ] **Technologies Used**
- [ ] **Project URL** (if available)
- [ ] **Date Range**
- [ ] **Key Achievements**

**Update in profile.ts:**
```typescript
projects: [
  {
    title: "Project Name",
    description: "Detailed project description",
    image: "/path/to/project-image.jpg",
    technologies: ["React", "Node.js", ...],
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    type: "Enterprise", // or "Personal", "Open Source", etc.
    liveUrl: "https://project-url.com", // if available
    githubUrl: "https://github.com/...", // if available
  },
  // Add all projects
],
```

---

### 8. Publications & Articles (if any)

- [ ] **Title**
- [ ] **Publication Date**
- [ ] **Publisher/Platform**
- [ ] **URL**
- [ ] **Description**

**Note**: Can be added to profile.ts if needed.

---

### 9. Languages

- [ ] **Language Name**
- [ ] **Proficiency Level** (Native, Professional, Conversational, etc.)

**Note**: Can be added to profile.ts if needed.

---

### 10. Volunteer Experience (if any)

- [ ] **Role**
- [ ] **Organization**
- [ ] **Date Range**
- [ ] **Description**

**Note**: Can be added to profile.ts if needed.

---

## Quick Extraction Checklist

### Profile Basics
- [ ] Full name
- [ ] Professional headline
- [ ] Location
- [ ] About/Summary section
- [ ] Profile photo (download)
- [ ] Contact email
- [ ] Phone number (if public)

### Professional Experience
- [ ] Current role (Technology Architect at Experion)
- [ ] Previous roles (Technology Lead, Full Stack Developer, Frontend Developer)
- [ ] For each role: description, achievements, technologies, dates

### Certifications
- [ ] AWS AI Cloud Practitioner (already added)
- [ ] Any other certifications

### Skills
- [ ] All technical skills
- [ ] Soft skills
- [ ] Group into categories

### Recommendations
- [ ] Collect all recommendations
- [ ] Get recommender details

### Projects
- [ ] List all featured projects
- [ ] Get project details and links

---

## Step-by-Step Process

1. **Open LinkedIn Profile**
   - Go to https://www.linkedin.com/in/shameersn/
   - Make sure you're logged in to see all details

2. **Download Assets**
   - Right-click on profile photo → Save image
   - Save to `public/images/profile/` folder
   - Download company logos if needed
   - Download certificate images

3. **Extract Text Content**
   - Copy "About" section
   - Copy each experience description
   - Copy recommendations
   - Copy project descriptions

4. **Update profile.ts**
   - Open `src/data/profile.ts`
   - Replace placeholder data with LinkedIn data
   - Ensure all dates are accurate
   - Verify all URLs are correct

5. **Verify**
   - Check that all sections are updated
   - Ensure no placeholder text remains
   - Verify image paths are correct

---

## Tips for Better Data Extraction

1. **Use LinkedIn Export**: LinkedIn allows you to export your profile data as a PDF
   - Go to Settings & Privacy → Data Privacy → Get a copy of your data
   - This gives you structured data

2. **Browser Extensions**: Consider using browser extensions that help extract LinkedIn data

3. **Manual Copy-Paste**: For best control, manually copy each section

4. **Screenshots**: Take screenshots of important sections for reference

5. **Verify URLs**: Make sure all LinkedIn URLs are correct and accessible

---

## After Updating profile.ts

Once you've updated the profile data:

1. **Test the Site**: Run `npm run dev` and check all sections
2. **Verify Images**: Ensure all images load correctly
3. **Check Links**: Test all external links
4. **Review Content**: Read through all content for accuracy
5. **Update Components**: Some components may need updates to use the new data structure

---

## Need Help?

If you need assistance:
1. Share the LinkedIn data you've extracted
2. I can help format it correctly for profile.ts
3. I can help update components to use the new data

---

**Last Updated**: 2025
**LinkedIn Profile**: https://www.linkedin.com/in/shameersn/

