const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile monthly sales data and generate a report.",
        taskDate: "2025-06-01",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update CRM",
        taskDescription: "Ensure all client records are up-to-date.",
        taskDate: "2025-05-30",
        category: "CRM",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Participate in the weekly sync-up meeting.",
        taskDate: "2025-06-03",
        category: "General",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      total: 4,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI for the new landing page.",
        taskDate: "2025-06-02",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix UI Bugs",
        taskDescription: "Resolve bugs reported by QA.",
        taskDate: "2025-05-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Review Code",
        taskDescription: "Conduct code reviews for the junior devs.",
        taskDate: "2025-06-04",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Feedback Fixes",
        taskDescription: "Apply changes based on feedback.",
        taskDate: "2025-06-01",
        category: "Client",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Write a blog post on the latest tech trends.",
        taskDate: "2025-05-29",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Schedule Campaign",
        taskDescription: "Launch summer ad campaign.",
        taskDate: "2025-06-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Analyze Engagement",
        taskDescription: "Analyze social media engagement metrics.",
        taskDate: "2025-06-02",
        category: "Analytics",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Raj",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Deploy App Update",
        taskDescription: "Release new version of the mobile app.",
        taskDate: "2025-06-01",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Conduct security checks for all endpoints.",
        taskDate: "2025-06-05",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Resolve Outage",
        taskDescription: "Fix server outage issue.",
        taskDate: "2025-06-03",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Sneha",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Onboard New Intern",
        taskDescription: "Complete the onboarding process for new intern.",
        taskDate: "2025-06-04",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Employee Records",
        taskDescription: "Ensure all records are current.",
        taskDate: "2025-05-30",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Organize Team Building",
        taskDescription: "Plan a team-building activity for the department.",
        taskDate: "2025-06-06",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
    // console.log(employees,admin)
    
}
