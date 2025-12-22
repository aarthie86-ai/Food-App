# Food Order App — Project Documentation

## 1. Heading of project

Food Order App

---

### 1.1 Project description

The Food Order App is a course-end project that demonstrates a simple food ordering user interface where a customer can browse menu items, add to cart, and check out. The delivered workspace contains static front-end pages (HTML, CSS, JS) and images demonstrating UI and flows. For learning exercises, the project can be extended with a backend implemented in Java (or other languages) for persistence and business logic.

#### 1.1.2 Tech stack
- HTML / CSS / JavaScript (front-end — implemented in this repo)
- Java (optional / recommended for backend implementation)
- File Handling (for a Java assignment storing orders/users in files)
- Data structures (for in-memory representations, queues/lists/maps)

---

## 2. Architecture diagram / flow chart

High-level flow:

1. User opens index.html (home page).
2. User navigates to menu.html to browse menu items.
3. User adds items to cart.html and proceeds to checkout.html.
4. After checkout, user sees orderconfirmation.html.

Include screenshots of the flow and architecture diagrams below (from the Images folder).

See images in the project Images/ folder: logo.png, img1.png, img2.png, etc.

---

## 3. Project User Stories (Agile / Scrum)

Idea -> User stories -> Track in Jira (optional). Example user stories (As a <role> I want <feature> so that <goal>):

1. As a user I want a menu page so that I can browse available food items.
2. As a user I want a registration/signup page so that I can create an account.
3. As a user I want a login page to authenticate so that I can access my orders.
4. As a user I want a cart so that I can add and review selected items before checkout.
5. As an admin I want to add/edit/delete menu items so that I can manage offerings.
6. As a developer I want to create console or UI interactions to test flows.

Sprint 1 (1 week): implement menu UI and product cards.
Sprint 2 (1 week): implement cart UI and checkout flow.
Sprint 3 (1 week): add admin pages and order view.

---

## 4. Project Git Repository

- Make sure your GitHub repository is under your GitHub username.
- Example clone command (replace with your repo URL):

git clone https://github.com/your-username/your-repo.git

Add a screenshot of your GitHub repo page if required for submission.

---

## 5. How to run project (local)

1. Clone project:
git clone <your-repo-url>
cd "Food order App"

2. Open the site:
- Double-click index.html or run a simple static server:
python3 -m http.server 8000
Open http://localhost:8000 in your browser.

3. Useful pages:
- index.html — Home
- menu.html — Browse menu
- cart.html — View and manage cart
- checkout.html — Checkout form
- login.html, signup.html — Authentication pages
- admin.html, addmenuitem.html, deletemenuitem.html, vieworders.html — Admin pages

Admin credentials (sample):
Username: admin
Password: admin123

Assumption: There is only one admin and one regular user in this demo.

---

## 6. Directory structure

- index.html
- aboutus.html
- menu.html
- cart.html
- checkout.html
- login.html
- signup.html
- admin.html
- addmenuitem.html
- deletemenuitem.html
- vieworders.html
- CSS/
- JS/
- Images/
- README.md

---

## 7. Source code files

- index.html — landing page
- menu.html — menu listing and product cards
- cart.html & checkout.html — cart and checkout UI
- login.html & signup.html — auth UI
- admin pages for management
- CSS/ and JS/ folders for styles and scripts

---

## 8. Output screenshots

Place screenshots in Images/ or docs/screenshots/:
- index.png, menu.png, cart.png, admin.png

---

## 9. Notes & Assumptions

- Static front-end demonstration only.
- Admin credentials are sample defaults for demonstration.
- Only one admin and one user are assumed for this project.

---

## 10. Future work

- Add backend persistence (Java/Node) and secure auth.
- Add database and tests, CI/CD pipeline.

End of document.
