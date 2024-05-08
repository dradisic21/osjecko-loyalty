import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { PersonalInformation } from "./pages/PersonalInformation/PersonalInformation";
import { ChangePassword } from "./pages/ChangePassword/ChangePassword";
import { CollectPoints } from "./pages/CollectPoints/CollectPoints";
import { SharePage } from "./pages/SharePage/SharePage";
import { PointsPage } from "./pages/PointsPage/PointsPage";
import { CodeHistory } from "./pages/CodeHistory/CodeHistory";
import { ChangesCode } from "./pages/ChangesCode/ChangesCode";
import { ChangePointForReward } from "./pages/ChangePointForReward/ChangePointForReward";
// import { CameraScanPage } from "./pages/CameraScanPage/CameraScanPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { CookiesPage } from "./pages/CookiesPage/CookiesPage";
import { Cookies } from "./layout/Cookie/Cookies";
import { CheckYourMail } from "./pages/CheckYourMail/CheckYourMail";
import { ConfirmEmailPage } from "./pages/ConfirmEmailPage/ConfirmEmailPage";
import { ProductDelivery } from "./pages/ProductDelivery/ProductDelivery";
import { Report } from "./pages/Report/Report";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";
import { Faq } from "./pages/Faq/Faq";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { SendOrderForm } from "./pages/SendOrderForm/SendOrderForm";
import { RecoverPassword } from "./pages/RecoverPassword/RecoverPassword";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";
import { useAuth } from "./services/context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { GoogleOAuthProvider } from '@react-oauth/google';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { loggedInUser } = useAuth();

  return (
    <Router>
      <GoogleOAuthProvider clientId="754024932907-rmtcla5qls0ki3k6bccdvmkq5dlpfind.apps.googleusercontent.com">
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ zIndex: 99999 }}
          />
          <Cookies />
          <ScrollToTop />
          <Routes>
            <Route path="" element={<HomePage />} />
            {loggedInUser && (
              <>
                <Route path="profile" element={<ProfilePage />} />
                <Route
                  path="personal-information"
                  element={<PersonalInformation />}
                />
                <Route path="change-password" element={<ChangePassword />} />
                <Route path="collect-points" element={<CollectPoints />} />
                <Route path="points" element={<PointsPage />} />
                <Route path="history" element={<CodeHistory />} />
                <Route path="changes-code" element={<ChangesCode />} />
                <Route path="share" element={<SharePage />} />
                {/* <Route path="cam-scan" element={<CameraScanPage />} /> */}
                  <Route
                    path="change-points"
                    element={<ChangePointForReward />}
                  />
                  <Route path="send-order" element={<SendOrderForm />} />
                <Route
                  path="product-delivery/:id"
                  element={<ProductDelivery />}
                />
                <Route path="report" element={<Report />} />
                <Route path="success-change" element={<SuccessPage />} />
              </>
            )}
            <Route path="recover-password" element={<RecoverPassword />} />
            <Route path="check-email" element={<CheckYourMail />} />
            <Route path="email-confirmation" element={<ConfirmEmailPage />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="faq" element={<Faq />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
