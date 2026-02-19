import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  // Carrega a API dinamicamente
  const loadAPI = () => {
    return new Promise((resolve, reject) => {
      if (window.fetchAPI) {
        resolve();
      } else {
        const script = document.createElement("script");
        script.src = "https://raw.githubusercontent.com/courseraap/capstone/main/api.js";
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      }
    });
  };

  useEffect(() => {
    const initTimes = async () => {
      try {
        await loadAPI();
        const today = new Date();
        const times = await window.fetchAPI(today);
        setAvailableTimes(times);
      } catch (error) {
        console.error("Erro ao carregar API:", error);
      }
    };
    initTimes();
  }, []);

  const updateTimes = async (date) => {
    if (!window.fetchAPI) return;
    const times = await window.fetchAPI(new Date(date));
    setAvailableTimes(times);
  };

  const submitForm = (formData) => {
    if (window.submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
