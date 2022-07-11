import Navbar from "./Navbar";
import React from "react";
import TabelCardiology from "./PricesTabel/TabelCardiology";
import TabelDermatology from "./PricesTabel/TabelDermatology";
import TabelEndocrinology from "./PricesTabel/TabelEndocrinology";
import TabelGastro from "./PricesTabel/TabelGastro";
import TabelHematology from "./PricesTabel/TabelHematology";
import TabelNeurology from "./PricesTabel/TabelNeurology";
import TabelOphthalmology from "./PricesTabel/TabelOphthalmology";
import TabelPsychiatry from "./PricesTabel/TabelPsychiatry";
import TabelRheumatology from "./PricesTabel/TableRheumatology";
import TabelUrology from "./PricesTabel/TabelUrology";
export default function Prices() {
  return (
    <>
      <Navbar />
      <div className="tabele">
        <h4>Price list</h4>
        <div className="accordion" id="accordionExample">
          <TabelCardiology />
          <TabelDermatology />
          <TabelEndocrinology />
          <TabelGastro />
          <TabelHematology />
          <TabelNeurology />
          <TabelOphthalmology />
          <TabelPsychiatry />
          <TabelRheumatology />
          <TabelUrology />
        </div>
      </div>
    </>
  );
}
