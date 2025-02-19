---
slug: Sprint 5
title: Sprint 5
authors: [andre]
---

# Sprint 1

**From**: 2024-03-28

**To**: 2024-04-04

**Scrum Master**: Duarte Cruz

**Product Owner**: Bernardo Figueiredo

**Developers**: André Oliveira, Alexandre Cotorobai, Joaquim Rosa, Duarte Cruz

## Sprint Goal

In this sprint, we continued with the implementation of our project code, taking into account the feedback received from the previous sprint. We focused on the implementation of the offer_microservice and recommender_microservice, as well as the integration of the RabbitMQ message queue system. We also worked on the frontend, creating the front page and the navbar, and updating the login and register pages. We also worked on the implementation of the offer list and offer details pages.

- Authentication - Clean Code
- Function to receive new offers on recommender by rabbitMQ
- Implement Offer GET/PUT Endpoints in Offer CRUD Microservice
- Create suplementary CRUDs and Offer Endpoints
- Update Sprint4 Microsite
- Create Queue in RabbitMQ to add new offers to elastic search and add them
- Update relevance score in ES recommender when a offer is bought
- Create List of Offers Page
- Add RabbitMQ Messaging in Offer Creation
- Little Visual Update on Login/Registers Page
- Fix Microservice dockerfiles
- Update APIs to use cors
- Create Offer Details Page
- Add Offer List Endpoints
- Implement message queue to delete offers on recommender
- Add Offer Details Endpoints
- Add Front Page Endpoints

| Expected     | Quantity |
| ------------ | -------- |
| Tasks        | 17       |
| Epics        | 1        |
| Story Points | 51       |

## Sprint Backlog

| Task (Trail-\*) | Description                                                               | Developer           | State    | Story Points |
| --------------- | ------------------------------------------------------------------------- | ------------------- | -------- | ------------ |
| TRAIL-32        | Authentication - Clean Code                                               | Bernardo Figueiredo | Done     | 4            |
| Trail-44        | Function to receive new offers on recommender by rabbitMQ                 | André Oliveira      | Done     | 3            |
| TRAIL-37        | Implement Offer GET/PUT Endpoints in Offer CRUD Microservice              | Joaquim Rosa        | Done     | 3            |
| Trail-45        | Create suplementary CRUDs and Offer Endpoints                             | Alexandre Cotorobai | Done     | 5            |
| Trail-46        | Update Sprint4 Microsite                                                  | André Oliveira      | Done     | 1            |
| Trail-47        | Create Queue in RabbitMQ to add new offers to elastic search and add them | Duarte Cruz         | Done     | 1            |
| Trail-48        | Update relevance score in ES recommender when a offer is bought           | Duarte Cruz         | Done     | 1            |
| Trail-49        | Create List of Offers Page                                                | Hugo Correia        | Done     | 7            |
| Trail-51        | Add RabbitMQ Messaging in Offer Creation                                  | Joaquim Rosa        | Done     | 1            |
| Trail-52        | Little Visual Update on Login/Registers Page                              | Hugo Correia        | Done     | 1            |
| Trail-53        | Fix Microservice dockerfiles                                              | Bernardo Figueiredo | Done     | 2            |
| Trail-54        | Update APIs to use cors                                                   | Bernardo Figueiredo | Done     | 1            |
| Trail-55        | Create Offer Details Page                                                 | Hugo Correia        | Done     | 7            |
| Trail-56        | Add Offer List Endpoints                                                  | Hugo Correia        | Done     | 3            |
| Trail-58        | Implement message queue to delete offers on recommender                   | Duarte Cruz         | Done     | 1            |
| Trail-57        | Add Offer Details Endpoints                                               | Hugo Correia        | Not Done | 2            |
| Trail-50        | Add Front Page Endpoints                                                  | Hugo Correia        | Not Done | 3            |

### Task Status (Completed/Not Completed)

- [x] TRAIL-32 Authentication - Clean Code
- [x] TRAIL-44 Function to receive new offers on recommender by rabbitMQ
- [x] TRAIL-37 Implement Offer GET/PUT Endpoints in Offer CRUD Microservice
- [x] TRAIL-45 Create suplementary CRUDs and Offer Endpoints
- [x] TRAIL-46 Update Sprint4 Microsite
- [x] TRAIL-47 Create Queue in RabbitMQ to add new offers to elastic search and add them
- [x] TRAIL-48 Update relevance score in ES recommender when a offer is bought
- [x] TRAIL-49 Create List of Offers Page
- [x] TRAIL-51 Add RabbitMQ Messaging in Offer Creation
- [x] TRAIL-52 Little Visual Update on Login/Registers Page
- [x] TRAIL-53 Fix Microservice dockerfiles
- [x] TRAIL-54 Update APIs to use cors
- [x] TRAIL-55 Create Offer Details Page
- [x] TRAIL-56 Add Offer List Endpoints
- [x] TRAIL-58 Implement message queue to delete offers on recommender
- [ ] TRAIL-57 Add Offer Details Endpoints
- [ ] TRAIL-50 Add Front Page Endpoints

## Sprint Review

| Completed    | Quantity |
| ------------ | -------- |
| Tasks        | 15       |
| Epics        | 1        |
| Story Points | 46       |

## Sprint Retrospective

In this sprint, we managed to complete 15 out of 17 tasks, which is a good result. We managed to complete the implementation of the offer_microservice and recommender_microservice, as well as the integration of the RabbitMQ message queue system. We have completed all the tasks that was planned for this sprint, except for two additional tasks that were added and were not part of the goals of this sprint.

## Sprint Burnup Chart

![Burndown Chart](../../static/img/sprints/burndown_chart_sprint_5.png)
