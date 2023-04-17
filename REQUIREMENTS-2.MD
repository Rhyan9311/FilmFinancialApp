## Tier 1: All Investor and Filmmakers (26/59)

<details>

### Frontend

#### Investor

  <details>

- [ ] Write a component to display a list of all Investor (at least their names and images)
- [ ] Write a Investor sub-reducer to manage Investor in your Redux store
- [ ] Display the all-Investor component when the url matches `/Investor`

  </details>

#### Filmmakers

  <details>

- [ ] Write a component to display a list of all Filmmakers (at least their names)
- [ ] Write a Filmmakers sub-reducer to manage Filmmakers in your Redux store
- [ ] Display the all-Filmmakers component when the url matches `/Filmmakers`

  </details>

#### Navbar

  <details>

- [ ] Add a links to the navbar that can be used to navigate to the all-Investores view and the all-Filmmakers view

  </details>

### Backend

#### Seed

  <details>

- [x] Write a function which sync's and seeds your database when your application starts

  </details>

#### Investor

  <details>

  - [x] Write a route to serve up all Investor

- Write a `Investor` model with the following information:
  - [x] name - not empty or null
  - [x] imageUrl - with a default value
  - [x] riskTolerance - not empty or null
  - [x] investmentAmount - extremely large text
  - [x] investmentLength - extremely large text

  </details>

#### Filmmakers

  <details>

  - [x] Write a route to serve up all Filmmakers

- Write a `Filmmakers` model with the following information:

  - [x] firstName - not empty or null
  - [x] lastName - not empty or null
  - [x] email - not empty or null; must be a valid email
  - [x] imageUrl - with a default value
  - [x] projectHistory - decimal between 0.0 and 4.0

- [ ] Investor may be associated with at most one Investor. Likewise, Filmmaker may be associated with many Investor.

  </details>

</details>


  - [x] Create Single Investor
  - [x] Create Single Investor Slice
  - [x] Create All Investor
  - [x] Create All Investor Slice

when adding new features...
  - [ ] update the index.js
  - [ ] update the store.js //need allInvestor
  - [ ] update the AppRoutes.js
  - [ ] update the App.js

  double check...
  - [ ] The API


Next Steps
  - [ ] Update App Routes so when signing up or logging in, the menue will change to what role the user is



  Navbar
  - [ ] Update Navbar // Investor, Filmmaker
  - [ ] Update Navbar based on the role

      Investor
  - [ ] 
