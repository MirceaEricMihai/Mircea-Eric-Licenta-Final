import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import about from "./components/About";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import DoctorDashboard from "./components/DoctorDashboard";
import DoctorLogin from "./components/DoctorLogin";
import DoctorRegistration from "./components/DoctorRegistration";
import ForgotPassword from "./components/ForgotPassword";
import Homepage from "./components/Homepage";
import PatientDashboard from "./components/PatientDashboard";
import PatientLogin from "./components/PatientLogin";
import PatientObservationSheets from "./components/PatientObservationSheets";
import PatientRegistration from "./components/PatientRegistration";
import ResetPassword from "./components/ResetPassword";
import SubmitAFile from "./components/SubmitAFile";
import SubmitASheet from "./components/SubmitASheet";
import Prices from "./components/Prices";
import MedicalLetters from "./components/MedicalLetters";
import DoctorAppointment from "./components/DoctorAppointment";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/register/doctor" component={DoctorRegistration} />
          <Route path="/register/patient" component={PatientRegistration} />
          <Route path="/login/doctor" component={DoctorLogin} />
          <Route path="/login/patient" component={PatientLogin} />
          <Route path="/doctor/dashboard" component={DoctorDashboard} />
          <Route path="/doctor/appointment" component={DoctorAppointment} />
          <Route path="/patient/dashboard" component={PatientDashboard} />
          <Route path="/patient/appointment" component={Appointment} />
          <Route path="/patient/forgot-password" component={ForgotPassword} />
          <Route path="/doctor/submit-a-file/:appointment_id" component={SubmitAFile} />
          <Route path="/patient/submit-a-sheet/:appointment_id" component={SubmitASheet} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={about} />
          <Route path="/blog" component={Blog} />
          <Route path="/appointments" component={Prices} />
          <Route path="/patient/reset-password/:token" component={ResetPassword} />
          <Route path="/patient/sheets" component={PatientObservationSheets} />
          <Route path="/patient/medicals" component={MedicalLetters} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
