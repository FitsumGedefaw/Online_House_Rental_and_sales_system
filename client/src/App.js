import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Buy from "./pages/Buy";
import LandingPage from "./pages/LandingPage";
import Rent from "./pages/Rent";
import Test from "./pages/Test";
import HomeDetails from "./pages/HomeDetails";
import { DashboardContextProvider } from "./contexts/DashboardContextProvider";
import HomeownerDashboard from "./pages/dashboards/HomeownerDashboard";
import PlacesFormPage from "./pages/PlacesFormPage";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import HomesList from "./pages/HomesList";
import styles from "./App.module.css";
import DetailsPage from "./pages/DetailsPage";
import UsersList from "./pages/UsersList";
import RequestsPage from "./pages/RequestsPage";
import HomesListing from "./pages/HomesListing";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

//blue-black: #091240 ,  light-blue: #1890db

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<HomesListing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/homeOwner"
            element={
              <DashboardContextProvider>
                <HomeownerDashboard />
              </DashboardContextProvider>
            }
          >
            <Route path="homes">
              <Route path="onListing" element={<HomesList />} />
              <Route path="rented" element={<HomesList rented={true} />} />
              <Route path="new" element={<PlacesFormPage />} />
            </Route>
            <Route
              path="applicants"
              element={<UsersList userType="applicant" />}
            />
            <Route
              path="tenants"
              element={
                <UsersList userType="tenant/plain" removeDropdown={true} />
              }
            />
            <Route path="maintenanceRequests" element={<RequestsPage />} />
          </Route>

          <Route
            path="/admin"
            element={
              <DashboardContextProvider>
                <AdminDashboard />
              </DashboardContextProvider>
            }
          >
            <Route path="homes">
              <Route path="onListing" element={<HomesList forAdmin={true} />} />
              <Route
                path="rented"
                element={<HomesList forAdmin={true} rented={true} />}
              />
              <Route path="home" element={<HomeDetails forAdmin={true} />} />
            </Route>
            <Route path="users">
              <Route path="homeOwners" element={<UsersList />} />
              <Route path="homeOwners/homeOwner" element={<DetailsPage />} />
              <Route
                path="tenants"
                element={<UsersList userType="tenant" />}
              />
              <Route
                path="buyers"
                element={<UsersList userType="buyer" />}
              />
            </Route>
            <Route path="reports" element={<Test />} />
          </Route>
          <Route path="/homeDetails" element={<HomeDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
