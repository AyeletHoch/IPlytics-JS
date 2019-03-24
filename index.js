let currentId = 1;
let currentProjectId = 1;

let employees = {
	1 : {
		firstName: 'Ayelet',
		lastName: 'Hoch',
		supervisorId: 3,
		project1: 0,
		project2: 0,
	}
}

let projects = {
	1 : {
		name: 'Junior',
		start: 23/03/18,
		slack: 3,
		manager: 0,
		endDate: 0,
		task[],
	}
}

let tasks = {
	1 : {
		taskName: 'FrontendDeveloper',
		taskDescription: 'doing JS',
		duration: 3,
	}
}

const displayEmployees = function() {
	const employeeKeys = Object.keys(employees);
	employeeKeys.forEach((key) => {
		const currentEmployee = employees[key];
		console.log(currentEmployee)
	}
}

const displayProjectTasks = function(ProjectId) {
for(index in projects[projectId].task)
		console.log(projects[projectId].task[index])
	}
}

const addEmployee = function(firstName, lastName, supervisorId, project1, project2) {
	const newId = currentId++;
	currentId = newId;
	employees[newId] = {
		firstName = firstName;
		lastName = lastName;
		supervisorId = supervisorId;
		project1 = project1;
		project2 = project2;
	}
}

const changeSuper = function(employeeId, superId) {
	employees[employeeId] = {
		supervisorId = superId;
	} 
}

const addNewProject = function() {
	const newProjectId = currentProjectId++;
	currentProjectId = newProjectId;
    var name = prompt("Please enter the project name");
    var start = /* Will be taken from the future HTML <input type="date"> */
    var slack = prompt("Please enter the slack");
    var manager = prompt("Please enter the Project Manager's name");
    var endDate = new Date();
    endDate.setDate(start.getDate() + slack);
    projects[newProjectId] = {
    	name = name;
    	start = start;
    	slack = slack;
    	manager = manager;
    	endDate = endDate;
    }
}

const deleteProject = function(delProject) {
    for(project in projects) {
      /*Find which project to delete*/
      if(project == delProject) {
        projects[delProject] = 0;
      }
    }
    for(search in employees) {
    	if(emplyees[search].project1 == delProject) {
    		emplyees[search].project1 == 0 }
		if(emplyees[search].project2 == delProject) {
			emplyees[search].project1 == 0 }
    }
  }

const AssignProjectToEmployee = function(employee_first_name) {
  /*Future Upgrade: Check that employee doesn't have already 2 projects*/
    for(i in employees) {
      /*Find which employee to assign*/
      if(employees[i].firstName == employee_first_name) {
        projects[i].manager = employee_first_name; /*Assign the project*/
      }
    }
  }

const addNewTask = function(name, description, duration) {
	const newtaskId = currenttaskId++;
	currenttaskId = newtaskId;
	tasks[currenttaskId] = {
		taskName = name;
		taskDescription = description;
		duration = duration;
	}
}

const AssignTasktoProject = function(taskId, ProjectId) {
	projects[ProjectId].slack = projects[ProjectId].slack + tasks[taskId].duration;  
	var endDate = new Date();
    endDate.setDate(projects[ProjectId].start + projects[ProjectId].slack);
    projects[ProjectId].endDate = endDate;
    projects[ProjectId].task[i] = taskId;
    const i = i++;
}

const deleteTask = function(delTask) {
    for(task in tasks) {
      /*Find which task to delete*/
      if(task == delTask) {
        tasks[delTask] = 0;
    for(project in projects) {
    	for (j in projects[project].task)
    	/*Find the task to delete in Projects*/
    	if (projects[project].task[j] == delTask) { project[project].task[j] = 0 }
    } } }
}

const TotalDays = function(project1, project2, project3) {
total = 0;
for(j in projects) {
	if ((j==project1)||(j==project2)||(j==project3)) {
		for(m in projects[j].task[m]) {
		total = total + task[m].duration; } }
}
return total;
}