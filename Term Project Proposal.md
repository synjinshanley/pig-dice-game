  
**I. App Overview**

Our app will be used by professors to automatically keep track of who is attending classes. As we have worked closely with professors in the past, we know that keeping track of attendance on Blackboard alone can be tedious. This app will be designed to transfer the responsibility of keeping attendance to the student; This way professors can start teaching immediately and not take up the first few minutes of class taking attendance. Our app will be unique from current attendance apps because we will use a QR code with a limited-time passcode that the instructor will show on screen. In this manner, students who are not present in the room cannot see the QR/passcode and therefore cannot fake attendance. Thus, the users of this app will be students marking their present status and instructors having this information available for later reference.  Outside the scope of this class, we could go further to turn this into a real app and add location services or even Blackboard integrations. Additionally, this collected data could be used for cross analysis with test scores, class evaluations, and more as a metric to improve student outcomes. 

**II. Team Responsibilities:** 

To distribute the responsibility evenly while allowing each team member to contribute to all aspects of the project, we identified core features in a project management github board. This board tracks features and their completion statuses while allowing us to delegate responsibilities equally. This distribution ensures all team members will contribute to every aspect of the project including requirement identification, coding, testing, receiving feedback, and looping back through the coding and testing stages. We will have weekly check-ins as a team where we discuss and all equally engage with each aspect of our project.  

**III. Database Design**

| instructors  (doc id): UID name: string email: string  | courses (doc id): UID instructorId: string *(instructors UID)* name: string  code: string semester: string students: array\<string\> activeCheckIn: map | null When no check-in running: null When running : id: string (uuid, generated) passcode: string  expiresAt: timestamp  startedAt: timestamp  qrUrl: string   | Checkins (created on demand) (doc id): *UID* courseId*: string (course UID)* checkInId*: string (activeCheckIn uid)* studentEmail*: string* createdAt*: timestamp*  |
| :---- | :---- | :---- |

**IV.  External Services**

We will possibly implement a Geolocation Service or QR code service. 