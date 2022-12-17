import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import BusinessDetails from "../Components/BusinessDetails/BusinessDetails";
import LoanDetails from "../Components/LoanDetails/LoanDetails";
import PersonalDetails from "../Components/PersonalDetails/PersonalDetails";
import SubmittedApplication from "../Components/SubmittedApplication/SubmittedApplication";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <PersonalDetails></PersonalDetails>,
      },
      {
        path: "/personalDetails",
        element: <PersonalDetails></PersonalDetails>,
      },
      {
        path: "/businessDetails",
        element: <BusinessDetails></BusinessDetails>,
      },
      {
        path: "/loanDetails",
        element: <LoanDetails></LoanDetails>,
      },
    ],
  },
  {
    path: "/submittedApplication",
    element: <SubmittedApplication></SubmittedApplication>,
    loader: () =>
      axios.get(
        `https://users-bank-info-server.vercel.app/submittedApplication`
      ),
  },
]);
