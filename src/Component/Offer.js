import React from "react";
import Records from "../Records.json";
import { FiWifi } from "react-icons/fi";
import { TbParking, TbBuilding } from "react-icons/tb";
import {  StyledLine } from './styled';
// import { Pricing } from '../PricingRouting';

import {
  GiCctvCamera,
  GiElectric,
  GiHotSurface,
  GiWashingMachine,
} from "react-icons/gi";

import { StyledSpan} from "./styled";
//style
const style = {
  color: "#D179FF",
  marginRight: "20px"
};

export default function Offer() {
  return (
    <>
   
    <StyledLine/>
      {Records &&
        Records.map((record) => {
          return (
            <div>
              {record &&
                record.facilities.map((data) => {
                  return (
                    <div>
                      <div className="icons">
                        <StyledSpan className="leftbox">
                          <div className="Wifi">
                          {data.Wifi ? <FiWifi style={style} /> : null}{data.Wifi}{" "}
                          </div>
                          <div className="Laundary">
                          {data.Laundary ? <GiWashingMachine style={style} />: null}
                            {data.Laundary}{" "}
                          </div>
                          <div className="Parking">
                          {data.Parking? <TbParking style={style} />: null}
                            {data.Parking}
                          </div>
                          <div className="Terrace">
                          {data.Terrace ? <TbBuilding style={style} />: null}
                            {data.Terrace}{" "}
                          </div>
                        </StyledSpan>
                        <StyledSpan className="rightbox">
                          <div className="CCTV">
                          {data.CCTV ?   <GiCctvCamera style={style} />: null}
                            {data.CCTV}
                          </div>
                          <div className="Electricity">
                          {data.Electricity ? <GiElectric style={style} /> : null}
                            {data.Electricity}{" "}
                          </div>
                          <div className="container">
                          {data.HotWater ?   <GiHotSurface style={style} />: null}
                            {data.HotWater}
                          </div>
                          
                        </StyledSpan>
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
        {/* <StyledLine/>
         <Pricing/> */}
    </>
  );
}
