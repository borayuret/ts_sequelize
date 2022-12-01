import express from 'express';

const app = express();
const port = process.env.port;

import db from './models';
import {users} from './seeders/users';
import {projects} from './seeders/projects';
import {projectassignments} from './seeders/projectassignments';
import { REPL_MODE_SLOPPY } from 'repl';



// const createProjectAssignments = () => {
//     projectassignments.map(projectassignment => {
//         db.ProjectAssignment.create(projectassignment)
//     })
// }

// createProjectAssignments();

// const createProjects = () => {
//     projects.map(project => {
//         db.Project.create(project)
//     })
// }

// createProjects();

// const createUsers = () => {
//     users.map(user => {
//         db.User.create(user)
//     })
// }

// createUsers();

app.get('/', (req, res) => {
    db.Project.findAll({

        include: {
            model: db.User
        }   
    
    }).then((result: any) => console.log(res.json(result))).catch((err: any) => console.log(err))

})


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Application listening on port ${port}`);
    })
})

