---
sidebar_position: 2
---

# First Presentation

**Full Apresentation** - [MS2 - EasyReg](../../../static/ppt/EasyRegMS2.pptx)

## Context Of Problem

Multiple Compliance Requirements:

Organizations need to adhere to multiple frameworks, each with its own compliance requirements, resulting in significant complexity in managing the process.

Need for an Integrated Solution:

There is a demand for a centralized platform that automates the tracking and management of requirements, optimizing workflows and ensuring security.


Manual Processes and Risks:

Manual evidence collection and audit execution increase the risk of inconsistencies and errors, while also requiring significant operational effort.


## Non-Functional Requirements ​
**Adaptability**
- The platform must be accessible via a web browser and optimized for mobile devices.​

**Security​**
- The platform must comply with OWASP security standards to prevent attacks like SQL Injection.​

**Maintainability​**
- The system should be easy to maintain and update. ​

**Usability​**
- The system should be easy to use and intuitive.​

**Storage​**
- Backup policies should ensure data recovery in case of failure.​


## Functional Requirements ​
**Authentication, Authorization and Security​**
- Login/Logout of users with safe authentication​
- Management of permissions and access levels associated to roles (RBAC)​
- Secure document access based on user privileges​

**Audits Management​**
- Real time tracking of audits​
- Association of audits to specific standards​
- Creating, editing and removing audits​
 
**Evidences Management​**
- Centralized repository for the storage of evidences​
- Assignment of tasks to contributors for evidence submission​ 
- Upload of evidence in different formats (png, jpge, pdf).​
- Version control for evidences and track of modifications​

**Compliance**
- Automatic generation of reports​
- Metrics dashboard for compliance progress tracking​
- Filters for the visualization of specific data​

## User Stories
# Contributor User Stories


**As a Contributor, I want to access a tenant and a project so that I can work on assigned compliance tasks.**

    Given-> I am logged in and I am a Contributor in a tenant,
    When-> I view the tenant dashboard,
    Then-> I should see a list of tenants that I have access to
    
    Given-> I select a tenant from the list,
    When-> I click on the tenant,
    Then-> I should be shown all the projects associated with that tenant that I have access to

    Given-> I don’t have access permissions for a project,
    When-> I attempt to view the tenant,
    Then-> I should not be able to see or access the projects I am not assigned for.
    
**As a Contributor, I want to upload evidence with a mandatory message, optional file, and optional link so that I can provide compliance documentation.**

    Given-> I am on the evidence submission form,
    When-> I fill in the mandatory message field,
    Then-> I should be able to submit the evidence.
    
    Given-> I choose to upload an optional file,
    When-> I select the file,
    Then-> the system should allow me to attach it to the evidence submission.

    Given-> I select an optional link,
    When-> I enter the link,
    Then-> the system should allow me to attach it to the evidence submission

    Given-> I am submitting evidence,
    When-> I select the compliance category,
    Then-> the system should allow me to associate the evidence with the appropriate category.

**As a Contributor, I want to edit previously uploaded evidence so that I can update incorrect or outdated compliance information.**

    Given-> I have previously uploaded evidence,
    When-> the evidence is in "Pending" status,
    Then-> I should be able to edit the evidence details

    
    Given-> I am the original uploader or authorized user,
    When-> I access the evidence,
    Then-> I should be able to modify the evidence.

    

**As a Contributor, I want to remove evidence so that I can delete outdated or incorrect compliance records.**

    Given-> I have uploaded evidence that is in "Pending" status,
    When-> I choose to delete the evidence,
    Then-> I should be prompted to confirm the deletion.

    Given-> the evidence is in an approved status,
    When-> I attempt to delete it,
    Then-> I should not be allowed to delete the evidence.

**As a Contributor, I want to view the status of submitted evidence so that I can track the progress of compliance submissions.**

    Given-> I have submitted evidence,
    When-> I view the list of my submissions,
    Then-> I should see the current status (pending, approved, rejected) of each evidence item

    Given-> I click on a specific submission,
    When-> I view the submission details,
    Then-> I should see the status and any relevant comments.

    Given-> the status of my evidence changes,
    When-> the status is updated,
    Then-> I should receive a notification about the change

-------------------------------------------------
# Company Owner User Stories



**As a Company Owner, I want to create a tenant so that my organization has a designated compliance workspace.**

    Given-> I am creating a tenant,
    When-> I enter a unique name and description,
    Then-> the system should allow its creation. 
    
    Given-> I successfully create a tenant,
    When-> the process is completed,
    Then-> the system should confirm and display the new tenant making me the CompanyOnwer of that tenant.

    Given-> I am creating a tenant,
    When-> I enter a unique name and description,
    Then the system should allow its creation. 
    
    Given-> I successfully create a tenant,
    When-> the process is completed,
    Then-> the system should confirm and display the new tenant making me the CompanyOnwer of that tenant.  

    Given -> there is an error during creation,
    When -> the process fails,
    Then -> I should see an error message.

**As a Company Owner, I want to create a project under my tenant so that I can manage multiple compliance initiatives separately.**

    Given-> I am logged in as a Company Owner and on the tenant dashboard,
    When-> I click on "Create Project,"
    Then-> I should be able to enter the project name, description, and compliance framework.

    Given-> I enter valid project details and submit,
    When-> the project is created successfully,
    Then-> the system should display the new project in the tenant’s project list.

    Given-> I don’t have the necessary permissions in the tenant,
    When-> I attempt to create a project,
    Then-> I should see an error message indicating insufficient permissions

    Given-> there is an error during creation,
    When-> the process fails,
    Then-> I should see an error message.
    
    
**As a Company Owner, I want to add users to my tenant so that my team can collaborate on compliance efforts.**

    Given-> I am logged in as a Company Owner of a tenant,
    When-> I go to the "Invite User" section in the tenant settings,
    Then-> I should be able to enter the email address of a user to invite them

    Given-> I have invited a user,
    When-> the user receives the invitation,
    Then-> they should be able to get a notification to enter the tenant.

    Given-> I have successfully invited users,
    When-> I access the user list,
    Then-> I should see a list of users and their roles in a project

**As a Company Owner, I want to assign roles to users so that I can control access and responsibilities.**

    Given-> I am logged in as a Company Owner of a tenant,
    When-> I access the "Manage Roles" section,
    Then-> I should be able to assign roles to users in the project.

    Given-> I select a user and assign a role,
    When-> I submit the change,
    Then-> the user should be updated with the new role.

    Given-> I don’t have permission to assign certain roles,
    When-> I attempt to assign a restricted role,
    Then-> I shouldn't be able to access the "Manage Roles" section.

**As a Company Owner, I want to access compliance evidence so that I can monitor compliance status.**

    Given-> I am logged in as a Company Owner of a tenant,
    When-> I access the compliance evidence section,
    Then-> I should be able to filter and search compliance evidence.

    Given-> I view evidence in the system,
    When-> I click on a piece of evidence,
    Then-> I should be able to see the full details of the submitted evidence.

    Given-> I do not have permission to view a specific piece of evidence,
    When-> I attempt to access it,
    Then-> I should be denied access and see a permission error.  

**As a Company Owner, I want to edit or remove compliance evidence so that I can manage my organization’s compliance records.**

    Given-> I have uploaded evidence in the "Pending" state,
    When-> I click on the "Edit" or "Delete" button,
    Then-> I should be able to make changes or remove the evidence.

    Given-> I edit or remove evidence,
    When-> I confirm the action,
    Then-> the system should prompt me with a confirmation message to verify my decision.

    Given-> I delete evidence,
    When-> I confirm the deletion,
    Then-> the system should log the deletion.

**As a Company Owner, I want to access the compliance dashboard so that I can get an overview of compliance performance.**

    Given-> I am logged in as a Company Owner in a tenant,
    When-> I access the compliance dashboard,
    Then-> I should see key information like the number of active projects, evidence statuses, and recent compliance activities.

    Given-> I am on the compliance dashboard,
    When-> I filter by project,
    Then-> the dashboard should update to show compliance data only for the selected project.

    Given-> I click on a compliance metric,
    When-> I view the details,
    Then-> I should see more detailed information about the metric, including relevant charts or tables.
    
---------------------------------------------------
# Internal Auditor User Stories


**As an Internal Auditor, I want to access the compliance dashboard so that I can see all the pending evidence submissions.**

    Given-> I am logged in as an Internal Auditor in a project,
    When-> I navigate to the compliance dashboard,
    Then-> I should see an overview of compliance progress with a list of pending evidence submissions.

    Given-> I access the compliance dashboard,
    When-> I view the pending evidence,
    Then-> I should be able to filter and sort evidence by project, date, or status.

    Given-> I have no pending evidence to review,
    When-> I access the compliance dashboard,
    Then-> I should see a message stating "No pending evidence".

**As an Internal Auditor, I want to evaluate evidence submissions so that I can determine compliance status.**

    Given-> I am logged in as an Internal Auditor in a project,
    When-> I view the list of submitted evidence,
    Then-> I should be able to review the evidence details (files, messages, etc.).

    Given-> I review the evidence,
    When-> I decide on its status,
    Then-> I should be able to mark it accordingly.

    Given I make a decision about evidence,
    When I mark the evidence status,
    Then the system should trigger a notification to the submitter with the new status.

    Given-> I provide feedback,
    When-> I add comments or feedback to a submission,
    Then-> the comments should be saved and visible to the submitter.

------------------------------------------
# External Auditor User Stories

**As an External Auditor, I want to generate compliance reports so that I can provide compliance updates to stakeholders.**

    Given-> I am logged in as an External Auditor in a project,
    When-> I access the "Generate Reports" section,
    Then-> I should be able to generate compliance reports based on the available data.

    Given-> I select the required filters for the report,
    When-> I click on "Generate Report",
    Then-> the system should produce a customizable and exportable report.
    

**As an External Auditor, I want to review Internal Auditors’ reports so that I can validate their assessment and detect inconsistencies.**

    Given-> I am logged in as an External Auditor,
    When-> I access the Internal Auditor’s report section,
    Then-> I should be able to view all submitted reports.

    Given-> I am reviewing a report,
    When-> I analyze the evidence and findings,
    Then-> I should be able to provide feedback on the report and mark any inconsistencies.

    Given-> I provide feedback or changes,
    When-> I save my comments or changes,
    Then-> the system should track my feedback and associate it with the report.

**As an External Auditor, I want to approve or reject an Internal Audit report so that I can confirm compliance with regulatory standards.**

    Given-> I have reviewed the Internal Auditor’s report,
    When-> I click "Approve" or "Reject" based on my evaluation,
    Then-> the report status should be updated accordingly.

    Given-> I reject the Internal Auditor’s report,
    When-> I confirm the rejection,
    Then-> the system should trigger a notification to the Internal Auditor indicating the rejection.

    Given-> I approve the Internal Auditor’s report,
    When-> I confirm the approval,
    Then-> the report should be locked from further editing to ensure its finality.

------------------------------------------------
# Admin User Stories


**As an Admin, I want to update or delete user profiles so that I can manage user access and ensure data security.**

    Given-> I am logged in as Admin,
    When-> I access the "Manage Users" section,
    Then-> I should be able to update or delete user profiles as needed.

    Given-> I select a user profile to update,
    When-> I make changes to the user details and save,
    Then-> the system should update the user profile with the new information.

    Given-> I select a user profile to delete,
    When-> I confirm the deletion,
    Then-> the system should remove the user from the platform and log it in case it's a mistake.

**As an Admin, I want to manage tenants so that I can organize compliance workspaces.**

    Given-> I am logged in as Admin,
    When-> I access the "Manage Tenants" section,
    Then-> I should be able to view, edit, or remove tenants.

    Given-> I select a tenant to manage,
    When-> I make changes to the tenant details and save,
    Then-> the system should update the tenant information accordingly.

**As an Admin, I want to add and remove tenants so that I can ensure correct platform structure.**

    Given-> I am logged in as Admin,
    When-> I go to the "Add Tenant" section,
    Then-> I should be able to enter tenant details and create a new tenant.

    Given-> I select a tenant to remove,
    When-> I confirm the deletion,
    Then-> the system should remove the tenant and log it in case it was a mistake.

**As an Admin, I want to manage the audit process so that compliance evaluations are streamlined.**

    Given-> I am logged in as Admin,
    When-> I access the "Manage Audit Process" section,
    Then-> I should be able to view, update, and oversee the status of audits for tenants.

    Given-> I view an active audit,
    When-> I click on the audit,
    Then-> I should be able to see all compliance assessments and their current status.


**As an Admin, I want to set compliance standards so that organizations can follow predefined regulatory requirements.**

    Given-> I am logged in as an Admin,
    When-> I access the "Set Compliance Standards" section,
    Then-> I should be able to configure and define the required compliance standards for different tenants or projects.

    Given-> I select a compliance standard to configure,
    When-> I save the changes,
    Then-> the system should apply the selected standards to the appropriate tenants or projects.

**As an Admin, I want to define compliance categories, criteria, and non-conformity parameters so that compliance tracking is structured.**

    Given-> I am logged in as Admin,
    When-> I access the "Define Compliance Categories" section,
    Then-> I should be able to create, edit, and delete compliance categories.

    Given-> I configure non-conformity parameters,
    When-> I save the parameters,
    Then-> the system should enforce these parameters during compliance evaluations.

    Given-> I create compliance criteria,
    When-> I apply them to a tenant or project,
    Then-> the system should ensure compliance is tracked according to these criteria.


