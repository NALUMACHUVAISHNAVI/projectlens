# ProjectLens

ProjectLens is a local full-stack application for evaluating pod project ideas against a fixed cohort theme. Pod Leads submit ideas, the backend calculates an alignment score and similarity warning, and Trainers make final decisions.

## Run

1. Create the database: `CREATE DATABASE projectlens;`
2. Update `backend/src/main/resources/application.properties` with your MySQL password.
3. Run backend: `cd backend; mvn spring-boot:run`
4. Run frontend: `cd frontend; npm install; npm start`
5. Open `http://localhost:4200`.

The frontend calls `http://localhost:8080/api/submissions`.
