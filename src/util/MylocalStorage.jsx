/* eslint-disable no-unused-vars */

const employees =  [
  {
    "id": 1,
    "name": "Chandu",
    "role": "Software Engineer",
    "email": "employee1@example.com",
    "password": "123",
    "task_counts": {
      "active": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Develop API",
        "description": "Create REST API for user authentication",
        "priority": "High",
        "task_date": "2025-02-22",
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Bugs",
        "description": "Resolve critical bugs reported by QA",
        "priority": "Medium",
        "task_date": "2025-02-23",
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review PRs from other developers",
        "priority": "Low",
        "task_date": "2025-02-24",
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fixing Sprint",
        "description": "Resolve major issues before release",
        "priority": "High",
        "task_date": "2025-02-25",
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "name": "John",
    "role": "Project Manager",
    "email": "employee2@example.com",
    "password": "123",
    "task_counts": {
      "active": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Project Planning",
        "description": "Outline project roadmap and deliverables",
        "priority": "Medium",
        "task_date": "2025-02-23",
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project updates with stakeholders",
        "priority": "High",
        "task_date": "2025-02-24",
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Budget Review",
        "description": "Analyze financials for next quarter",
        "priority": "Low",
        "task_date": "2025-02-25",
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Risk Analysis",
        "description": "Identify potential project risks",
        "priority": "Medium",
        "task_date": "2025-02-26",
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "name": "Alice",
    "role": "Frontend Developer",
    "email": "employee3@example.com",
    "password": "123",
    "task_counts": {
      "active": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "title": "UI Design Review",
        "description": "Check design implementation",
        "priority": "High",
        "task_date": "2025-02-22",
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Component Refactor",
        "description": "Optimize React components",
        "priority": "Medium",
        "task_date": "2025-02-23",
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "CSS Fixes",
        "description": "Resolve styling issues",
        "priority": "Low",
        "task_date": "2025-02-24",
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Accessibility Testing",
        "description": "Ensure compliance with WCAG",
        "priority": "Medium",
        "task_date": "2025-02-25",
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "David",
    "role": "Backend Developer",
    "email": "employee4@example.com",
    "password": "123",
    "task_counts": {
      "active": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Improve query performance",
        "priority": "High",
        "task_date": "2025-02-22",
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Documentation",
        "description": "Update Swagger documentation",
        "priority": "Medium",
        "task_date": "2025-02-23",
        "active": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Identify vulnerabilities in the system",
        "priority": "Low",
        "task_date": "2025-02-24",
        "active": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Resolve reported security issues",
        "priority": "High",
        "task_date": "2025-02-25",
        "active": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": 100,
    "name": "Chandrakanth",
    "role": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
  
];

export  const setLocalStorage=()=>{

localStorage.setItem("employees",JSON.stringify(employees));
localStorage.setItem("admin",JSON.stringify(admin));

}
export const getLocalStorage=()=>{
 const employeesData = localStorage.getItem('employees');
 const adminData = localStorage.getItem('admin');
 const employees = employeesData ? JSON.parse(employeesData) : null;
 const admin = adminData ? JSON.parse(adminData) : null;
 
 return{employees,admin}
}
