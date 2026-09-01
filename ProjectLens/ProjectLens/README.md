# ProjectLens

## Structure
```text
ProjectLens/
  backend/                         Maven + Spring Boot API
    pom.xml
    src/main/java/com/mfrp/plens/
      config/ controller/ dto/ exception/ model/ repository/ service/
  frontend/                        Angular application
    src/app/
      core/ shared/ layouts/ features/{auth,dashboard,submissions,reviews,pods}/
```

## Run locally
1. Create a MySQL database: `CREATE DATABASE projectlens;`
2. In `backend`, set `DB_USERNAME` and `DB_PASSWORD`, then run `mvn spring-boot:run`.
3. In `frontend`, run `npm install` then `npm start`.

The placeholder cohort theme is **AI-Enabled Enterprise Applications**; update it when your trainer supplies the final theme.
